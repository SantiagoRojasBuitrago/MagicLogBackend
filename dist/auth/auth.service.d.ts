import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<import("../users/schemas/user.schema").User>;
    login(user: any): Promise<{
        access_token: string;
        user: {
            id: any;
            nombre: any;
            email: any;
            rol: any;
        };
    }>;
}
