import { UserRepository } from "../Users"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { IUser } from "../Users/types"

interface ILoginParams {
    email: string
    password: string
}

interface ILoginResponse{
  user: IUser
  token: string
}

// : Promise<boolen> está especificando o tipo da resposta que a fincao vai retornar
export class AuthService {
    async login({ email, password }: ILoginParams): Promise<ILoginResponse> {
      const userRepository = new UserRepository()
      const userFound = await userRepository.getUserByEmail(email)
  
      if(!userFound) throw new Error("No user was found")

      //const hashedPassword = await hash(password, 10)
      const doesPasswordMatched = await compare(password, userFound.password)

      if(!doesPasswordMatched){
        throw new Error("No permission to auth")
      }

      const JWT_SECRET = process.env.JWT_SECRET
      const JWT_EXPIRE_PERIOD = process.env.JWT_EXPIRE_PERIOD

      const token = sign({}, JWT_SECRET, {
        subject: String(userFound.id),
        expiresIn: JWT_EXPIRE_PERIOD
      })

      return {
        user: userFound,
        token
      }
    }
  }
