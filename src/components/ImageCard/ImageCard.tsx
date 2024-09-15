import { FC } from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
  link: string;
  description: string;
  largeImage: string;
  openModal: (largeImage: string, description: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ link, description, largeImage, openModal }) => {
  return (
    <div className={css.imageBlock}>
      <img
        className={css.image}
        src={link}
        alt={description}
        onClick={() => openModal(largeImage, description)}
      />
    </div>
  );
};

export default ImageCard;
