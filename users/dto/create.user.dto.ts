//smua dto isinya adalah interface dari user
//atau shape object dari table user di database nnti dipart 3
//skrng database blum ada hanya pakai array

export interface CreateUserDto {
  id: string
  email: string
  password: string
  firstName?: string
  lastName: string
  permitionLevel?: number
}
