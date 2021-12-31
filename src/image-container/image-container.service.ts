import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DonateSession } from 'src/donate-session/entities/donate-session.entity';
import { Repository } from 'typeorm';
import { CreateImageInput } from './dtos/create-image.dto';
import { ImageContainer } from './entities/image-container';

@Injectable()
export class ImageContainerService {
  constructor(
    @InjectRepository(ImageContainer)
    private readonly images: Repository<ImageContainer>,
    @InjectRepository(DonateSession)
    private readonly donates: Repository<DonateSession>,
  ) {}
  async createImage(
    { imageUrl, donateId }: CreateImageInput,
  ): Promise<{ ok: boolean; error?: string }> {
    try {
      const donate = await this.donates.findOne({ id: donateId });
      const newImage = await this.images.create({imageUrl: imageUrl})
      newImage.donate = donate
      await this.images.save(newImage)
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
