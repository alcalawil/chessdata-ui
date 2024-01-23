// AuthModal.jsx
import React from 'react';
import { Modal, ModalBody } from '@nextui-org/react';
import { SignIn } from '@clerk/clerk-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeButton={true}
      style={{
        maxWidth: '100%', 
        width: 'auto',
        background: 'none', 
        boxShadow: 'none',
      }}
    >
      <ModalBody style={{ padding: 0 }}>
        <SignIn />
      </ModalBody>
    </Modal>
  );
};

export default AuthModal;
