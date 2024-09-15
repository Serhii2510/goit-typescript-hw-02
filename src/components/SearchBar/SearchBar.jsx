import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaSistrix } from 'react-icons/fa';
import css from './SearchBar.module.css';

const notify = () => toast.error('Please, fill your topic for searching...');

const SearchBar = ({ onSubmit }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;

    if (form.elements.topic.value.trim() === '') {
      notify();
      return;
    }

    onSubmit(topic);
    form.reset();
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
          onChange={e => setTopic(e.target.value)}
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
