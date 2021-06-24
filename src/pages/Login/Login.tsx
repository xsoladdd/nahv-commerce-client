//import React from 'react'

import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { LoginInterface, LoginProps } from "./interface";
import { Formik, Field, FormikHelpers } from "formik";
import { login } from "src/api/Mutations";
import { loginSchema } from "./validations";
import { useMutation } from "react-query";
import { loginParameters } from "src/api/interface";
import { debounce } from "lodash";
import { MessageState } from "../Register/interface";

import { useHistory } from "react-router-dom";

import Cookies from "js-cookie";

const Login: React.FC<LoginProps> = ({}) => {
  const [customMessage, setCustomMessage] = useState<MessageState>({
    message: "",
    variant: "danger",
  });
  const history = useHistory();
  const { mutateAsync } = useMutation(
    (props: loginParameters) => login(props),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          return setCustomMessage({
            message: data.message,
            variant: "danger",
          });
        }
        Cookies.set("access_token", data.token, { expires: 7 });
        return history.push("/");
        // return setCustomMessage({
        //   message: data.message,
        //   variant: "success",
        // });
      },
    }
  );
  return (
    <Container className="pt-5">
      <blockquote className="blockquote text-center">
        {/* <p className="display-4 mb-0">Register</p> */}
        <h1 className=" mb-0">Register</h1>
        <footer className="blockquote-footer">
          Please authenticate to join us
        </footer>
      </blockquote>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={debounce(
          async (
            values: LoginInterface,
            { setSubmitting }: FormikHelpers<LoginInterface>
          ) => {
            await mutateAsync({ data: values });
            setSubmitting(false);
          },
          1000
        )}
      >
        {({ isSubmitting, values, errors, touched, handleSubmit }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                as={Field}
                type="email"
                placeholder="Enter email"
                value={values.email}
                isInvalid={touched.email && !!errors.email}
              />
              {errors.email && touched.email ? (
                <Form.Text className="invalid-feedback pl-2">
                  {errors.email}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                as={Field}
                type="password"
                placeholder="Password"
                value={values.password}
                isInvalid={touched.password && !!errors.password}
              />
              {errors.password && touched.password ? (
                <Form.Text className="invalid-feedback pl-2">
                  {errors.password}
                </Form.Text>
              ) : null}
            </Form.Group>

            {customMessage.message && (
              <Alert variant={customMessage.variant}>
                {customMessage.message}
              </Alert>
            )}

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? `Loading...` : "Login "}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Login;
