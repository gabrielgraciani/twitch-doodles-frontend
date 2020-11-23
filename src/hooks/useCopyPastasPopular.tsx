import { QueryResult, useQuery } from 'react-query';

import CopyPasta from '../interfaces/CopyPasta';
import api from '../services/api';

const fetchCopyPastasPopular = async (): Promise<CopyPasta[]> => {
  const { data } = await api.get('/copypastas/popular');
  return data;
};

export default function useCopyPastasPopular(): QueryResult<CopyPasta[]> {
  return useQuery('copyPastasPopular', fetchCopyPastasPopular, {
    refetchOnWindowFocus: false,
  });
}
