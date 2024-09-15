import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchImagesByTopic } from './components/Api/api-unsplash';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [largeImage, setLargeImage] = useState('');
  const [description, setDescription] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (largeImage, description) => {
    setLargeImage(largeImage);
    setDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setLargeImage('');
    setDescription('');
  };

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchImagesByTopic(searchValue, page);
        setImages(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchValue) {
      handleSearch();
    }
  }, [searchValue, page]);

  const onSearch = topic => {
    setSearchValue(topic);
    setPage(1);
    setImages([]);
  };

  return (
    <div>
      <SearchBar onSubmit={onSearch} />
      {isError && <ErrorMessage />}
      {searchValue && !isError && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {totalPages > page && !isError && !isLoading && (
        <LoadMoreBtn setPage={setPage} />
      )}
      {largeImage && (
        <ImageModal
          largeImage={largeImage}
          description={description}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
