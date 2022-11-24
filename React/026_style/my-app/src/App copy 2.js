import styled from 'styled-components'

const ContentsDivOne = styled.div`
  color: red;
`

const ContentsDivTwo = styled.div`
  color: green;
`

const ContentsDivThree = styled.div`
  color: blue;
`

const SectionTitle = styled.h2`
  color: dodgerblue;
  font-size: 32px;
`

function App() {
  return (
    <>
      <SectionTitle>hello</SectionTitle>
      <ContentsDivOne>hello world</ContentsDivOne>
      <ContentsDivTwo>hello world</ContentsDivTwo>
      <ContentsDivThree>hello world</ContentsDivThree>
    </>
  );
}

export default App;
