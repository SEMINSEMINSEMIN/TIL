import React from 'react'
import styled, {css} from 'styled-components'

const OneButton = styled.button`
  color: red;
`

const TwoButton = styled(OneButton)`
  font-size: 30px;
`


function App() {
  return (
    <div>
      <OneButton>hello world</OneButton>
      <TwoButton>hello world</TwoButton>
    </div>
  )
}

export default App;
