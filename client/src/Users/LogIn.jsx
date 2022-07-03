// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import Style from "./logIn.module.css"

// export const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button className={Style.LogIn} onClick={() => loginWithRedirect()}>Login</button>;
// };

import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
	createNewUser,
	UserLogin,
	loggedOut,
	getAllClientsUserEmail,
} from "../../../redux/actions-types";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
	const [activeCreate, setActiveCreate] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userData = useSelector((state) => state.userData);

	// useEffect(() => {
	// 	dispatch(getLoginGoogle());
	// },[dispatch]);
	// console.log(userData)

	// let newLoginGoogle = {
	// 	user_name: userData.username,
	// 	user_password: userData.password,
	// }
	useEffect(() => {
		// console.log(userData);
		if (userData.name === "AxiosError") {
			Swal.fire( "", "error");
			dispatch(loggedOut());
		} else if (userData.username) {
			navigate("/");
		}
	}, [userData, dispatch, navigate]);

	const [newUser, setNewUser] = useState({
		email: "",
		user_name: "",
		user_password: "",
		repeat_password: "",
		name: "",
		isRegistered: true,
	});

	const allClients = useSelector((state) => state.allClientsUserEmail);

	/** fin de busqueda de los usuarios y email */
	const [error, setError] = useState({});

	function validate(newUser) {
		let errors = {};

		let usernameEnUso = allClients.find(
			(client) => client.username === newUser.name,
		);
		let emailEnUso = allClients.find(
			(client) => client.email === newUser.email,
		);

		if (!newUser.name) errors.name = "Name is Necessary";
		if (/[1-9]/.test(newUser.name))
			errors.name = "only alphabetical characters";
		if (/[^\w\s]/.test(newUser.name))
			errors.name = "cant use special character ";
		if (
			!/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/.test(
				newUser.email,
			)
		)
			errors.email = "Error";
		if (!newUser.email)
			errors.email = "Field Necessary";
		if (emailEnUso) errors.email = "this email are used";
		if (!newUser.user_name)
			errors.user_name = "put your user";
		if (usernameEnUso) errors.user_name = "this name are used";
		if (!newUser.user_password)
			errors.user_password = "password requerided";
		if (newUser.repeat_password !== newUser.user_password)
			errors.repeat_password = "Error in password";

		return errors;
	}
	/** Fin function validate */
	const handleChangeInputNewUser = (e) => {
		e.preventDefault();
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		});
		setError(
			validate({
				...newUser,
				[e.target.name]: e.target.value,
			}),
		);
	};

	const handleChangeActive = (e) => {
		e.preventDefault();
		if (activeCreate) {
			setActiveCreate(false);
		} else {
			dispatch(getAllClientsUserEmail());
			setActiveCreate(true);
		}
	};

	/** Validacion para el boton disabled */
	const [disabledButton, setDisabledButton] = useState(true);

	useEffect(() => {
		if (
			newUser.name === "" ||
			error.hasOwnProperty("name") ||
			error.hasOwnProperty("email") ||
			error.hasOwnProperty("user_name") ||
			error.hasOwnProperty("user_password") ||
			error.hasOwnProperty("repeat_password")
		) {
			setDisabledButton(true);
		} else {
			setDisabledButton(false);
		}
	}, [error, newUser, setDisabledButton]);

	/** Terminando la validacion para el boton disabled */
	/** Crear usuario */
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createNewUser(newUser));
		setNewUser({
			dni_client: Number(""),
			email: "",
			user_name: "",
			user_password: "",
			repeat_password: "",
			name: "",
			isRegistered: true,
		});
		Swal.fire( "success");
		setActiveCreate(false);
	};

	/**Login */
	const [login, setLogin] = useState({
		user_name: "",
		user_password: "",
	});

	const handleChangeInputLogin = (e) => {
		e.preventDefault();
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
		// setLoginError(
		// 	validate({
		// 		...newUser,
		// 		[e.target.name]: e.target.value,
		// 	})
		// );
		// console.log(login);
	};

	/** Login with google */
	const fetchAuthUser = async () => {
		const response = await axios
			.get("/users", { withCredentials: true })
			.catch((e) => {
				console.log("Not properly authenticated");
			});

		if (response && response.data) {
			return response.data;
		}
	};

	const GOOGLE = () => {
		let timer = null;

		const googleLoginUrl = "http://localhost:3001/user/login/google";
		const newWindow = window.open(
			googleLoginUrl,
			"_blank",
			"width=500, height=600",
		);

		if (newWindow) {
			timer = setInterval(async () => {
				if (newWindow.closed) {
					const { user_name, user_password } = await fetchAuthUser();
					dispatch(UserLogin({ user_name, user_password }));
					navigate("/");
					if (timer) clearInterval(timer);
				}
			}, 2000);
		}
	};

	/** Fin login with google */

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		setLogin({
			user_name: "",
			user_password: "",
		});
		// if (userData.status) {
		// 	dispatch(UserLogin(newLoginGoogle));
		// }

		dispatch(UserLogin(login));

		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			},
		});

		Toast.fire({
			icon: "success",
			title: "Welcom",
		});
	};

	return (
		<>
			<NavBar />
			<div className={style.loginContainer}>
				{/**Ingresando usuario */}
				<div className={style.formLogin}>
					<h2 className={style.loginTitle}>Soy Cliente</h2>
					<p className={style.loginInfoText}>
						If you have account, please enter your username and password
					</p>
					<form onSubmit={(e) => handleLoginSubmit(e)}>
						<div className={style.formInputContainer}>
							<label className={style.formLabel}>USUARIO</label>
							<input
								className={style.formInput}
								type="text"
								name="user_name"
								value={login.user_name}
								placeholder="Name"
								onChange={(e) => handleChangeInputLogin(e)}
							/>
						</div>
						<div className={style.formInputContainer}>
							<label className={style.formLabel}>CONTRASEÑA</label>
							<input
								className={style.formInput}
								type="password"
								name="user_password"
								value={login.user_password}
								placeholder="Contraseña"
								onChange={(e) => handleChangeInputLogin(e)}
							/>
						</div>
						<button className={style.formButtonLogin}>LOGIN</button>
					</form>
				</div>

				{/**Creando usuario */}
				<div className={style.formCreateUser}>
					{activeCreate ? (
						<div className={style.formCreateActive}>
							<h2 className={style.formTitle}>Create Account</h2>
							<form onSubmit={(e) => handleSubmit(e)}>
								<div className={style.formInputContainer}>
									<label className={style.formLabel}>Name</label>
									<input
										className={style.formInput}
										type="text"
										name="name"
										value={newUser.name}
										placeholder="Nombre"
										onChange={(e) => handleChangeInputNewUser(e)}
									/>
								</div>
								{error.name && <p className={style.error}>{error.name}</p>}

								<div className={style.formInputContainer}>
									<label className={style.formLabel}>Email</label>
									<input
										className={style.formInput}
										type="text"
										name="email"
										value={newUser.email}
										placeholder="Email"
										onChange={(e) => handleChangeInputNewUser(e)}
									/>
								</div>
								{error.email && <p className={style.error}>{error.email}</p>}

								<div className={style.formInputContainer}>
									<label className={style.formLabel}>User</label>
									<input
										className={style.formInput}
										type="text"
										name="user_name"
										value={newUser.login_name}
										placeholder="Usuario"
										onChange={(e) => handleChangeInputNewUser(e)}
									/>
								</div>
								{error.user_name && (
									<p className={style.error}>{error.user_name}</p>
								)}

								<div className={style.formInputContainer}>
									<label className={style.formLabel}>Password</label>
									<input
										className={style.formInput}
										type="password"
										name="user_password"
										value={newUser.login_password}
										placeholder="Contraseña"
										onChange={(e) => handleChangeInputNewUser(e)}
									/>
								</div>
								{error.user_password && (
									<p className={style.error}>{error.user_password}</p>
								)}

								<div className={style.formInputContainer}>
									<label className={style.formLabel}>
										Confirm Password
									</label>
									<input
										className={style.formInput}
										type="password"
										name="repeat_password"
										placeholder="Repetir contraseña"
										value={newUser.repeat_password}
										onChange={(e) => handleChangeInputNewUser(e)}
									/>
								</div>
								{error.repeat_password && (
									<p className={style.error}>{error.repeat_password}</p>
								)}

								<button
									disabled={disabledButton}
									className={style.formButtonCreateActive}
								>
									Create
								</button>
								<button
									className={style.formButtonBack}
									onClick={handleChangeActive}
								>
									Back
								</button>
							</form>
						</div>
					) : (
						<div className={style.formCreateNotActive}>
							<h2>Aún no soy cliente</h2>
							<p>
								if you dont have account, please create one and Join...
							</p>
							<h3>Beneficios</h3>
							<ul className={style.formListInfoContainer}>
								<li>Happy Fasting Ending.</li>
								<li>History of a Greate shopp</li>
								<li>See your package in real time</li>
							</ul>
							<button
								className={style.formButtonCreateActive}
								onClick={handleChangeActive}
							>
								CREAR ACCOUNT
							</button>

							<button
								className={`${style.formButtonCreateActive} ${style.google}`}
								onClick={GOOGLE}
							>
								Login with Google
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Login;