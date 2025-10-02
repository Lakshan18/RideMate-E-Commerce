// import { Injectable } from '@nestjs/common';
// import * as bcrypt from 'bcrypt';
// import { PrismaService } from 'src/prisma/prisma.service';

// @Injectable()
// export class UsersService {
//   constructor(private prisma: PrismaService) {}

//   async findByEmail(email: string) {
//     return this.prisma.user.findUnique({ where: { email } });
//   }

//   async createUser(name: string, email: string, password: string) {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log(email,password);
//     return this.prisma.user.create({
//       data: { name, email, password: hashedPassword },
//     });
//   }
// }


import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(name: string, email: string, password: string) {
    // Password should already be hashed!
    return this.prisma.user.create({
      data: { name, email, password },
    });
  }
}