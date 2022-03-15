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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeOutput = exports.NoticeInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dtos/output.dto");
const notice_entity_1 = require("../entities/notice.entity");
let NoticeInput = class NoticeInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], NoticeInput.prototype, "noticeId", void 0);
NoticeInput = __decorate([
    (0, graphql_1.InputType)()
], NoticeInput);
exports.NoticeInput = NoticeInput;
let NoticeOutput = class NoticeOutput extends output_dto_1.MutationOutput {
};
__decorate([
    (0, graphql_1.Field)(() => notice_entity_1.Notice, { nullable: true }),
    __metadata("design:type", notice_entity_1.Notice)
], NoticeOutput.prototype, "notice", void 0);
NoticeOutput = __decorate([
    (0, graphql_1.ObjectType)()
], NoticeOutput);
exports.NoticeOutput = NoticeOutput;
//# sourceMappingURL=notice.dto.js.map