import styled from 'styled-components';
import { NextPage } from 'next';

const Container = styled.div`
  /* font-size: italic; */
  padding: 20px;
`;

const Index: NextPage = () => {
  return (
    <Container>
      <h2>hello Styled-components</h2>
      <h1>hello Styled-components</h1>
      <p>hello Styled-components</p>
      <ul>
        <li>hello Styled-components</li>
      </ul>
      <a>hello Styled-components</a>
      <span>hello Styled-components</span>
    </Container>
  );
};

export default Index;
