import { MutationOutput } from 'src/common/dtos/output.dto';
import { Notice } from '../entities/notice.entity';
export declare class NoticeInput {
    noticeId: number;
}
export declare class NoticeOutput extends MutationOutput {
    notice?: Notice;
}
