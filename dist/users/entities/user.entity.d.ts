import { CoreEntity } from 'src/common/entities/core.entity';
import { ProvideImage } from 'src/provide-image/entities/provide-image.entity';
export declare class User extends CoreEntity {
    nickname: string;
    email: string;
    password: string;
    profileImg?: string;
    provideImage: ProvideImage[];
    hashPassword(): Promise<void>;
    checkPassword(notSaltPassword: string): Promise<boolean>;
}
