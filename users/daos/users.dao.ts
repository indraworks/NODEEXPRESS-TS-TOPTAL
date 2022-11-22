/*
pada daos ini ,sebenarbya representasi dair schema database
tapi utk bagian 2 ini 
tikda buat database jadi hanay semacam [{}] 
obejct2 eleent dalam array dimana shape objectnya sudah di buat di dto !
kita import dto disini 
utk shortid dari npm shortid utk buat id otomatis 
*/

import { CreateUserDto } from "../dto/create.user.dto"
import { PatchUserDto } from "../dto/patch.user.dto"
import { PatchUserDto } from "../dto/patch.user.dto"
import debug from "debug"
import shortid from "shortid"
const log: debug.IDebugger = debug("app:in-memory-dao")

/**
 * NEVER USER THIS CLASS IN REAL LIFE.
 * This class was created to ease the explanation of other topics in the corresponding article.
 * For any real-life scenario, consider using an ODM/ORM to manage your own database in a better way.
 */

class UsersDao {
  //var localnya adalah array dari interface createUserDto
  //disest anotation value awal  adalah arary kosong []
  Users: Array<CreateUserDto> = []

  constructor() {
    log("create new instance of UsersDAO")
  }

  async addUser() {}
  async getUsers() {}
  async getUserById() {}
}
