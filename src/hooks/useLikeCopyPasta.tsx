import { useMutation, queryCache, MutationResultPair } from 'react-query';

import api from '../services/api';
import CopyPasta from '../interfaces/CopyPasta';

function useLikeCopyPasta(): MutationResultPair<
  void,
  unknown,
  CopyPasta,
  unknown
> {
  return useMutation(
    values => api.post(`/copypastas/like/${values.id}`).then(res => res.data),
    {
      onMutate: values => {
        queryCache.cancelQueries('copyPastas');

        const oldCopyPasta = queryCache.getQueryData(['copyPastas', values.id]);

        queryCache.setQueryData(['copyPastas', values.id], values);

        return () =>
          queryCache.setQueryData(['copyPastas', values.id], oldCopyPasta);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error, values, rollback: any) => rollback(),
      onSuccess: (data, variables) => {
        queryCache.invalidateQueries('copyPastas');
        queryCache.invalidateQueries(['copyPastas', variables.id]);
      },
    },
  );
}

export default useLikeCopyPasta;
