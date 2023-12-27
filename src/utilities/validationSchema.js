import * as Yup from "yup";

export const commonValidationSchema = Yup.object({
  name: Yup.string()
    .required("*Name is required")
    .matches(/^[a-zA-Z\s]*$/, "*Only alphabets and spaces are allowed"),

  email: Yup.string().email("*Invalid email address").required("*Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, {
      message: "*Invalid phone number",
      excludeEmptyString: false,
    })
    .required("*Phone number is required"),
  gender: Yup.string().required("*Please select your gender"),
  dob: Yup.string().required("*Date of Birth is required"),
  education: Yup.string().required("*Education is required"),
  workEx: Yup.string().required("*Work Experience is required"),
  medicalCondition: Yup.string().required("*Medical Condition is required"),

  // Add more common fields as needed
});
