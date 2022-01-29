import { MutationOutput } from 'src/common/dtos/output.dto';
import { User } from '../entities/user.entity';
declare const CreateAccountInput_base: import("@nestjs/common").Type<Pick<User, "nickname" | "email" | "password" | "profileImg">>;
export declare class CreateAccountInput extends CreateAccountInput_base {
}
export declare class CreateAccountOutput extends MutationOutput {
}
export {};
