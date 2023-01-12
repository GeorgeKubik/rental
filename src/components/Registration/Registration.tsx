
	import styles from './Registration.module.scss';

	import {ReactComponent as IconLogin} from '../../assets/img/authorization/iconLogin.svg';
	import {ReactComponent as IconPassword} from '../../assets/img/authorization/iconPassword.svg';
	import {ReactComponent as IconMail} from '../../assets/img/authorization/iconMail.svg';

	import { useForm, SubmitHandler } from "react-hook-form";
	import ReCAPTCHA from "react-google-recaptcha"; 
	import {useState} from 'react';
	
	interface IFormInputs {
		name: string;
		password: string;
		confirmPassword: string;
		email: string;
	}

	const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);

	
	const Registration = () => {
		const { register,formState: { errors }, handleSubmit } = useForm<IFormInputs>();
		const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false)
		
		const handleOnChange = (value: string | null) =>  {
			setIsCaptchaSuccess(!isCaptchaSuccessful);
			console.log("captcha value: ", value);
		}

		return (
			<>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h1 className={styles.title}>Регистрация</h1>
						<div className={styles.registration}>
							<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
								<input 
									className={styles.login} 
									type='text' 
									{...register("name", { required: true })} 
									placeholder="Логин"
								/>
								<IconLogin className={styles.iconLogin}/>
								{errors.name && "name is required"}
								<input 
									className={styles.email} 
									type='text' 
									{...register("email", { required: true })} 
									placeholder="Электронная почта"
								/>
								<IconMail className={styles.IconMail}/>
								<input 
									className={styles.password} 
									type='password'  
									{...register("password", { required: true })}
									placeholder="Пароль"
								/>
								<IconPassword className={styles.iconPassword}/>
								<input 
									className={styles.confirmPassword} 
									type='password'  
									{...register("confirmPassword", { required: true })}
									placeholder="Пароль"
								/>
								<IconPassword className={styles.iconConfirmPassword}/>
								<div className={styles.recaptcha}>
									<ReCAPTCHA
										sitekey="6LdJPfEjAAAAAJiw_Sw9UbmNT1uUMz3xz3wPmxSR"
										onChange={handleOnChange}
									/>
								</div>
								<button disabled={!isCaptchaSuccessful} className={styles.FormBtn} type='submit'>Зарегистрироваться</button>
							</form>
						</div>
						<div className={styles.descrBlock}>
							<ul className={styles.descr}>
								<li className={styles.listItem}>
									<span className={styles.textBold}>Пользователь обязуется:</span>
									<br />
									предоставлять достоверную и актуальную
								</li>
								<li className={styles.listItem}>
									информацию при регистрации и добавлении объекта; 
									добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.
								</li>
							</ul>
							<div className={styles.authorization}>
								Уже есть аккаунта? <span className={styles.textMainColor}>Войдите</span>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}

	export default Registration;