import './App.scss'
import {Card} from './Component/Card/Card.tsx'
import {Header} from './Component/Header/Header.tsx'
import {Drawer} from './Component/Basket/Drawer.tsx'
import React from 'react'

interface Items {
  name: string
  avatar: string
  price: string
}
function App() {


  const [items, setItems] = React.useState<Items[]>([])
  const [cartItems, setCartItems] = React.useState([])
  const [cardOpened, setCardOpened] = React.useState(false);
  React.useEffect(()=>{
    fetch('https://67dc28991fd9e43fe47773ac.mockapi.io/items').then((response: Response) => {
      return response.json()
    })
      .then(json=> {
      setItems(json)
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])


  }

  const removeItem =(id: number) => {
    const newItem = items.filter((item ) => item.id !== id)
    setCartItems(newItem)
  }

  return (
    <div className="wrapper clear">
      { cardOpened && <Drawer remove={removeItem} items={cartItems} onClose={() => setCardOpened(false)} /> }
        <Header onClickCart={() => setCardOpened(true)} />
        <div className="content ">
            <div className="d-flex align-center p-10 m-auto justify-between ">
                <h3>Популярное</h3>
                <div className="search-block">
                    <img src="/img/Serch.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

            <div className="cards">
              {items.map((obj) => (
                <Card
                name={obj.name}
                price={obj.price}
                avatar={obj.avatar}
                onPlus={onAddToCart}
                />

              ))}

            </div>

        </div>

    </div>
  )
}

export default App
