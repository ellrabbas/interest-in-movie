import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Uploader from "../../Components/Uploader";
import { Input } from "../../Components/UserInputs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AccountValidationSchema } from "../../Components/Validation/UserValidation";
import { InlineError } from "../../Components/Notifications/Error";
import { ImagePreview } from "../../Components/ImagePreview";
import {
    deleteAccountAction,
    updateAccountAction,
} from "../../Redux/Actions/userActions";
import toast from "react-hot-toast";

const Account = () => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userLogin);
    const [imageURL, setImageURL] = useState(userInfo ? userInfo.image : "");
    const { isLoading, isError, isSuccess } = useSelector(
        (state) => state.userUpdateAccount
    );
    const { isLoading: deleteLoading, isError: deleteError } = useSelector(
        (state) => state.userDeleteAccount
    );

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(AccountValidationSchema),
    });

    const onSubmit = (data) => {
        dispatch(updateAccountAction({ ...data, image: imageURL }));
    };

    const deleteAccount = () => {
        window.confirm("Are you sure you want to delete this account?") &&
            dispatch(deleteAccountAction());
    };

    useEffect(() => {
        if (userInfo) {
            setValue("firstName", userInfo?.firstName);
            setValue("lastName", userInfo?.lastName);
            setValue("email", userInfo?.email);
            setValue("username", userInfo?.username);
        }
        if (isSuccess) {
            dispatch({ type: "USER_UPDATE_ACCOUNT_RESET" });
        }
        if (isError || deleteError) {
            toast.error(isError || deleteError);
            dispatch({ type: "USER_UPDATE_ACCOUNT_RESET" });
            dispatch({ type: "USER_DELETE_ACCOUNT_RESET" });
        }
    }, [userInfo, setValue, isError, isSuccess, dispatch, deleteError]);

    return (
        <SideBar>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="text-text flex flex-col gap-6"
            >
                <h2 className="text-xl font-bold">Account</h2>
                <div className="md:flex gap-5">
                    <Uploader
                        setImageURL={setImageURL}
                        width="w-[35%] md:w-[22%] lg:w-[18%] h-[170px]"
                        writing="Upload your image"
                    />
                    <ImagePreview
                        sizes="w-[13%] mt-7 md:mt-0 md:w-[8%] h-[100px] self-end"
                        image={imageURL}
                        name={userInfo ? userInfo.username : "Add photo"}
                    />
                </div>
                <div className="w-full">
                    <Input
                        label="Firstname"
                        type="text"
                        name="firstName"
                        register={register("firstName")}
                        bg={true}
                    />
                    {errors.firstName && <InlineError error={errors.firstName.message} />}
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
                <div className="flex gap-2">
                    <button
                        onClick={deleteAccount}
                        disabled={deleteLoading || isLoading}
                        className="max-w-fit text-center bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                    >
                        {deleteLoading ? "Deleting..." : "Delete Account"}
                    </button>
                    <button
                        disabled={deleteLoading || isLoading}
                        className="max-w-fit text-center bg-main border border-dry text-dry hover:bg-dry hover:text-main transitions px-4 py-3 rounded-md font-bold text-sm md:text-md"
                    >
                        {isLoading ? "Updating..." : "Update Account"}
                    </button>
                </div>
            </form>
        </SideBar>
    );
};

export default Account;