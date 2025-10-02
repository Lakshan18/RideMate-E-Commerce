import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(createUserDto: CreateUserDto) {
        const hashed = await bcrypt.hash(createUserDto.password, 10);
        return this.prisma.user.create({ data: createUserDto });
    }

    findAll() {
        return this.prisma.user.findMany();
    }

    findOne(id: number) {
        return this.prisma.user.findUnique({
            where: { id: id },
        });
    }
}