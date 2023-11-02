import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const Token = createParamDecorator(
	(data: unknown, context: ExecutionContext) => {
		const response = context.switchToHttp().getResponse();
		return (response.locals.jwt);
	}
);
// @Token() token
