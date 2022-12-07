import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [
    // RouterModule.register([
    //   {
    //     path: 'boards',
    //     module: BoardsModule
    //   }
    // ]),
    BoardsModule
  ]
  ,
  controllers: [],
  providers: [],
  // exports: [RouterModule]
})
export class AppModule { }
