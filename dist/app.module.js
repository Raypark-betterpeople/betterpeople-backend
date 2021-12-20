"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const common_module_1 = require("./common/common.module");
const user_entity_1 = require("./users/entities/user.entity");
const image_container_module_1 = require("./image-container/image-container.module");
const image_container_1 = require("./image-container/entities/image-container");
const jwt_module_1 = require("./jwt/jwt.module");
const jwt_middleware_1 = require("./jwt/jwt.middleware");
const auth_module_1 = require("./auth/auth.module");
const provide_image_module_1 = require("./provide-image/provide-image.module");
const provide_image_entity_1 = require("./provide-image/entities/provide-image.entity");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(jwt_middleware_1.JwtMiddleWare).forRoutes({
            path: '/graphql',
            method: common_1.RequestMethod.ALL,
        });
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod',
                ignoreEnvFile: process.env.NODE_ENV === 'prod',
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                context: ({ req }) => ({ user: req['user'] }),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                synchronize: process.env.NODE_ENV !== 'prod',
                logging: process.env.NODE_ENV !== 'prod',
                entities: [user_entity_1.User, image_container_1.ImageContainer, provide_image_entity_1.ProvideImage],
            }),
            jwt_module_1.JwtModule.forRoot({
                privateKey: process.env.TOKEN_SECRET,
            }),
            users_module_1.UsersModule,
            common_module_1.CommonModule,
            image_container_module_1.ImageContainerModule,
            auth_module_1.AuthModule,
            provide_image_module_1.ProvideImageModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map