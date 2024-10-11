import * as Yup from "yup";
const loginSchema = Yup.object().shape({
  email: Yup.string().email().min(9).max(30).required(),
  password: Yup.string().min(5).max(12).required(),
});

const registerSchema = Yup.object().shape({
  name: Yup.string().min(3).max(12).required(),
  email: Yup.string().email().min(9).max(30).required(),
  password: Yup.string().min(5).max(12).required(),
});

export { loginSchema, registerSchema };
