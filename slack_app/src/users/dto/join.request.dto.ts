import { ApiProperty } from "@nestjs/swagger";

export class JoinRequestDto {

	@ApiProperty({
		example: 'user@test.com',
		description: '이메일',
		required: true
	})
	public email: string;

	@ApiProperty({
		example: 'userNickName',
		description: '닉네임',
		required: true
	})
	public nickname: string;

	@ApiProperty({
		example: 'user_password',
		description: '패스워드',
		required: true
	})
	public password: string;
}
