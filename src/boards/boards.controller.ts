import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.type';

@Controller('boards')
// @Controller({ version: '1' })
export class BoardsController {

    constructor(
        private readonly boardsService: BoardsService,
    ) { }

    @Get()
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }
    @Post()
    createBoard(
        @Body('title') title: string,
        @Body('description') description: string
    ): Board {
        return this.boardsService.createBoard(title, description);
    }
}