import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
    </div>
  );
};

const TextInput = ({ label, placeholder, register, isError, errorMessage }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full rounded border bg-transparent p-3 focus:border-primary focus:outline-none ${
          isError ? "border-red-500" : "border-gray-300 dark:border-gray-600"
        }`}
        {...register}
      />
      {isError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

const PasswordInput = ({
  label,
  placeholder,
  register,
  isError,
  errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className={`w-full rounded border bg-transparent p-3 focus:border-primary focus:outline-none ${
            isError ? "border-red-500" : "border-gray-300 dark:border-gray-600"
          }`}
          {...register}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      {isError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};

// Login form schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Custom hook for login form
const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Login data:", data);
      // Handle successful login here
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
  };
};

// LoginForm component
const LoginForm = () => {
  const { handleSubmit, register, errors, isLoading } = useLoginForm();

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Username"
        placeholder="Enter your username"
        register={register("username")}
        isError={errors.username}
        errorMessage={errors.username?.message}
      />

      <PasswordInput
        placeholder="Enter your password"
        register={register("password")}
        label="Password"
        isError={errors.password}
        errorMessage={errors.password?.message}
      />

      <div className="mt-8 flex items-center justify-center gap-6 p-8">
        {isLoading && <Loading />}

        {!isLoading && (
          <button
            type="submit"
            className="btn h-12 w-64 items-center justify-center px-5"
          >
            {isLoading ? <Loading /> : "Login"}
          </button>
        )}
      </div>
    </form>
  );
};

// Main LoginPage component
const LoginPage = () => {
  return (
    <div
      className="flex min-h-screen flex-grow items-center justify-center bg-cover px-3 py-10 md:px-5 md:py-16 lg:py-20 xl:py-28"
      style={{ backgroundImage: "url(/images/login-bg.png)" }}
    >
      <div className="box w-full max-w-[805px] items-center p-4">
        <div className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8">
          <div className="flex flex-grow items-center justify-center">
            <img
              src="/images/kamioun-logo.png"
              alt="logo"
              width={260}
              height={280}
            />
          </div>
          <div className="bb-dashed mb-4 pb-4 text-sm md:mb-6 md:pb-6 md:text-base" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
