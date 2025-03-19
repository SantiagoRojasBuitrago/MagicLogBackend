import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    register(email: string, password: string, role: string): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
