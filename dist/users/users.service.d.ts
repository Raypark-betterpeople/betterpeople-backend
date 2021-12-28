import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { LoginInput } from './dtos/login.dto';
import { User } from './entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { Verification } from './entities/verification.entity';
import { VerifyEmailOutput } from './dtos/verify-email.dto';
export declare class UsersService {
    private readonly users;
    private readonly verifications;
    private readonly jwtService;
    constructor(users: Repository<User>, verifications: Repository<Verification>, jwtService: JwtService);
    createAccount({ email, password, nickname, profileImg, }: CreateAccountInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
    login({ email, password, }: LoginInput): Promise<{
        ok: boolean;
        error?: string;
        token?: string;
    }>;
    findById(id: number): Promise<User>;
    editProfile(id: number, editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
    verifyEmail(code: string): Promise<VerifyEmailOutput>;
}
