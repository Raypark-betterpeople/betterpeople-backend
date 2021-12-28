import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { EditProfileInput, EditProfileOutput } from './dtos/edit-profile.dto';
import { LoginInput, LoginOutput } from './dtos/login.dto';
import { UserProfileInput, UserProfileOutput } from './dtos/user-profile.dto';
import { VerifyEmailInput, VerifyEmailOutput } from './dtos/verify-email.dto';
import { UsersService } from './users.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UsersService);
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    Login(loginInput: LoginInput): Promise<LoginOutput>;
    me(context: any): any;
    userProfile(context: any, userProfileInput: UserProfileInput): Promise<UserProfileOutput>;
    editProfile(context: any, editProfileInput: EditProfileInput): Promise<EditProfileOutput>;
    verifyEmail(verifyEmailInput: VerifyEmailInput): Promise<VerifyEmailOutput>;
}
