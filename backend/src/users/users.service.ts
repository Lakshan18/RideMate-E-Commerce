import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async findByEmail(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  async findById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  async createUser(name: string, email: string, mobile: string, password: string) {
    return this.prisma.users.create({
      data: { name, email, mobile, password, createdAt: new Date() },
    });
  }
}