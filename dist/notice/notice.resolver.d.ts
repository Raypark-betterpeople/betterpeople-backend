import { AllNoticeOutput } from './dtos/all-notice.dto';
import { CreateNoticeInput, CreateNoticeOutput } from './dtos/create-notice.dto';
import { NoticeInput, NoticeOutput } from './dtos/notice.dto';
import { NoticeService } from './notice.service';
export declare class NoticeResolver {
    private readonly noticeService;
    constructor(noticeService: NoticeService);
    createNotice(createNoticeInput: CreateNoticeInput): Promise<CreateNoticeOutput>;
    allNotice(): Promise<AllNoticeOutput>;
    notice(noticeInput: NoticeInput): Promise<NoticeOutput>;
}
