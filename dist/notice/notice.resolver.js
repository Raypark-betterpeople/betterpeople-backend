"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const all_notice_dto_1 = require("./dtos/all-notice.dto");
const create_notice_dto_1 = require("./dtos/create-notice.dto");
const notice_entity_1 = require("./entities/notice.entity");
const notice_service_1 = require("./notice.service");
let NoticeResolver = class NoticeResolver {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    async createNotice(createNoticeInput) {
        try {
            const { ok, error } = await this.noticeService.createNotice(createNoticeInput);
            if (error) {
                return {
                    ok,
                    error
                };
            }
            if (ok) {
                return {
                    ok,
                    error
                };
            }
        }
        catch (error) {
            return {
                ok: false,
                error
            };
        }
    }
    allNotice() {
        return this.noticeService.allNotice();
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => create_notice_dto_1.CreateNoticeOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notice_dto_1.CreateNoticeInput]),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "createNotice", null);
__decorate([
    (0, graphql_1.Query)(() => all_notice_dto_1.AllNoticeOutput),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticeResolver.prototype, "allNotice", null);
NoticeResolver = __decorate([
    (0, graphql_1.Resolver)(() => notice_entity_1.Notice),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeResolver);
exports.NoticeResolver = NoticeResolver;
//# sourceMappingURL=notice.resolver.js.map