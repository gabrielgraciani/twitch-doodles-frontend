import styled from 'styled-components';

interface TagsProps {
  margin?: string;
}

const Container = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  background: ${props => props.theme.colors.purpleLight};
  border-radius: 0.4rem;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: bold;
`;

const Remove = styled.span`
  display: block;
  margin-left: 0.4rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  font-weight: bold;
`;

const Tags = styled.div<TagsProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31%, 1fr));
  justify-content: space-between;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;

  margin: ${props => props.margin};
`;

export { Container, Text, Remove, Tags };
