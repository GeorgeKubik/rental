	import styles from './Authorization.module.scss';

	import { useForm, SubmitHandler } from "react-hook-form";

	import {ReactComponent as IconLogin} from '../../assets/img/authorization/iconLogin.svg';
	import {ReactComponent as IconPassword} from '../../assets/img/authorization/iconPassword.svg';
	 
	interface IFormInputs {
		name: string;
		password: string;
	 }
	const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

	const Authorization = () => {
		const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();

		/* const error = errors.firstName ? {"outline": "2px solid rgba(78, 100, 249, 0.8)"}: {"outline": "none"}; */

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h1 className={styles.title}>Авторизация</h1>
						<div className={styles.descr}>
							Авторизируйтесь, чтобы начать
							<br />
							публиковать свои объявления
						</div>
						<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
							<input 
								className={styles.login} 
								type='text'
								{...register("name", { required: true })} 
								placeholder="Логин"
							/>
							 <IconLogin className={styles.iconLogin}/>
							<input 
								className={styles.password} 
								type='password' 
								{...register("password", { required: true })}
								placeholder="Пароль"
							/>
							 {errors.name && "Password is required"}
							 <IconPassword className={styles.iconPassword}/>
							<div className={styles.bloks}>
								<div className={styles.checkboxBlock}>
									<div className={styles.checkboxWrapper}>
										<input className={styles.checkbox} id="checkbox" type="checkbox"/>
										<label className={styles.checkboxLabel} htmlFor="checkbox"></label>
									</div>
									<div className={styles.checkboxText}>Запомнить меня</div>
								</div>
								<div className={styles.restorePassword}>Забыли пароль?</div>
							</div>
							<button className={styles.FormBtn} type='submit'>Войти</button>
						</form>
						<div className={styles.checkIn}>
							Еще нет аккаунта? <span className={styles.link}>Создайте акканут</span>
						</div>
					</div>
				</div>
			</>
		)
	}

	export default Authorization;