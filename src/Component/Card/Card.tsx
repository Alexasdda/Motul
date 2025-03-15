
export function Card (){
	return (
		<div className="card ">
			<div className="favorite">
				<img src="/img/LikeCard.svg" alt="Unliked" />
			</div>
			<img width={125} height={130} src='/img/modulOil/Tech_202.png' alt='Oil' />
			<h5>MOTUL MTO-4 10W</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>4 999 usd</b>
				</div>
				<button className='button'>
					<img width={11} height={11} src="/img/plus.svg" alt="Plus" />
				</button>
			</div>

			</div>
			);
		}