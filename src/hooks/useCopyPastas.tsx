import { QueryResult, useQuery } from 'react-query';

import CopyPasta from '../interfaces/CopyPasta';
import api from '../services/api';

const fetchCopyPastas = async (): Promise<CopyPasta[]> => {
  const { data } = await api.get('/copypastas');
  return data;
};

export default function useCopyPastas(): QueryResult<CopyPasta[]> {
  return useQuery('copyPastas', fetchCopyPastas, {
    refetchOnWindowFocus: false,
  });
}
