export interface CRUD {
  //ini smua andalah anomiys function  yg return typedata stlah tanda =>
  //dan yg didalam tanda kurung adalah paramter
  list: (limit: number, page: number) => Promise<any>
  create: (resource: any) => Promise<any>
  putById: (id: string, resource: any) => Promise<string>
  readById: (id: string) => Promise<any>
  deleteById: (id: string) => Promise<string>
  patchById: (id: string, resource: any) => Promise<string>
}
