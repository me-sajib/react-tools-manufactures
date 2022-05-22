import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
// import Loading from "../Shared/Loading";
// import SocialLogin from "./SocialLogin";
import auth from "../../firebase.config";
import Spinner from "../Shared/Spinner";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from || { pathname: "/" };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  let errorMessage;
  if (error) {
    errorMessage = error?.message;
  }

  const submit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div class="card w-96 bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="text-center text-2xl font-bold  uppercase">Login</h2>
          <form
            className="grid grid-cols-1 gap-3"
            onSubmit={handleSubmit(submit)}
          >
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* password input field */}
            <div className="form-control w-full mx-w-xs">
              <label htmlFor="" className="label">
                <span className="label-text"> Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {
              // spinner show
              loading && <Spinner />
            }
            {
              /* server error show */
              error && <span className="text-red-500">{errorMessage}</span>
            }
            <input type="submit" value="login" className="btn w-full" />
          </form>
          <p>
            <small>
              New to this website?{" "}
              <Link to="/registration" className="text-primary underline">
                Create new account
              </Link>
            </small>
          </p>
          <div class="divider">OR</div>
          {/* social login */}
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
