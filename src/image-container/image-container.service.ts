import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateImageInput } from './dtos/create-image.dto';
import { ImageContainer } from './entities/image-container';

@Injectable()
export class ImageContainerService {
  constructor(
    @InjectRepository(ImageContainer)
    private readonly images: Repository<ImageContainer>,
  ) {}
  async createImage({
    diceNumber,
    imageUrl,
  }: CreateImageInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const existDiceNumber = await this.images.findOne({ diceNumber });
      if (existDiceNumber) {
        return {
          ok: false,
          error: '이미 같은 다이스넘버의 이미지가 존재합니다.',
        };
      }
      await this.images.save(this.images.create({ diceNumber, imageUrl }));
      return { ok: true };
    } catch (error) {
      return {ok: false, error: '이미지를 저장할 수 없습니다.'}
    }
  }
}
