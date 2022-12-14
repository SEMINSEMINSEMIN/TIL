import {useState} from 'react';
import One from './Components/One';
import Three from './Components/Three';
import Two from './Components/Two';

function ContentsContainer({listName}){
    if (listName === 'one'){
        return <One/>
    } else if (listName === 'two'){
        return <Two/>
    } else if (listName === 'three'){
        return <Three/>
    }
    return null;
}

function App(){
    const [listName, setListName] = useState("one");
    const handleCheckId = (e) => {
        setListName(e.target.id);
    }
    return (
        <>
            <nav>
                <ul>
                    <li 
                        id='one'
                        style={listName === 'one' ? {color: 'blue'} : {color: 'black'}}
                        onClick={handleCheckId}
                    >About</li>
                    <li
                        id='two'
                        style={listName === 'two' ? {color: 'blue'} : {color: 'black'}}
                        onClick={handleCheckId}
                    >Product</li>
                    <li
                        id='three'
                        style={listName === 'three' ? {color: 'blue'} : {color: 'black'}}
                        onClick={handleCheckId}
                    >Contact</li>
                </ul>
            </nav>
            <ContentsContainer listName={listName}/>
        </>
    )
}

export default App;