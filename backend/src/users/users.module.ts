import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserService } from "./users.service";
import { UserController } from "./users.controller";

@Module({
    imports:[PrismaModule],
    providers:[UserService],
    controllers:[UserController],
})

export class UserModule {}