import { deleteBoard } from '@/actions/delete-board';
import { Button } from '@/components/ui/button';
import { FormDelete } from './form-delete';

interface BoardProps {
  id: string;
  title: string;
}

const Board = ({ title, id }: BoardProps) => {
    const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-4">
      <p key={id}>Board title: {title}</p>
      <FormDelete/>
    </form>
  );
};

export default Board;
