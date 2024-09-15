import { useEffect, useState } from 'react';
import { fetchImagesByTopic } from '../Api/api-unsplash';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image, ApiResponse } from './App.types';

const App = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [largeImage, setLargeImage] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = (largeImage: string, description: string): void => {
    setLargeImage(largeImage);
    setDescription(description);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setLargeImage('');
    setDescription('');
  };

  useEffect(() => {
    const handleSearch = async (): Promise<void> => {
      try {
        setIsLoading(true);
        setIsError(false);
        const data: ApiResponse = await fetchImagesByTopic(searchValue, page);
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

  const onSearch = (topic: string): void => {
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
