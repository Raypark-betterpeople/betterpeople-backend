import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageContainer } from 'src/image-container/entities/image-container';
import { Repository } from 'typeorm';
import { ProvideImage } from './entities/provide-image.entity';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';

@Injectable()
export class ProvideImageService {
  constructor(
    @InjectRepository(ProvideImage)
    private readonly provideImage: Repository<ProvideImage>,
    @InjectRepository(ImageContainer)
    private readonly imageContainer: Repository<ImageContainer>,
    private readonly jwtService: JwtService,
  ) {}
  //provide image에 필요한 것
  //image container에서 dicenumber을 가져와서 랜덤 하나를 선택 후 imageurl push
  //context에서 userid받아서 provideImgUserId push
  //create provide image
  async createProvideImage(
    providingUser: User,
  ): Promise<{ ok: boolean; error?: string }> {
    try {
      let randNum = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
      const image = this.imageContainer.findOne({ diceNumber: randNum });
      const imageURL = (await image).imageUrl;
      const VerifyToken = this.jwtService.signToken({
        check: 'copyright of the better people Inc.',
      });
      console.log(VerifyToken);
      const newProvideImage = this.provideImage.create({
        token: VerifyToken,
        imageUrl: imageURL,
      });
      newProvideImage.providingUser = providingUser;
      await this.provideImage.save(newProvideImage);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: '이미지를 생성할 수 없습니다.' };
    }
  }
}
