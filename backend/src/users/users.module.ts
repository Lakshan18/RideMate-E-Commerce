import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
    imports:[PrismaModule],
    providers:[UsersService],
    controllers:[UserController],
})

export class UserModule {}