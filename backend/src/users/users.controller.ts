import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('user')
export class UserController {
    constructor(private userService: UsersService) { }

    // @Post()
    // create(@Body() dto: CreateUserDto) {
    //     if (!dto.name || !dto.email || !dto.password) {
    //         throw new Error("Missing required user fields: name, email, or password");
    //     }
    //     return this.userService.createUser(dto.name, dto.email, dto.mobile, dto.password);
    // }

    @Post()
    create(@Body() dto: CreateUserDto) {
        if (!dto.name || !dto.email || !dto.password || !dto.mobile) {
            throw new Error("Missing required user fields: name, email, mobile, or password");
        }
        return this.userService.createUser(dto.name, dto.email, dto.mobile, dto.password);
    }

    // @Get(':id')
    // findByEmail(@Param('email') email: string) {
    //     return this.userService.findByEmail(email);
    // }

    @Get(':email')
    findByEmail(@Param('email') email: string) {
        console.log(email);
        return this.userService.findByEmail(email);
    }
}

