import './user-modal.scss';
import { useState } from 'react';

interface ModalProps {
	active: boolean;
	setModalActive: (active: boolean) => void;
}

export const Modal = ({ active, setModalActive }: ModalProps) => {
	const [isLoginMode, setIsLoginMode] = useState(true);
	const [formData, setFormData] = useState({
		name: '',
		login: '',
		password: ''
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		try {
			const endpoint = isLoginMode ? 'login' : 'register';
			const payload = isLoginMode
				? { login: formData.login, pass: formData.password }
				: { name: formData.name, login: formData.login, pass: formData.password };

			const response = await fetch('api.php', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					action: endpoint,
					...payload
				})
			});

			const data = await response.json();

			if (data.success) {
				// Успешная авторизация/регистрация
				setModalActive(false);
				// Здесь можно добавить обновление состояния приложения
				// Например, установку пользователя в контекст/редюсер
			} else {
				setError(data.message || 'Произошла ошибка');
			}
		} catch (err) {
			setError('Ошибка соединения с сервером');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={active ? "modal active" : 'modal'} onClick={() => setModalActive(false)}>
			<div className={active ? "modal-content active" : 'modal-content'} onClick={e => e.stopPropagation()}>
				<div className='modal-header'>
					<svg id="svg-source" height={0} version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute" }}>
						{/* Ваши SVG-иконки остаются без изменений */}
					</svg>

					<div className="header">
						<h3 className="sign-in">{isLoginMode ? 'Sign in' : 'Register'}</h3>
						<div
							className="buttonReg"
							onClick={() => setIsLoginMode(!isLoginMode)}
						>
							{isLoginMode ? 'Register' : 'Sign in'}
						</div>
					</div>

					<div className="clear" />

					{error && <div className="error-message">{error}</div>}

					<form onSubmit={handleSubmit}>
						{!isLoginMode && (
							<div>
								<label className="user" htmlFor="name">
									<svg viewBox="0 0 32 32">
										<g filter="">
											<use xlinkHref="#man-people-user" />
										</g>
									</svg>
								</label>
								<input
									className="user-input"
									type="text"
									name="name"
									id="name"
									placeholder="My name is"
									value={formData.name}
									onChange={handleInputChange}
									required
								/>
							</div>
						)}

						<div>
							<label className="user" htmlFor="login">
								<svg viewBox="0 0 32 32">
									<g filter="">
										<use xlinkHref="#man-people-user" />
									</g>
								</svg>
							</label>
							<input
								className="user-input"
								type="text"
								name="login"
								id="login"
								placeholder="Login"
								value={formData.login}
								onChange={handleInputChange}
								required
							/>
						</div>

						<div>
							<label className="lock" htmlFor="password">
								<svg viewBox="0 0 32 32">
									<g filter="">
										<use xlinkHref="#lock-locker" />
									</g>
								</svg>
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								value={formData.password}
								onChange={handleInputChange}
								required
							/>
						</div>

						<div>
							<input
								type="submit"
								value={isLoginMode ? 'Sign in' : 'Register'}
								disabled={loading}
							/>
							{loading && <span className="loading-spinner">Loading...</span>}
						</div>

						{isLoginMode && (
							<>
								<div className="radio-check">
									{/* Ваши radio-кнопки остаются без изменений */}
								</div>
								<span className="check-label">Remember me</span>
								<span className="forgot-label">Lost your password?</span>
							</>
						)}

						<div className="clear" />
					</form>
				</div>
			</div>
		</div>
	);
};