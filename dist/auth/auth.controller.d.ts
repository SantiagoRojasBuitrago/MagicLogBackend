import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, password: string): Promise<{
        access_token: string;
        user: {
            id: any;
            nombre: any;
            email: any;
            rol: any;
        };
    }>;
}
