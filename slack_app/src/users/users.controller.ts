import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
	constructor( private usersService: UsersService ) {}

	@ApiOkResponse({
		description: '성공',
		type: UserDto
	})
	@ApiOperation({ summary: '내 정보 조회' })
	@Get()
	getUsers(@Req() req) {
		return (req.user);
	}

	@ApiOperation({ summary: '회원가입' })
	@Post()
	joinUser(@Body() body: JoinRequestDto) {
		this.usersService.postUsers(body)
	}

	@ApiOkResponse({
		description: '성공',
		type: UserDto
	})
	@ApiOperation({ summary: '로그인' })
	@Post('login')
	login(@Req() req) {
		return (req.user);
	}

	@ApiOperation({ summary: '로그아웃' })
	@Post('logout')
	logout(@Req() req, @Res() res) {
		req.logout();
		res.clearCookie('connect.sid', { httpOnly: true });
		res.send('ok');
	}



}
