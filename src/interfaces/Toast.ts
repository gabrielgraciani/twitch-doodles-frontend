export interface ToastMessageProps {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
}
