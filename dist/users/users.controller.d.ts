import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(email: string, password: string, role: string): Promise<import("./schemas/user.schema").User>;
    getProfile(req: any): any;
}
