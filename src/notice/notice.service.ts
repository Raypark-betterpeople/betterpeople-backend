import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllNoticeOutput } from './dtos/all-notice.dto';
import {
  CreateNoticeInput,
  CreateNoticeOutput,
} from './dtos/create-notice.dto';
import { Notice } from './entities/notice.entity';

@Injectable()
export class NoticeService {
  constructor(
    @InjectRepository(Notice) private readonly notices: Repository<Notice>,
  ) {}

  async createNotice({
    mainTitle,
    subTitle,
    description,
    image,
  }: CreateNoticeInput): Promise<CreateNoticeOutput> {
    try {
      await this.notices.save(
        this.notices.create({ mainTitle, subTitle, description, image }),
      );
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
  async allNotice(): Promise<AllNoticeOutput> {
    try {
      const notices = await this.notices.find();
      return {
        notices,
        ok: true,
      }
    } catch (error) {
      return {
        ok: false,
        error
      }
    }
  }
}
