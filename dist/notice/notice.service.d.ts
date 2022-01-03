import { Repository } from 'typeorm';
import { CreateNoticeInput, CreateNoticeOutput } from './dtos/create-notice.dto';
import { Notice } from './entities/notice.entity';
export declare class NoticeService {
    private readonly notices;
    constructor(notices: Repository<Notice>);
    createNotice({ mainTitle, subTitle, description, image, }: CreateNoticeInput): Promise<CreateNoticeOutput>;
}
