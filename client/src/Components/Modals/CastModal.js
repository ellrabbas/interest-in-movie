import React, { useEffect, useState } from "react";
import MainModal from "./MainModal";
import Uploader from "../Uploader";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
    addCastAction,
    updateCastAction,
} from "../../Redux/Actions/movieAction";
import toast from "react-hot-toast";
import { InlineError } from "../Notifications/Error";
import { ImagePreview } from "../ImagePreview";

function CastModal({ modalOpen, setModalOpen, cast }) {
    const dispatch = useDispatch();
    const [castImage, setCastImage] = useState("");
    const image = castImage ? castImage : cast?.image;

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(
            yup.object().shape({
                fullName: yup.string().required("Fullname is required"),
            })
        ),
    });

    const onSubmit = (data) => {
        if (cast) {
            dispatch(
                updateCastAction({
                    ...data,
                    image: image,
                })
            );
            toast.success("Cast updated successfully");
        } else {
            dispatch(
                addCastAction({
                    ...data,
                    image: image,
                })
            );
            toast.success("Cast added successfully");
        }
        reset();
        setCastImage("");
        setModalOpen(false);
    };

    useEffect(() => {
        if (cast) {
            setValue("fullName", cast?.name);
        }
    }, [cast, setValue]);

    return (
        <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
            <div className="border making-shadow bg-gray-50 inline-block w-full align-middle px-10 py-6 overflow-y-auto h-full rounded-2xl">
                <h2 className="text-2xl font-bold text-center">
                    {cast ? "Update" : "Create"}
                </h2>
                <div className="flex flex-col items-start gap-2">
                    <div className="w-full">
                        <label>Cast name</label>
                        <input
                            placeholder={cast ? cast?.fullName : ""}
                            type="text"
                            name="fullName"
                            {...register("fullName")}
                            className="w-full font-semibold placeholder:text-text bg-dryGray rounded-md shadow-md py-2 px-3"
                        />
                        {errors.fullName && <InlineError error={errors.fullName.message} />}
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-lighter text-sm md:text-lg">Cast Image</p>
                        <Uploader
                            width="w-full h-[170px]"
                            writing="Upload cast image"
                            setImageURL={setCastImage}
                        />
                        <ImagePreview
                            sizes="mt-5 md:mt-0 w-[25%] h-[70px]"
                            image={image ? image : "/images/cast.png"}
                            name="castImage"
                        />
                    </div>
                    <button
                        onClick={handleSubmit(onSubmit)}
                        className="self-center max-w-fit bg-dry text-main px-4 py-3 mt-2 transitions rounded-md font-bold text-sm md:text-md"
                    >
                        {cast ? "Edit" : "Add"}
                    </button>
                </div>
            </div>
        </MainModal>
    );
}

export default CastModal;
