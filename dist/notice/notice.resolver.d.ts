import { CreateNoticeInput, CreateNoticeOutput } from './dtos/create-notice.dto';
import { NoticeService } from './notice.service';
export declare class NoticeResolver {
    private readonly noticeService;
    constructor(noticeService: NoticeService);
    createNotice(createNoticeInput: CreateNoticeInput): Promise<CreateNoticeOutput>;
}
