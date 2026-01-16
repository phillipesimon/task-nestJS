import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

type ParamsUser = {
  id: string;
  idEmpresa: string;
};

type QueryUser = {
  p: string;
  r: string;
};

type BodyUser = {
  name: string;
  age: string;
};

@Controller('/users')
export class UserController {
  @Get('/:id/:idEmpresa')
  findById(@Param() params: ParamsUser) {
    return 'Id usuário: ' + params.id + ' Id Empresa: ' + params.idEmpresa;
  }

  @Get('/findByPages')
  findByPages(@Query() queries: QueryUser) {
    return 'Queries: ' + queries.r + ' Pages: ' + queries.p;
  }

  @Post('/create')
  createUser(@Body() data: BodyUser) {
    return {
      ...data,
      id: randomUUID(),
    };
  }
}
