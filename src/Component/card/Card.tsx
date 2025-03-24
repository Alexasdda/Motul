import style from './Card.module.scss';
import React, {useState} from 'react'

interface CardProps {
	name: string
	avatar: string
	price: string
}

export function Card ({name, avatar, price, onPlus}: CardProps) {

	const [like, setLike] = React.useState(false)
	const likeClicke = ()=>{
		setLike(!like)
	}
	const [clickPlus, setClickPlus] = React.useState(false)
	const handelClick = () =>{
		onPlus({name, avatar, price})
		setClickPlus(!clickPlus)
}



	return (
		<div className={style.card}>
		<div className="card ">
			<div className="favorite cu-p">
				<img onClick={likeClicke} src= {like ? "/img/LikeCard.svg" : '/img/LikeOf.svg' }   alt="Unliked" />
			</div>
			<img width={125} height={130} src={avatar} alt='Oil' />
			<h5>{name}</h5>
			<div className="d-flex justify-between align-center">
				<div className="d-flex flex-column">
					<span>Цена:</span>
					<b>{price} $</b>
				</div>
				<img className={style.plus} onClick={handelClick}  src={clickPlus ? "/img/btnchekid.svg" : "/img/plus.svg"  } alt="Plus" />
			</div>

		</div>

		</div>
	);
}