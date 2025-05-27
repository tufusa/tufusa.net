import { useState, type ReactElement } from 'react';

export const ModalCard = ({ button, modal }: { button?: ReactElement; modal?: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{button}</button>
      {isOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center">
          <div className="fixed -inset-16 bg-gray-800/50" onClick={() => setIsOpen(false)} />
          <div className="z-40">{modal}</div>
        </div>
      )}
    </>
  );
};
