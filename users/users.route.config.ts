import { Application } from "express"
import { commonRouteConfig } from "../common/commonRouteConfig"
import express, { Request, Response, NextFunction } from "express"
//class userRouteConfig
export class UsersRoutes extends commonRouteConfig {
  constructor(app: express.Application) {
    //copy va construct dari parent abstract class
    super(app, "UsersRoutes") //ini default utk variable name
    //name diisi  "UsersRoutes"
    //makanya waktu di app.ts  routrs.push(new UserRoutes(app))
  }
  configureRoutes(): express.Application {
    //isi CRUD dari UsersRoute
    //end point /users
    this.app
      .route("/users")
      .get((req: Request, res: Response) => {
        res.status(200).send(`List of Users`)
      })
      .post((req: Request, res: Response) => {
        res.status(200).send("Post to users")
      })

    //end point /users/:id
    this.app
      .route("/users/:userId")
      .all((req: Request, res: Response, next: NextFunction) => {
        //ini req .all adalah  midlware check sblum semua request (get,post,put)
        //masuk ke end-point :"/users/:userId"
        next()
      })
      .get((res: Response, req: Request) => {
        res.status(200).send(`GET requested for id ${req.params.userId}`)
      })
      .put((req: Request, res: Response) => {
        res.status(200).send(`PUT requested for id : ${req.params.userId}`)
      })
      .patch((req: Request, res: Response) => {
        res.status(200).send(`PATCH requested for id : ${req.params.userId}`)
      })
      .delete((req: Request, res: Response) => {
        res.status(200).send(`DELETE requested for id : ${req.params.userId}`)
      })

    return this.app //harus ada return krn kmbalian express.Application
  }
}

/*
testing bisa langusung pake :

kaau masih kosongan !

curl --request GET 'localhost:3000/users/12345'

utk post bisa dicoba:
curl --request POST localhost:3000/users --data-raw ''


*/
