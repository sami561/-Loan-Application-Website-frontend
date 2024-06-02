import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLoginMutation } from "state/authApi"; // Adjust this path to where your authApi file is located
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";

const LoginForm = () => {
  let navigation = useNavigation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      await login(data).unwrap();
      toast.success("Logged in successfully");
      navigation("/dashboard");
    } catch (err) {
      toast.error(`Login failed: ${err.data?.message || "Unknown error"}`);
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="card-front">
      <form onSubmit={handleSubmit(onSubmit)} className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <div className="form-group" style={{ padding: "10px" }}>
            <TextField
              type="email"
              {...register("email", { required: "Email is required" })}
              className="form-style"
              placeholder="Your Email"
              autoComplete="off"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>
          <div className="form-group" style={{ padding: "10px" }}>
            <TextField
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="form-style"
              placeholder="Your Password"
              autoComplete="off"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div
            className="form-group"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <button type="submit" className="btn mt-4" disabled={isLoading}>
              Submit
            </button>
          </div>
          <p className="mb-0 mt-4 text-center">
            <a href="#0" className="link">
              Forgot your password?
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
