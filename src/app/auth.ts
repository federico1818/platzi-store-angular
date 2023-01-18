import { Token } from "./token"
import { User } from "./user"

export interface Auth {
    user: User
    token: Token
}
