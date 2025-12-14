import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setErrors }) => {
        let newErrors = {};
        if (!values.username) {
          newErrors.username = "Username is required";
        }
        if (!values.email) {
          newErrors.email = "Email is required";
        }
        if (!values.password) {
          newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
          console.log("Formik form submitted:", values);
        }
      }}
    >
      <Form>
        <div>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
