import React, { useState, useEffect } from 'react';
// import { ReactQueryDevtools } from 'react-query-devtools';
import { CopyPasta } from '../../components/CopyPasta';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

import useCopyPastas from '../../hooks/useCopyPastas';

import {
  Container,
  CardsContainer,
  FilterContainer,
  FilterItem,
} from './Doodles.styles';

const Doodles = (): React.ReactElement => {
  const { data: copyPastas } = useCopyPastas();

  const [nameDoodle, setNameDoodle] = useState('');
  const [categoryDoodle, setCategoryDoodle] = useState('');
  const [filteredDoodles, setFilteredDoodles] = useState(copyPastas);

  const handleChangeName = (val: string) => {
    setNameDoodle(val);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryDoodle(e.target.value);
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
      <FilterContainer>
        <FilterItem>
          <Select
            value={categoryDoodle}
            onChange={e => handleChangeCategory(e)}
          >
            <Select.Option value="">Todas as categorias</Select.Option>
            <Select.Option value="empresa">empresa</Select.Option>
            <Select.Option value="teste">teste</Select.Option>
            <Select.Option value="venturus">venturus</Select.Option>
          </Select>
        </FilterItem>

        <FilterItem>
          <Input
            name="name"
            placeholder="Digite o nome"
            value={nameDoodle}
            onChange={val => handleChangeName(val)}
          />
        </FilterItem>
      </FilterContainer>

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
