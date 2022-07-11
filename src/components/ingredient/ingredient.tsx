import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { removeConstructorIngredients } from '../../services/actions/constructor';

import useAppDispatch from '../../hooks/use-app-dispatch';

import type { IngredientDataType } from '../../utils/types';
import type { DragObjectFactory, DropTargetMonitor, XYCoord } from 'react-dnd';

import styles from './ingredient.module.css';

const Ingredient = ({
  id,
  index,
  item,
  type,
  onMove,
  isLocked = false
}: {
  id?: string;
  index: number;
  item?: IngredientDataType;
  type?: 'top' | 'bottom';
  onMove: (dragIndex: number, hoverIndex: number) => void;
  isLocked?: boolean;
}) => {
  const postfix = type === 'top' ? ' (верх)' : type === 'bottom' ? ' (низ)' : '';

  const ref = useRef<HTMLLIElement | null>(null);
  const dispatch = useAppDispatch();

  const handleRemove = (key: string) => {
    dispatch(removeConstructorIngredients(key));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      handlerId: monitor.getHandlerId()
    }),
    hover: (
      ingredient: DragObjectFactory<IngredientDataType> & { index: number },
      monitor: DropTargetMonitor
    ) => {
      if (!ref.current) return;

      const dragIndex = ingredient.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY: number = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      setTimeout(() => onMove(dragIndex, hoverIndex));

      ingredient.index = hoverIndex;
    }
  });

  const [, drag] = useDrag({
    type: 'ingredient',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return item ? (
    <li
      className={isLocked ? styles.item_locked : styles.item}
      ref={!isLocked ? ref : null}
      data-id={id}
      data-handler-id={handlerId}
    >
      {!isLocked && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        text={item.name + postfix}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => handleRemove(item.key)}
        isLocked={isLocked}
      />
    </li>
  ) : (
    <li
      className={
        type === 'top'
          ? styles.item_empty_top
          : type === 'bottom'
          ? styles.item_empty_bottom
          : styles.item_empty
      }
    >
      <span>Перенесите булку</span>
    </li>
  );
};

export default Ingredient;
