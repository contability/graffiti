import styled from 'styled-components';
import RootContents from './components/common/RootContents';

function App() {
  return (
    <AppBox>
      <RootContents/>
    </AppBox>
  );
}

const AppBox = styled.div`
  background : #5D61EA;
  width : 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;

  padding:0;
  margin:0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  border: none;
  user-select: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
