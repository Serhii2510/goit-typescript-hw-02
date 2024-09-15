import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from 'react';

interface ImageModalProps {
  largeImage: string;
  description: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ largeImage, description, isOpen, onRequestClose }) => {
  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={description}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img className={css.image} src={largeImage} alt={description} />
      <p className={css.descr}>{description}</p>
    </Modal>
  );
};

export default ImageModal;
