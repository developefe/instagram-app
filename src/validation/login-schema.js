import Yup from "./validate"

const LoginSchema = Yup.object().shape({
	username: Yup.string()
		.required(),
	password: Yup.string()
		.required()
})

export default LoginSchema