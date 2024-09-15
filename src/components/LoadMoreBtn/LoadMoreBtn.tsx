import { Dispatch, FC, SetStateAction } from 'react';
import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  setPage: Dispatch<SetStateAction<number>>;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ setPage }) => {
  return (
    <button className={css.btn} onClick={() => setPage(prev => prev + 1)}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
