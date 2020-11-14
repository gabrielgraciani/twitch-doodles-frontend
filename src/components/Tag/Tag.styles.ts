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
  margin: 0 1rem 1rem 0;
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
  cursor: pointer;
`;

const Tags = styled.div<TagsProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  margin: ${props => props.margin};
`;

export { Container, Text, Remove, Tags };
