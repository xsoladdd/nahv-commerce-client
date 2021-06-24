//import React from 'react'

import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import { LoginInterface } from "../Login/interface";
import { MessageState, RegisterInterface, RegisterProps } from "./interface";
import { Formik, FormikHelpers, Field } from "formik";
import { RegisterSchema } from "./validation";
import { useMutation } from "react-query";
import { registerParameters } from "src/api/interface";
import { register } from "src/api/Mutations";
import { debounce } from "lodash";

const Register: React.FC<RegisterProps> = ({}) => {
  const [customMessage, setCustomMessage] = useState<MessageState>({
    message: "",
    variant: "danger",
  });
  const { mutateAsync } = useMutation(
    (props: registerParameters) => register(props),
    {
      onSuccess: (data) => {
        if (data.status !== 200) {
          return setCustomMessage({
            message: `Registration Failed. ${data.message as string}`,
            variant: "danger",
          });
        }
        return setCustomMessage({
          message: "Registration Success",
          variant: "success",
        });
      },
    }
  );
  return (
    <Container className="pt-5">
      <blockquote className="blockquote text-center">
        {/* <p className="display-4 mb-0">Register</p> */}
        <h1 className=" mb-0">Register</h1>
        <footer className="blockquote-footer">
          Fillup the form to join us
        </footer>
      </blockquote>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          repeatPassword: "",
          middleName: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={debounce(
          async (
            values: RegisterInterface,
            { setSubmitting }: FormikHelpers<RegisterInterface>
          ) => {
            await mutateAsync({ data: values });
            setSubmitting(false);
          },
          1000
        )}
      >
        {({ values, errors, touched, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} noValidate>
            <Row>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    as={Field}
                    type="text"
                    placeholder="First"
                    value={values.firstName}
                    isInvalid={touched.firstName && !!errors.firstName}
                  />
                  {errors.firstName && touched.firstName ? (
                    <Form.Text className="invalid-feedback pl-2">
                      {errors.firstName}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="middleName">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control
                    as={Field}
                    type="text"
                    placeholder="Middle"
                    value={values.middleName}
                    isInvalid={touched.middleName && !!errors.middleName}
                  />
                  {errors.middleName && touched.middleName ? (
                    <Form.Text className="invalid-feedback pl-2">
                      {errors.middleName}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>&nbsp;</Form.Label>
                  <Form.Control
                    as={Field}
                    type="text"
                    placeholder="Last"
                    value={values.lastName}
                    isInvalid={touched.lastName && !!errors.lastName}
                  />
                  {errors.lastName && touched.lastName ? (
                    <Form.Text className="invalid-feedback pl-2">
                      {errors.lastName}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
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
            <Row>
              <Col>
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
              </Col>
              <Col>
                <Form.Group controlId="repeatPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    as={Field}
                    type="password"
                    placeholder="Repeat Password"
                    value={values.repeatPassword}
                    isInvalid={
                      touched.repeatPassword && !!errors.repeatPassword
                    }
                  />
                  {errors.repeatPassword && touched.repeatPassword ? (
                    <Form.Text className="invalid-feedback pl-2">
                      {errors.repeatPassword}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>

            {customMessage.message && (
              <Alert variant={customMessage.variant}>
                {customMessage.message}
              </Alert>
            )}

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? `Loading...` : "Register"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default Register;
