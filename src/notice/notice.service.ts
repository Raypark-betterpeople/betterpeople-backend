import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AllNoticeOutput } from './dtos/all-notice.dto';
import {
  CreateNoticeInput,
  CreateNoticeOutput,
} from './dtos/create-notice.dto';
import { NoticeInput, NoticeOutput } from './dtos/notice.dto';
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
      const notices = await this.notices.find({
        order: {
          createAt: 'DESC'
        }
      });
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
  async findNoticeById({noticeId} : NoticeInput): Promise<NoticeOutput> {
    try {
      const notice = await this.notices.findOne(noticeId)
      if (!notice) {
        return {
          ok: false,
          error: '찾을 수 없는 공지사항입니다.'
        }
      }
      return {
        ok: true,
        notice,
      }
    } catch (error) {
      return {
        ok: false,
        error: "찾을 수 없습니다."
      }
    }
  }
}
