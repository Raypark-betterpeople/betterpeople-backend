"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageContainerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const donate_session_entity_1 = require("../donate-session/entities/donate-session.entity");
const image_container_1 = require("./entities/image-container");
const image_container_resolver_1 = require("./image-container.resolver");
const image_container_service_1 = require("./image-container.service");
let ImageContainerModule = class ImageContainerModule {
};
ImageContainerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([image_container_1.ImageContainer, donate_session_entity_1.DonateSession])],
        providers: [image_container_resolver_1.ImageContainerResolver, image_container_service_1.ImageContainerService]
    })
], ImageContainerModule);
exports.ImageContainerModule = ImageContainerModule;
//# sourceMappingURL=image-container.module.js.map