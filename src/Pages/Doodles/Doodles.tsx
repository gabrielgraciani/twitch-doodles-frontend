import React, { useState, useEffect } from 'react';
// import { ReactQueryDevtools } from 'react-query-devtools';
import { CopyPasta } from '../../components/CopyPasta';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';

import useCopyPastas from '../../hooks/useCopyPastas';

import { Container, CardsContainer } from './Doodles.styles';

const Doodles = (): React.ReactElement => {
  const { data: copyPastas } = useCopyPastas();

  const [nameDoodle, setNameDoodle] = useState('');
  const [categoryDoodle, setCategoryDoodle] = useState('');
  const [filteredDoodles, setFilteredDoodles] = useState(copyPastas);

  const handleChangeName = (val: string) => {
    setNameDoodle(val);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeCategory = (val: any) => {
    setCategoryDoodle(val.target.value);
  };

  useEffect(() => {
    const filtered = copyPastas
      ?.filter(copyPasta =>
        copyPasta.name.toLowerCase().includes(nameDoodle.toLowerCase()),
      )
      ?.filter(copyPasta =>
        copyPasta.categories
          .toLowerCase()
          .includes(categoryDoodle.toLowerCase()),
      );

    setFilteredDoodles(filtered);
  }, [copyPastas, nameDoodle, categoryDoodle]);

  return (
    <Container>
      <Form>
        <Form.FormItem>
          <select onChange={e => handleChangeCategory(e)}>
            <option value="">todas</option>
            <option value="empresa">empresa</option>
            <option value="teste">teste</option>
            <option value="venturus">venturus</option>
          </select>
          <Input
            name="name"
            placeholder="Digite o nome"
            value={nameDoodle}
            onChange={val => handleChangeName(val)}
          />
        </Form.FormItem>
      </Form>
      <CardsContainer>
        {filteredDoodles?.map(copyPasta => (
          <CopyPasta key={copyPasta.id} copyPasta={copyPasta} />
        ))}
      </CardsContainer>

      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </Container>
  );
};

export default Doodles;
