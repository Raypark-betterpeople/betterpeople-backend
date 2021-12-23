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
exports.ProvideImageResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const create_provide_image_dto_1 = require("./dtos/create-provide-image.dto");
const verify_image_search_dto_1 = require("./dtos/verify-image-search.dto");
const provide_image_entity_1 = require("./entities/provide-image.entity");
const provide_image_service_1 = require("./provide-image.service");
let ProvideImageResolver = class ProvideImageResolver {
    constructor(provideImageService) {
        this.provideImageService = provideImageService;
    }
    async createProvideImage(context) {
        try {
            const user = context.user;
            const { ok, error } = await this.provideImageService.createProvideImage(user);
            if (ok) {
                return { ok: true };
            }
            else {
                return { ok: false, error };
            }
        }
        catch (error) {
            return {
                ok: false,
                error: '이미지를 생성할 수 없습니다. 이메일을 통해 문의해주세요.',
            };
        }
    }
    async searchVerifyImage(verifyImageSearchInput) {
        try {
            const verifyImage = await this.provideImageService.findByToken(verifyImageSearchInput.token);
            return {
                ok: true,
                verifyImage
            };
        }
        catch (error) {
            return {
                ok: false,
                error: "인증된 이미지를 찾을 수 없습니다."
            };
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)(() => create_provide_image_dto_1.CreateProvideImageOutput),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProvideImageResolver.prototype, "createProvideImage", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Query)(() => verify_image_search_dto_1.VerifyImageSearchOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_image_search_dto_1.VerifyImageSearchInput]),
    __metadata("design:returntype", Promise)
], ProvideImageResolver.prototype, "searchVerifyImage", null);
ProvideImageResolver = __decorate([
    (0, graphql_2.Resolver)(() => provide_image_entity_1.ProvideImage),
    __metadata("design:paramtypes", [provide_image_service_1.ProvideImageService])
], ProvideImageResolver);
exports.ProvideImageResolver = ProvideImageResolver;
//# sourceMappingURL=provide-image.resolver.js.map