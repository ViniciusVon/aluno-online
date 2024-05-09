import { Request, Response } from "express"
import { AuthService } from './AuthService'

export class AuthController {
  async handle(req: Request, res: Response) {
    console.log(req.body)
    const { email, password } = req.body

    const authService = new AuthService()
    const isUserAuthenticated = authService.login({ email, password })

    if (!isUserAuthenticated) {
      throw new Error("Usuário não encontrado")
    }

    return {
      body: "Usuário Autenticado com sucesso"
    }
        //nao temos bd ainda
        //vamos simular um bd e depois colocar um de verdade

        //Pegar no bd o usuario com esse email 
        //VErificar se o usuario é encontrado
        // Se for encontrad, a senha precisa ser igual

        //const authService = new AuthService()
    }
}