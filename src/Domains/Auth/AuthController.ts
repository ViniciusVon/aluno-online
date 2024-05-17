import { Request, Response } from "express"
import { AuthService } from './AuthService'

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body

    const authService = new AuthService()
    const authResponse = await authService.login({ email, password })

    if (!authResponse) {
      throw new Error("Usuário não encontrado")
    }

    const response = {
      body: {
        token: authResponse.token,
        user: authResponse.user
      }
    }
    
    res.send(response)
    }
}