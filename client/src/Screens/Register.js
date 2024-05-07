import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Photo from "../Assets/smiling-young-man-watching-3d-movie-while-eating-popcorn-white-background_662251-2921-removebg-preview.png";
import { Input } from "../Components/UserInputs";
import { Link, useNavigate } from "react-router-dom";
import { LiaUserPlusSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidationSchema } from "../Components/Validation/UserValidation";
import { registerAction } from "../Redux/Actions/userActions";
import toast from "react-hot-toast";
import { InlineError } from "../Components/Notifications/Error";
import { CgSpinner } from "react-icons/cg";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userRegister
  );

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterValidationSchema),
  });

  const onSubmit = (data) => {
    dispatch(registerAction(data));
  };

  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate("/dashboard");
    } else if (userInfo) {
      navigate("/profile");
    }
    if (isSuccess) {
      toast.success(
        `Welcome to our page, dear ${userInfo?.firstName} ${userInfo?.lastName}`
      );
      dispatch({ type: "USER_REGISTER_RESET" });
    }
    if (isError) {
      toast.error(isError);
      dispatch({ type: "USER_REGISTER_RESET" });
    }
  }, [userInfo, isSuccess, isError, navigate, dispatch]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Layout>
      <div className="container text-text flex flex-col mx-auto px-2 my-24">
        <div className="hidden md:flex justify-center items-center">
          <div className="flex flex-col">
            <h1 className="md:text-5xl lg:text-7xl text-center font-semibold text-dry uppercase">
              Watch
            </h1>
            <span className="md:text-2xl lg:text-4xl font-light">
              your favorite the movie
            </span>
          </div>
          <img
            src={Photo}
            alt="Watching-man"
            className="md:w-[300px] lg:w-[400px]"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[60%] md:w-[45%] lg:w-[35%] mt-5 flex flex-col gap-2 self-center md:pt-5 rounded-lg"
        >
          <div className="flex-rows gap-1 text-xl md:text-2xl mb-3">
            <span className="text-dry">Discover, </span>
            <p>your artist!</p>
          </div>
          <div className="w-full">
            <Input
              label="Firstname"
              type="text"
              name="firstName"
              register={register("firstName")}
              bg={true}
            />
            {errors.firstName && (
              <InlineError error={errors.firstName.message} />
            )}
          </div>
          <div className="w-full">
            <Input
              label="Lastname"
              type="text"
              name="lastName"
              register={register("lastName")}
              bg={true}
            />
            {errors.lastName && <InlineError error={errors.lastName.message} />}
          </div>
          <div className="w-full">
            <Input
              label="Email address"
              type="email"
              name="email"
              register={register("email")}
              bg={true}
            />
            {errors.email && <InlineError error={errors.email.message} />}
          </div>
          <div className="w-full">
            <Input
              label="Username"
              type="text"
              name="username"
              register={register("username")}
              bg={true}
            />
            {errors.username && <InlineError error={errors.username.message} />}
          </div>
          <div className="w-full">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              register={register("password")}
              bg={true}
            />
            {errors.password && <InlineError error={errors.password.message} />}
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="focus:outline-none mt-1 text-xs text-subMain"
            >
              {showPassword ? "Hide" : "Show"} Password
            </button>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-dry text-sm md:text-lg text-main hover:text-subMain px-4 py-3 rounded-md font-bold transitions w-full flex-rows gap-2 transitions"
          >
            {isLoading ? (
              <>
                <CgSpinner className="animate-spin" />
                Loading...
              </>
            ) : (
              <>
                <LiaUserPlusSolid className="w-6 h-6" />
                Create Account
              </>
            )}
          </button>
          <p className="text-center text-xs md:text-md">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-text border border-t-0 border-x-0 border-b-subMain"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
