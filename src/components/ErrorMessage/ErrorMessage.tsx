import { FC } from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage: FC = () => {
  return <p className={css.error}>Sorry about that! Something went wrong.</p>;
};

export default ErrorMessage;
