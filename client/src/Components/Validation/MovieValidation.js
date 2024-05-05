import * as yup from "yup";

const ReviewValidation = yup.object().shape({
    comment: yup.string().required("Comment is required"),
    rating: yup.number().required("Select a rating"),
});

const MovieValidation = yup.object().shape({
    name: yup
        .string()
        .required("Please, enter a movie name")
        .max(150, "Movie name must be less than 150 characters"),
    time: yup
        .number()
        .typeError("Time must be number")
        .positive()
        .required("Please, enter a movie duration"),
    category: yup.string().required("Please, select a movie category"),
    language: yup
        .string()
        .transform((value, originalValue) => {
            return typeof value === "string"
                ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
                : value;
        })
        .required("Please select a movie language"),
    rate: yup
        .number()
        .typeError("Rate must be number")
        .positive()
        .required("Please, enter a movie rating"),
    year: yup
        .number()
        .typeError("Year must be number")
        .positive()
        .required("Please, enter a movie release year"),
    desc: yup
        .string()
        .required("Please, enter a movie description")
        .max(700, "Movie description must be less than 700 characters"),
});

export { ReviewValidation, MovieValidation };
