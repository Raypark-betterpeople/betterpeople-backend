import { Repository } from 'typeorm';
import { AllNoticeOutput } from './dtos/all-notice.dto';
import { CreateNoticeInput, CreateNoticeOutput } from './dtos/create-notice.dto';
import { NoticeInput, NoticeOutput } from './dtos/notice.dto';
import { Notice } from './entities/notice.entity';
export declare class NoticeService {
    private readonly notices;
    constructor(notices: Repository<Notice>);
    createNotice({ mainTitle, subTitle, description, image, }: CreateNoticeInput): Promise<CreateNoticeOutput>;
    allNotice(): Promise<AllNoticeOutput>;
    findNoticeById({ noticeId }: NoticeInput): Promise<NoticeOutput>;
}
