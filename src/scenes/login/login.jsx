const LoginForm = () => {
  return (
    <div className="card-front">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3" style={{ textAlign: "center" }}>
            Log In
          </h4>
          <div className="form-group" style={{ padding: "10px" }}>
            <input
              type="email"
              name="logemail"
              className="form-style"
              placeholder="Your Email"
              id="logemail"
              autoComplete="off"
            />
            <i className="input-icon uil uil-at"></i>
          </div>
          <div className="form-group " style={{ padding: "10px" }}>
            <input
              type="password"
              name="logpass"
              className="form-style"
              placeholder="Your Password"
              id="logpass"
              autoComplete="off"
            />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            {" "}
            <button className="btn mt-4">submit</button>
          </div>
          <p className="mb-0 mt-4 text-center">
            <a href="#0" className="link">
              Forgot your password?
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
