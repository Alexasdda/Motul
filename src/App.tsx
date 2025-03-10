import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapper clear">
        <header className="p-30">
            <div className="d-flex justify-between">
                <div className="d-flex align-center">
                    <img width={90} height={30} src='/img/logo.svg'/>

                    <div className="headerInfo">

                        <p> Ваша уверенность за рулем!</p>
                    </div>
                </div>
                <ul className="headerRight d-flex align-center">
                    <li className="mr-30">
                        <img width={18} height={18} src='/img/Cart.svg'/>
                        <span>1200 rub.</span>
                    </li>
                    <li>
                        <img width={18} height={18} src='/img/like.svg'/>
                    </li>
                    <li>
                        <img width={18} height={18} src='/img/Union.svg'/>
                    </li>
                </ul>

            </div>
        </header>
        <div className="content p-10 m-auto">
            <h3>Популярное</h3>
            <div className="d-flex align-center">
                <div className="card">
                    <img width={125} height={130} src='/img/modulOil/Tech_202.png' alt='Oil'/>
                    <h5>MOTUL MTO-4 10W</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>4 999 usd</b>
                        </div>
                        <button className='button'>
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>

                </div>
                <div className="card m-auto">
                    <img width={100} height={125} src='/img/modulOil/Tech_201.png' alt='Oil'/>
                    <h5>MOTUL MTO-4 10W</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>2 999 usd</b>
                        </div>
                        <button className='button'>
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>

                </div>
                <div className="card m-auto">
                    <img width={133} height={150} src='/img/modulOil/Tech_203.png' alt='Oil'/>
                    <h5>THERMIC TO 10</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>3 999 usd</b>
                        </div>
                        <button className='button'>
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>

                </div>
                <div className="card">
                    <img width={113} height={120} src='/img/modulOil/Tech_204.png' alt='Oil'/>
                    <h5>MOTUL MC CARE P4 EZ LUBE</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>1 999 usd</b>
                        </div>
                        <button className='button'>
                            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default App
