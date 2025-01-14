import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { useDispatch } from 'react-redux';

type ModalType = {
  isOpen: boolean;
  onClose: ActionCreatorWithoutPayload<'modal/closeModal'>;
  children: ReactNode;
};
const Modal = ({ isOpen, onClose, children }: ModalType) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={() => dispatch(onClose())}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
