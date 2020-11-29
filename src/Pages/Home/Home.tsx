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
  NoRegister,
} from './Home.styles';

const Doodles = (): React.ReactElement => {
  const { data: copyPastas, isLoading } = useCopyPastas();

  const [nameDoodle, setNameDoodle] = useState('');
  const [categoryDoodle, setCategoryDoodle] = useState('');
  const [filteredDoodles, setFilteredDoodles] = useState(copyPastas);
  const [allFilters, setAllFilters] = useState<string[]>([]);

  const { t } = useTranslation();

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
            placeholder={t('pages.home.filters.name')}
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
              {t('pages.home.filters.categories')}
            </Select.Option>
            {allFilters.map(filter => (
              <Select.Option value={filter} key={filter}>
                {filter}
              </Select.Option>
            ))}
          </Select>
        </FilterItem>
      </FilterContainer>

      {isLoading ? (
        <Loading.Container align="flex-start">
          <Loading />
        </Loading.Container>
      ) : (
        <>
          {filteredDoodles && filteredDoodles?.length > 0 ? (
            <CardsContainer>
              {filteredDoodles?.map((copyPasta, index) => (
                <CopyPasta
                  key={copyPasta.id}
                  index={index}
                  copyPasta={copyPasta}
                />
              ))}
            </CardsContainer>
          ) : (
            <NoRegister>{t('pages.home.noRegister')}</NoRegister>
          )}
        </>
      )}
    </Container>
  );
};

export default Doodles;
