import { ImageContainer } from 'src/image-container/entities/image-container';
import { Repository } from 'typeorm';
import { ProvideImage } from './entities/provide-image.entity';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
import { DonateSession } from 'src/donate-session/entities/donate-session.entity';
import { CreateProvideImageInput } from './dtos/create-provide-image.dto';
export declare class ProvideImageService {
    private readonly provideImage;
    private readonly donates;
    private readonly images;
    private readonly jwtService;
    constructor(provideImage: Repository<ProvideImage>, donates: Repository<DonateSession>, images: Repository<ImageContainer>, jwtService: JwtService);
    createProvideImage(providingUser: User, { donateId, transactionId }: CreateProvideImageInput): Promise<{
        ok: boolean;
        error?: string;
    }>;
    findByToken(token: string): Promise<ProvideImage>;
    myImages(providingUser: User): Promise<{
        ok: boolean;
        error?: string;
    }>;
}
