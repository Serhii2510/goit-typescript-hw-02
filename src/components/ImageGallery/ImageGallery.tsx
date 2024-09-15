import { FC } from 'react';
import { Image } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: Image[];
  openModal: (largeImage: string, description: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <ImageCard
            link={image.urls.small}
            largeImage={image.urls.regular}
            description={image.alt_description}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
