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
exports.UploadsController2 = exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const AWS = require("aws-sdk");
const uuid_1 = require("uuid");
const BUCKET_NAME = 'betterpeoplepixelillust';
let UploadsController = class UploadsController {
    async uploadFile(file) {
        AWS.config.update({
            region: 'ap-northeast-2',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
        try {
            const objectName = `${(0, uuid_1.v4)() + file.originalname}`;
            await new AWS.S3()
                .putObject({
                Key: objectName,
                Body: file.buffer,
                Bucket: BUCKET_NAME,
                ACL: 'public-read',
            })
                .promise();
            const url = `https://${BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${objectName}`;
            return { url };
        }
        catch (error) {
            return null;
        }
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "uploadFile", null);
UploadsController = __decorate([
    (0, common_1.Controller)('uploads')
], UploadsController);
exports.UploadsController = UploadsController;
let UploadsController2 = class UploadsController2 {
    async uploadFile(file) {
        AWS.config.update({
            region: 'ap-northeast-2',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
        try {
            const objectName = `${(0, uuid_1.v4)() + file.originalname}`;
            await new AWS.S3()
                .putObject({
                Key: objectName,
                Body: file.buffer,
                Bucket: BUCKET_NAME,
                ACL: 'public-read',
            })
                .promise();
            const url2 = `https://${BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/${objectName}`;
            return { url2 };
        }
        catch (error) {
            return null;
        }
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file2')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadsController2.prototype, "uploadFile", null);
UploadsController2 = __decorate([
    (0, common_1.Controller)('uploads2')
], UploadsController2);
exports.UploadsController2 = UploadsController2;
//# sourceMappingURL=uploads.controller.js.map