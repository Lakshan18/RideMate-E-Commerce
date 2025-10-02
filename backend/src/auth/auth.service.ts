// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   async validateUser(email: string, password: string) {
//     const user = await this.usersService.findByEmail(email);
//     if (!user) {
//       throw new UnauthorizedException('Invalid credentials');
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log(password === user.password);
//     console.log(password, user.password); 

//     if (!isMatch) {
//       throw new UnauthorizedException('Invalid credentials');
//     }
//     const { password: _, ...result } = user;
//     return result;
//   }

//   async login(user: any) {
//     const payload = { sub: user.id, email: user.email };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }

//   async register(name: string, email: string, password: string) {
//     // Always hash password here
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await this.usersService.createUser(name, email, hashedPassword);
//     return this.login(user);
//   }
// }


import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import e from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);

    console.log(email, password, user.password);
    console.log(password === user.password);
    console.log(isMatch);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const { password: _, ...result } = user;
    return result;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(name: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.createUser(name, email, hashedPassword);
    return this.login(user);
  }
}