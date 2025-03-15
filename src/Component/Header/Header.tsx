export function Header() {
	return (
		<>
			<header className="p-30">
				<div className="d-flex justify-between">
					<div className="d-flex align-center">
						<img width={90} height={30} src="/img/logo.svg" alt="MOTUL" />

						<div className="headerInfo">

							<p> Ваша уверенность за рулем!</p>
						</div>
					</div>
					<ul className="headerRight d-flex align-center">
						<li className="mr-30">
							<img width={18} height={18} src='/img/Cart.svg' />
							<span>1200 rub.</span>
						</li>
						<li>
							<img width={18} height={18} src='/img/like.svg' />
						</li>
						<li>
							<img width={18} height={18} src='/img/Union.svg' />
						</li>
					</ul>

				</div>
			</header>
		</>
	)
}