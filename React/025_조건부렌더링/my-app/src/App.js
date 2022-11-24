import {useState} from 'react'

function Contents({listName}){
  if (listName === 'about'){
    return (
      <div>about</div>
    )
  } else if (listName == 'product'){
    return (
      <div>product</div>
    )
  } else if (listName == 'cart'){
    return (
      <div>cart</div>
    )
  } else if (listName == 'contact'){
    return (
      <div>contact</div>
    )
  } 
  return (
    <div>404 페이지를 찾을 수 없습니다.</div>
  )
}

function Navbar(){
  const [listName, setListName] = useState('about');
  const handleChangeId = (e) => {
    setListName(e.target.id);
  }
  return (
    <>
      <nav>
        <ul>
          <li
            id="about"
            style={listName === 'about'?
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
            About
          </li>
          <li
            id="product"
            style={listName === 'product'?
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
            Product
          </li>
          <li
            id="cart"
            style={listName === 'cart'?
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
            Cart
          </li>
          <li
            id="contact"
            style={listName === 'contact'?
              {color:"red"} : {color:"black"}}
            onClick={handleChangeId}
          >
            Contact
          </li>
        </ul>
      </nav>
      <Contents listName={listName}/>
    </>
  )
}


export default function App(){
  return (
    <div>
      <Navbar></Navbar>
    </div>
  )
}