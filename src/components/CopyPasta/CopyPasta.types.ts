import CopyPasta from '../../interfaces/CopyPasta';

export interface CopyPastaProps {
  copyPasta: Omit<CopyPasta, 'id'>;
}
