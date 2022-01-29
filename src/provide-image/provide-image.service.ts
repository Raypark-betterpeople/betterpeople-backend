import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageContainer } from 'src/image-container/entities/image-container';
import { Repository } from 'typeorm';
import { ProvideImage } from './entities/provide-image.entity';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from 'src/jwt/jwt.service';
import { DonateSession } from 'src/donate-session/entities/donate-session.entity';
import { CreateProvideImageInput } from './dtos/create-provide-image.dto';

@Injectable()
export class ProvideImageService {
  constructor(
    @InjectRepository(ProvideImage)
    private readonly provideImage: Repository<ProvideImage>,
    @InjectRepository(DonateSession)
    private readonly donates: Repository<DonateSession>,
    @InjectRepository(ImageContainer)
    private readonly images: Repository<ImageContainer>,
    private readonly jwtService: JwtService,
  ) {}
  async createProvideImage(
    providingUser: User,
    { donateId }: CreateProvideImageInput
  ): Promise<{ ok: boolean; error?: string }> {
    try {
      const donateSession:DonateSession = await this.donates.findOne({id: donateId})
      const donateImages = await this.images.find({donate: donateSession})
      let randNum = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
      const imageURL = await donateImages[randNum].imageUrl;
      const donationTitle = await donateSession.title;
      const donateDurationTime = await donateSession.durationTime;
      const VerifyToken = await this.jwtService.signToken({
        check: 'copyright of the better people Inc.',
      });
      const newProvideImage = this.provideImage.create({
        token: VerifyToken,
        imageUrl: imageURL,
        donateSessionTitle: donationTitle,
        donateDurationDate: donateDurationTime,
      });
      newProvideImage.providingUser = providingUser
      await this.provideImage.save(newProvideImage);
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async findByToken(token: string): Promise<ProvideImage> {
    return this.provideImage.findOne({token}, {relations: ['providingUser']});
  }

  async myImages(user: User) {
    console.log(user)
  }
}
