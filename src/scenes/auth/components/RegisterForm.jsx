import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { useRegisterMutation } from "state/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import httpClient from "utils/apiMethods";

const signUpSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("data===>", data);
      const response = await httpClient.post("/kamarket/auth/register", {
        firstname: data.firstName,
        lastname: data.lastName,
        email: data.email,
        password: data.password,
      });
      toast.success("User registered successfully");
      console.log(response);
    } catch (error) {
      console.log(error.response?.data?.businessErrorDescription);
      toast.error(error.response?.data?.businessErrorDescription);
    }
  };

  return {
    register: registerField,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
  };
};

const RegisterForm = () => {
  const { handleSubmit, register, errors, isLoading } = useRegisterForm();

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <TextInput
        label="firstName"
        placeholder="Enter your firstName"
        register={register("firstName")}
        isError={errors.firstName}
        errorMessage={errors.firstName?.message}
      />{" "}
      <TextInput
        label="lastName"
        placeholder="Enter your lastName"
        register={register("lastName")}
        isError={errors.lastName}
        errorMessage={errors.lastName?.message}
      />
      <TextInput
        label="Email"
        placeholder="Enter your email"
        register={register("email")}
        isError={errors.email}
        errorMessage={errors.email?.message}
      />
      <PasswordInput
        placeholder="Enter your password"
        register={register("password")}
        label="Password"
        isError={errors.password}
        errorMessage={errors.password?.message}
      />
      <div className="form-footer">
        {isLoading ? (
          <Loading />
        ) : (
          <button type="submit" className="login-button">
            Register
          </button>
        )}
      </div>
    </form>
  );
};

const Loading = () => {
  return <div className="loading-spinner"></div>;
};

export default RegisterForm;
