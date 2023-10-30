import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CHANNEL')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {

	@Get()
	getAllChannels() {

	}

	@Get(':name')
	getChannel() {

	}

	@Get(':name/chats')
	getChannelChat(@Query() query, @Param() param) {
		console.log(query.perPage, query.page);
		console.log(param.id, param.url);
	}

	@Get(':name/members')
	getAllMembers() {

	}

	@Post()
	createChannels() {

	}

	@Post(':id/chats')
	postChat(@Body() body) {

	}

	@Post(':name/members')
	inviteMembers() {

	}
}
