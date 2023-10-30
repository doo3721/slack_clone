import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {

	@Get()
	getMyWorkspaces() {

	}

	@Get(':url/members')
	getAllMembersFromWorkspace() {

	}

	@Get(':url/members/:id')
	getMemberInfoInWorkspace() {

	}

	@Post()
	createWorkspace() {

	}

	@Post(':url/members')
	inviteMembersToWorkspace() {

	}

	@Delete(':url/members/:id')
	kickMemberFromWorkspace() {

	}

}
