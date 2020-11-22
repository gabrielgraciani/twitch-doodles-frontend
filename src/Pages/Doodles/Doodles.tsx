import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { CopyPasta } from '../../components/CopyPasta';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Loading } from '../../components/Loading';

import useCopyPastas from '../../hooks/useCopyPastas';

import {
  Container,
  CardsContainer,
  FilterContainer,
  FilterItem,
} from './Doodles.styles';

const Doodles = (): React.ReactElement => {
  const { data: copyPastas, isLoading } = useCopyPastas();

  const [nameDoodle, setNameDoodle] = useState('');
  const [categoryDoodle, setCategoryDoodle] = useState('');
  const [dateDoodle, setDateDoodle] = useState('desc');
  const [filteredDoodles, setFilteredDoodles] = useState(copyPastas);
  const [allFilters, setAllFilters] = useState<string[]>([]);

  const { t } = useTranslation();

  const handleChangeName = (val: string) => {
    setNameDoodle(val);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryDoodle(e.target.value);
  };

  const handleChangeDate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDateDoodle(e.target.value);

    setFilteredDoodles(filteredDoodles?.reverse());
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

  useEffect(() => {
    const tempAllFilters: string[] = [];
    copyPastas?.forEach(item => {
      const categoriesSplitted = item.categories.split(',');

      categoriesSplitted.forEach(category => {
        const existCategory = tempAllFilters.find(
          (findCategory: string) =>
            findCategory.toLowerCase() === category.toLowerCase(),
        );
        if (category && !existCategory) {
          tempAllFilters.push(category.toLowerCase());
        }
      });
    });

    setAllFilters(tempAllFilters);
  }, [copyPastas]);

  return (
    <Container>
      <FilterContainer>
        <FilterItem>
          <Input
            name="name"
            placeholder={t('pages.doodles.filters.name')}
            value={nameDoodle}
            onChange={val => handleChangeName(val)}
          />
        </FilterItem>

        <FilterItem>
          <Select
            value={categoryDoodle}
            onChange={e => handleChangeCategory(e)}
          >
            <Select.Option value="">
              {t('pages.doodles.filters.categories')}
            </Select.Option>
            {allFilters.map(filter => (
              <Select.Option value={filter} key={filter}>
                {filter}
              </Select.Option>
            ))}
          </Select>
        </FilterItem>

        <FilterItem>
          <Select value={dateDoodle} onChange={e => handleChangeDate(e)}>
            <Select.Option value="desc">
              {t('pages.doodles.filters.dateDESC')}
            </Select.Option>
            <Select.Option value="asc">
              {t('pages.doodles.filters.dateASC')}
            </Select.Option>
          </Select>
        </FilterItem>
      </FilterContainer>

      {isLoading ? (
        <Loading.Container align="flex-start">
          <Loading />
        </Loading.Container>
      ) : (
        <CardsContainer>
          {filteredDoodles?.map((copyPasta, index) => (
            <CopyPasta key={copyPasta.id} index={index} copyPasta={copyPasta} />
          ))}
        </CardsContainer>
      )}
    </Container>
  );
};

export default Doodles;
