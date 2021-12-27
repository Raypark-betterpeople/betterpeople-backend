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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const jwt_service_1 = require("../jwt/jwt.service");
const verification_entity_1 = require("./entities/verification.entity");
let UsersService = class UsersService {
    constructor(users, verifications, jwtService) {
        this.users = users;
        this.verifications = verifications;
        this.jwtService = jwtService;
    }
    async createAccount({ email, password, nickname, profileImg, }) {
        try {
            const existNickname = await this.users.findOne({ nickname });
            const existEmail = await this.users.findOne({ email });
            if (existNickname) {
                return { ok: false, error: '이미 같은 닉네임의 유저가 존재합니다.' };
            }
            if (existEmail) {
                return { ok: false, error: '이미 같은 이메일이 존재합니다.' };
            }
            const user = await this.users.save(this.users.create({ email, nickname, password, profileImg }));
            await this.verifications.save(this.verifications.create({ user }));
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: '계정을 생성할 수 없습니다.' };
        }
    }
    async login({ email, password, }) {
        try {
            const user = await this.users.findOne({ email }, { select: ['id', 'password'] });
            if (!user) {
                return {
                    ok: false,
                    error: '존재하지 않는 이메일입니다.',
                };
            }
            console.log(user.password);
            const passwordCorrect = await (await user).checkPassword(password);
            if (!passwordCorrect) {
                return {
                    ok: false,
                    error: '비밀번호가 일치하지 않습니다.',
                };
            }
            const token = this.jwtService.signToken({
                id: (await user).id,
                nickname: (await user).nickname,
                check: 'copyright of better-man Inc.',
            });
            return {
                ok: true,
                token,
            };
        }
        catch (error) {
            return {
                ok: false,
                error,
            };
        }
    }
    async findById(id) {
        return this.users.findOne({ id });
    }
    async editProfile(id, editProfileInput) {
        try {
            const user = await this.users.findOne(id);
            if (editProfileInput.email && editProfileInput.email !== user.email) {
                user.email = editProfileInput.email;
                user.emailVerified = false;
            }
            if (editProfileInput.password) {
                user.password = editProfileInput.password;
            }
            if (editProfileInput.nickname) {
                user.nickname = editProfileInput.nickname;
            }
            await this.users.save(user);
            return {
                ok: true
            };
        }
        catch (error) {
            return { ok: false, error: "업데이트를 할 수 없습니다." };
        }
    }
    async verifyEmail(code) {
        const verification = await this.verifications.findOne({ code }, { relations: ['user'] });
        if (verification) {
            verification.user.emailVerified = true;
            this.users.save(verification.user);
        }
        return false;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(verification_entity_1.Verification)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_service_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map