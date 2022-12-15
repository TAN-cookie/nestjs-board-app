import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.type';
import { CreateBoardDto } from './dto/create-board.dto';

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
        @Body() createBoardDto: CreateBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id);
    }
}