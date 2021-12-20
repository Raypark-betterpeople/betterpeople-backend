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
exports.ImageContainerResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const create_image_dto_1 = require("./dtos/create-image.dto");
const image_container_1 = require("./entities/image-container");
const image_container_service_1 = require("./image-container.service");
let ImageContainerResolver = class ImageContainerResolver {
    constructor(imageContainerService) {
        this.imageContainerService = imageContainerService;
    }
    async createImage(createImageInput) {
        try {
            const { ok, error } = await this.imageContainerService.createImage(createImageInput);
            if (error) {
                return {
                    ok: false,
                    error,
                };
            }
            return {
                ok,
            };
        }
        catch (error) {
            return {
                ok: false,
                error,
            };
        }
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => create_image_dto_1.CreateImageOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_image_dto_1.CreateImageInput]),
    __metadata("design:returntype", Promise)
], ImageContainerResolver.prototype, "createImage", null);
ImageContainerResolver = __decorate([
    (0, graphql_2.Resolver)(() => image_container_1.ImageContainer),
    __metadata("design:paramtypes", [image_container_service_1.ImageContainerService])
], ImageContainerResolver);
exports.ImageContainerResolver = ImageContainerResolver;
//# sourceMappingURL=image-container.resolver.js.map