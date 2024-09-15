import css from './ImageCard.module.css';

const ImageCard = ({ link, description, largeImage, openModal }) => {
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
