import { ImageContainer } from 'src/image-container/entities/image-container';
import { Repository } from 'typeorm';
import { ProvideImage } from './entities/provide-image.entity';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
export declare class ProvideImageService {
    private readonly provideImage;
    private readonly imageContainer;
    private readonly jwtService;
    constructor(provideImage: Repository<ProvideImage>, imageContainer: Repository<ImageContainer>, jwtService: JwtService);
    createProvideImage(providingUser: User): Promise<{
        ok: boolean;
        error?: string;
    }>;
    findByToken(token: string): Promise<ProvideImage>;
}
