import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
export declare class ProvideImage extends CoreEntity {
    providingUser: User;
    imageUrl: string;
    token: string;
}
