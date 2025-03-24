
export function Drawer({onClose, items, remove }) {

	return (
		<div className="overlay">
			<div className="drawer p-20">
				<h2 className="Basket ">Корзина <img className="removeBtn"  onClick={onClose} src="/img/btnClouse.svg" alt="clouse" /></h2>

				<div className=" flex-column">
						{items.map((obj)=>(
							<div className='cartItem mb-20'>
								<img className='cartItemImg' src={obj.avatar}/>

								<div className="mr-20 flex">
									<p className="mb-5">{obj.name}</p>
									<b>{obj.price} $</b>
								</div>
								<img onClick={()=>remove(obj.id)} className="removeBtn" src="/img/btnClouse.svg" alt="clouse" /></div>


						))}
				</div>



			<div className="cartTotalB ">

				<ul>
					<li className="d-flex">
						<span>Итого:</span>
						<div></div>
						<b>2 424 usd</b>
					</li>
					<li>
						<span>Налог 5%:</span>
						<div></div>
						<b>121 usd</b>
					</li>
				</ul>
				<button className="greenButton">Офоромить заказ <img className="img" src="/img/arrow.svg" alt='arrow' />
					</button>
			</div>

				</div>
			</div>
	)
}