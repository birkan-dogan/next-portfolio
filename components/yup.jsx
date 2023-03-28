import * as yup from "yup";

const validations = yup.object().shape({
  name: yup.string().trim().min(3).max(20).required(),
  email: yup.string().trim().email().required(),
  message: yup
    .string()
    .trim()
    .min(10, "Message must be 10 characters at least!")
    .required(),
});

export default validations;
