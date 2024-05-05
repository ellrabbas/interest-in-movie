import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Input } from "../../Components/UserInputs";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordValidationSchema } from "../../Components/Validation/UserValidation";
import { InlineError } from "../../Components/Notifications/Error";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { changePasswordAction } from "../../Redux/Actions/userActions";

function Password() {
    const dispatch = useDispatch();
    const { isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.userChangePassword
    );

    const [showPassword, setShowPassword] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(PasswordValidationSchema),
    });

    const onSubmit = (data) => {
        dispatch(changePasswordAction(data));
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
        }
        if (isError) {
            toast.error(isError);
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
        }

        if (message) {
            toast.success(message);
            reset();
        }
    }, [isSuccess, isError, message, reset, dispatch]);

    const togglePasswordVisibility = (inputName) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [inputName]: !prevState[inputName],
        }));
    };

    return (
        <SideBar>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-text flex flex-col gap-6"
            >
                <h2 className="text-xl font-bold">Change password</h2>
                <div className="w-full">
                    <Input
                        label="Old Password"
                        type={showPassword.oldPassword ? "text" : "password"}
                        name="oldPassword"
                        register={register("oldPassword")}
                        bg={true}
                    />
                    {errors.oldPassword && (
                        <InlineError error={errors.oldPassword.message} />
                    )}
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility("oldPassword")}
                        className="focus:outline-none mt-1 text-xs text-subMain"
                    >
                        {showPassword.oldPassword ? "Hide" : "Show"} Password
                    </button>
                </div>
                <div className="w-full">
                    <Input
                        label="New Password"
                        type={showPassword.newPassword ? "text" : "password"}
                        name="newPassword"
                        register={register("newPassword")}
                        bg={true}
                    />
                    {errors.newPassword && (
                        <InlineError error={errors.newPassword.message} />
                    )}
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility("newPassword")}
                        className="focus:outline-none mt-1 text-xs text-subMain"
                    >
                        {showPassword.newPassword ? "Hide" : "Show"} Password
                    </button>
                </div>
                <div className="w-full">
                    <Input
                        label="Confirm Password"
                        type={showPassword.confirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        register={register("confirmPassword")}
                        bg={true}
                    />
                    {errors.confirmPassword && (
                        <InlineError error={errors.confirmPassword.message} />
                    )}
                    <button
                        type="button"
                        onClick={() => togglePasswordVisibility("confirmPassword")}
                        className="focus:outline-none mt-1 text-xs text-subMain"
                    >
                        {showPassword.confirmPassword ? "Hide" : "Show"} Password
                    </button>
                </div>
                <div className="flex gap-2">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex max-w-fit items-center gap-4 bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                    >
                        {isLoading ? "Changing Password..." : "Change Password"}
                    </button>
                </div>
            </form>
        </SideBar>
    );
}

export default Password;