export function Drawer() {
	return (
		<div  className="overlay">
			<div className="drawer p-20">
				<h2 className="Basket ">Корзина <img className="removeBtn" src="/img/btnClouse.svg" alt="clouse" /></h2>

				<div className="cartItem mb-20">
					<img className="mr-10" width={90} height={90} src="/img/modulOil/Tech_204.png"
							 alt="MOTUL MC CARE P4 EZ LUBE" />

					<div style={{}}></div>

					<div className="mr-20">
						<p className="mb-5"> MOTUL MC CARE P4 EZ LUBE</p>
						<b>Цена: 1 212 usd</b>
					</div>
					<img className="removeBtn" src="/img/btnClouse.svg" alt="clouse" />
				</div>

				<div className="cartItem">
					<img className="mr-10" width={90} height={90} src="/img/modulOil/Tech_204.png"
							 alt="MOTUL MC CARE P4 EZ LUBE" />

					<div style={{}}></div>

					<div className="mr-20">
						<p className="mb-5"> MOTUL MC CARE P4 EZ LUBE</p>
						<b>Цена: 1 212 usd</b>
					</div>
					<img className="removeBtn" src="/img/btnClouse.svg" alt="clouse" />
				</div>

				<div className="cartTotalB">

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