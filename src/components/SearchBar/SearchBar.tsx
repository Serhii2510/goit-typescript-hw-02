import { ChangeEvent, FC, FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaSistrix } from 'react-icons/fa';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (topic: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [topic, setTopic] = useState<string>('');

  const notify = () => toast.error('Please, fill your topic for searching...');
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const topicInput = form.elements.namedItem('topic') as HTMLInputElement;

    if (topicInput.value.trim() === '') {
      notify();
      return;
    }

    onSubmit(topicInput.value);
    form.reset();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <button className={css.iconBtn} type="submit">
          <FaSistrix className={css.icon} />
        </button>
        <input
          className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        {!topic && <Toaster />}
      </form>
    </header>
  );
};

export default SearchBar;
