import './App.scss'
import {Card} from './Component/Card/Card.tsx'
import {Header} from './Component/Header/Header.tsx'
import {Drawer} from './Component/Basket/Drawer.tsx'
function App() {

  return (
    <div className="wrapper clear">

        <Drawer/>
        <Header/>
        <div className="content ">
            <div className="d-flex align-center p-10 m-auto justify-between ">
                <h3>Популярное</h3>
                <div className="search-block">
                    <img src="/img/Serch.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>

            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </div>

        </div>

    </div>
  )
}

export default App
