import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Board } from '@prisma/client';
import BoardTitleForm from './board-title-form';
import { BoardOptions } from './board-options';

interface BoardNavBarProps {
  data: Board;
}

const BoardNavBar = async ({ data }: BoardNavBarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white justify-between">
      <BoardTitleForm data={data} />
      <div>
        <BoardOptions id={data.id} />
      </div>
    </div>
  );
};

export default BoardNavBar;
