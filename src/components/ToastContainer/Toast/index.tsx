import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container, TextContainer, Text, Button } from './styles';
import { ToastMessageProps } from '../../../interfaces/Toast';
import { useToast } from '../../../hooks/useToast';

interface ToastProps {
  message: ToastMessageProps;
  style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast = ({ message, style }: ToastProps): React.ReactElement => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    // this function will be auto executed if the component is not exist
    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      description={message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <TextContainer>
        <strong>{message.title}</strong>

        {message.description && <Text>{message.description}</Text>}
      </TextContainer>

      <Button type="button" onClick={() => removeToast(message.id)}>
        <FiXCircle size={18} />
      </Button>
    </Container>
  );
};

export default Toast;
