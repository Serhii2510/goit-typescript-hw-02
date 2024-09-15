import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ setPage }) => {
  return (
    <button className={css.btn} onClick={() => setPage(prev => prev + 1)}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
