import './App.scss'
import axios from 'axios'
import {Card} from './Component/card/Card.tsx'
import {Header} from './Component/header/Header.tsx'
import {Drawer} from './Component/basket/Drawer.tsx'
import React from 'react'
import {Modal} from './Component/user-modal/user-modal.tsx'


interface Items {
  name: string
  avatar: string
  price: string
}
function App() {


  const [items, setItems] = React.useState<Items[]>([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpened, setCardOpened] = React.useState(false);
  const [modalActive, setModalActive] = React.useState(true);
  React.useEffect(()=>{
   axios.get('https://67dc28991fd9e43fe47773ac.mockapi.io/items').then((res) => {
     setItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
  axios.post('https://67dc28991fd9e43fe47773ac.mockapi.io/card', obj);
  setCartItems((prev) => [...prev, obj]);
  };

  const removeItem =(id: number) => {
    const newItem = cartItems.filter((item ) => item.id !== id)
    setCartItems(newItem)
  }

  const onChangeSearchInput = (event:any) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      { cardOpened && <Drawer remove={removeItem} items={cartItems} onClose={() => setCardOpened(false)} /> }
        <Header onClickCart={() => setCardOpened(true)}  onClickModal={setModalActive}/>

        <div className="content ">
            <div className="d-flex align-center p-10 m-auto justify-between ">
                <h3>{searchValue ? `Поиск:  ${searchValue}` : 'Популярное' }</h3>
              <div className="search-block">
                <img src="/img/Serch.svg" alt="Search" />
                { searchValue && <img className="removeBtn" onClick={() => setSearchValue('') } src="/img/btnClouse.svg" alt="clouse" />}
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
              </div>
            </div>

          <div className="cards">
            {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => (
                <Card
                name={obj.name}
                price={obj.price}
                avatar={obj.avatar}
                onPlus={onAddToCart}
                />

              ))}

            </div>

        </div>
      <Modal active={modalActive} setModalActive={setModalActive}/>

    </div>
  )
}

export default App
