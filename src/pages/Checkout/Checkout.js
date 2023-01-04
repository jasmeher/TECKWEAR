import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { selectAllCartProducts } from "../../app/slice/cartSlice";
import * as yup from "yup";
import Shipping from "../../components/Shipping/Shipping";
import Payment from "../../components/Shipping/Payment";
import { loadStripe } from "@stripe/stripe-js";
import AnimatedRoute from "../../components/AnimatedPage/AnimatedPage";
import UseAuth from "../../hooks/UseAuth";
import { useGetUserQuery } from "../../app/slice/usersApiSlice";

const stripePromise = loadStripe(
  "pk_test_51LP51LSFncM9QBps7YO3UAX9t4rivrycZ8aGcb5CBQTRQoOHu8tzE1lJgPn2ThT7QZ3BXPTYhbsG1UqCeoHD6DP400hD1Nim7M"
);

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipcode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipcode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector(selectAllCartProducts);
  console.log(cart);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const { userId } = UseAuth();
  const {
    data: userQuery,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserQuery(userId);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    console.log(error?.data?.message);
  }
  if (isSuccess) {
    console.log("success");
  }

  const initialValues = {
    billingAddress: {
      firstName: userQuery ? userQuery.fname : "",
      lastName: userQuery ? userQuery.lname : "",
      country: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zipcode: "",
    },
    shippingAddress: {
      isSameAddress: true,
      firstName: "",
      lastName: "",
      country: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zipcode: "",
    },
    email: userQuery ? userQuery.email : "",
    phoneNumber: "",
  };

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);

    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }
    if (isSecondStep) {
      makePayment(values);
    }

    actions.setTouched({});
  };

  async function makePayment(values) {
    const stripe = await stripePromise;
    const reqBody = {
      user: userId,
      email: "123@gmail.com",
      product: cart.map((product) => ({
        id: product.id,
        qty: product.qty,
      })),
    };

    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reqBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  }

  return (
    <AnimatedRoute>
      <Box width="80%" m="100px auto">
        <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
          <Step>
            <StepLabel>Billing</StepLabel>
          </Step>
          <Step>
            <StepLabel>Payment</StepLabel>
          </Step>
        </Stepper>
        <Box>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                {isFirstStep && (
                  <Shipping
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                {isSecondStep && (
                  <Payment
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                )}
                <Box display={"flex"} justifyContent="space-between" gap="50px">
                  {isSecondStep && (
                    <Button
                      fullWidth
                      variant="container"
                      sx={{ boxShadow: "none", padding: "15px 40px" }}
                      onClick={() => setActiveStep(activeStep - 1)}
                    >
                      Back
                    </Button>
                  )}
                  {!isSecondStep ? (
                    <Button
                      fullWidth
                      variant="container"
                      sx={{ boxShadow: "none", padding: "15px 40px" }}
                      onClick={() => setActiveStep(activeStep + 1)}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      fullWidth
                      variant="container"
                      sx={{ boxShadow: "none", padding: "15px 40px" }}
                      onClick={handleFormSubmit}
                    >
                      Place Order
                    </Button>
                  )}
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </AnimatedRoute>
  );
};

export default Checkout;
