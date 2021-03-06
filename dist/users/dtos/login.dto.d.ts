import { MutationOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';
declare const LoginInput_base: import("@nestjs/common").Type<Pick<User, "password" | "email">>;
export declare class LoginInput extends LoginInput_base {
}
export declare class LoginOutput extends MutationOutput {
    token?: string;
}
export {};
