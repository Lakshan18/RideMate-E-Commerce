import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaClient } from '@prisma/client';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

const prisma = new PrismaClient();

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'PRIZMA',
      useValue: prisma,
    },
  ],
  exports: ['PRIZMA'],
})
export class AppModule { }
