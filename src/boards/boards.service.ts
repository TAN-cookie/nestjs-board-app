import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.type';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    // private 를 사용하는 이유는 외부 컨트롤러에서 접근하지 못하도록 하기 위함이다.
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, description: string) {
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        };

        this.boards.push(board);
        return board;
    }
}
