import {useDroppable} from '@dnd-kit/react';
import {CollisionPriority} from '@dnd-kit/abstract';

function SortableColumn({children, id}) {
  const {ref} = useDroppable({
    id,
    type: 'column',
    accept: ['item'],
    collisionPriority: CollisionPriority.Low,
  });

  return (
    <ul ref={ref} className='flex flex-col gap-2.5 p-5 min-w-50 bg-amber-400 rounde-xl'>
      {children}
    </ul>
  );
}

export default SortableColumn;