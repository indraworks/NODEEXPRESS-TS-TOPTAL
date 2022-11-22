import express from "express"
import * as http from "http"
import * as winston from "winston"
import * as expressWinston from "express-winston"
import cors from "cors"
import { commonRouteConfig } from "./common/commonRouteConfig"
import { UsersRoutes } from "./users/users.route.config"
import debug from "debug"

//bawah:app di decalre sbgai object/instance dari class express() yg bertype express.Application
const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port = 3000
//routes bertype commonRouteConfig[] = [] //yaitu bertyo array dari class commonRouteConfig
//dimana nnti objec yg diinstance dari classcommonRouteConfig
//di push masuk di variable array routes ini
const routes: Array<commonRouteConfig> = []
const debugLog: debug.IDebugger = debug("app")

//Middleware
app.use(express.json())
app.use(cors())

//express Winston utk logger
//stipa transaksi client-server trcatat /trekam
//ini declare option format yg akan tampil di layar
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
}
//debug
if (!process.env.DEBUG) {
  loggerOptions.meta = false
}

//declare use expressWinston with loggerOptiosnya
app.use(expressWinston.logger(loggerOptions))

//masukan di routes array stlah instance object dari class UsersRoutes(app)
//dimana class UsersRoutes extends dari abstract class commonROuteConfig
//dimana object yg  dibuat tanpa variabelvariabel otomatis sistem yg buatdan masuk di array routes<commonROuteConfig>[]
routes.push(new UsersRoutes(app))
const runningMessage = `Server Running Message On localhost:${port}`
app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage)
})

//waktu listen server routes (note:routes<commonROuteConfig>[]) meng configure active routenya
//atau smua list route yg sudah dicreate dgn
//dgn opersi forEach , routes.
//yg sudah dibuat pada server ini sbb:
server.listen(port, () => {
  routes.forEach((route: commonRouteConfig) => {
    debugLog(`Routes configured for ${route.getName()}`)
  })
  console.log(runningMessage)
})
