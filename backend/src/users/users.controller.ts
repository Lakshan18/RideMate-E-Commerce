import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOne(id);
    }
}