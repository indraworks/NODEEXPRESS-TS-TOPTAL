//smua dto isinya adalah interface dari user
//atau shape object dari table user di database nnti dipart 3
//skrng database blum ada hanya pakai array

//put user dan creae user sama karena sama2 objectnya dari table yg sama
export interface PutUserDto {
  id: string
  email: string
  password: string
  firstName: string
  lastName: string
  permissionLevel: number
}

//utk pathc adalah partial dari putUserDto
//kalau patch itu ganti field column bukan ganti satu record
