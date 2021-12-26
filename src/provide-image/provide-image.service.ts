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
      // image container은 1~15 그 중 하나 출력
      let randNum = Math.floor(Math.random() * (15 - 1 + 1)) + 1;

      // 추출한 random dice number을 통해 imagecontainer의 dicenumber 1~15중 하나를 가져옴
      const image = this.imageContainer.findOne({ diceNumber: randNum });

      //랜덤 image의 amazon s3 image url 추출
      const imageURL = (await image).imageUrl;

      //check를 포함하는 token발급
      const VerifyToken = this.jwtService.signToken({
        check: 'copyright of the better people Inc.',
      });

      // provide image create
      const newProvideImage = this.provideImage.create({
        token: VerifyToken,
        imageUrl: imageURL,
      });

      //relation에 의한 resolver(context)에서 받아오는 user relation등록
      newProvideImage.providingUser = providingUser;
      await this.provideImage.save(newProvideImage);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: '이미지를 생성할 수 없습니다.' };
    }
  }

  async findByToken(token: string): Promise<ProvideImage> {
    return this.provideImage.findOne({token}, {relations: ['providingUser']});
  }
}
