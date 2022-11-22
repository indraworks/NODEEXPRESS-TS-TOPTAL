import express from "express"
//mbuat abstraact class
export abstract class commonRouteConfig {
  //variable local
  app: express.Application
  name: string
  constructor(app: express.Application, name: string) {
    this.app = app
    this.name = name
    //method
    this.configureRoutes()
  }
  getName() {
    return this.name
  }
  abstract configureRoutes(): express.Application
}

/*/////CLASS INI ADALAH MERUPAKAN ASBtrACT KELAS YG DGIUNAKAN  UTK BUAT CLASS ROUTER ////
kita pake abstract class instead interface 
jadi nnti di app,ts route yg sudah dibuat pada saat listen 
di list 
routes.push(new UsersRoutes(app));
ini manggil atau isntance UserRoute class yg 
confignya ada di folder Users 
jadi sbnarnya kita mishakan berdasarkan domain object
mis buat backend Todo ada User dan ada Todo  
nah utk user pada part pertama git comit hanya ada opersai CRUD
blum di psah dgn controllers yg nnti buat dgn interface 
shigga tiap2 domain type idenetity dari interface CRUD masing2 domain 


*/
