import * as yup from "yup";

const LoginValidationSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required")
        .min(5, "Username must be at least 5 characters long")
        .max(25, "Username cannot be more than 25 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Username can only contain letters, numbers, underscores, and hyphens"
        ),
    password: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(20, "Password cannot be more than 20 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Password can only contain letters, numbers, underscores, and hyphens"
        ),
});

const RegisterValidationSchema = yup.object().shape({
    firstName: yup
        .string()
        .required("Firstname is required")
        .max(30, "Firstname cannot be more than 30 characters")
        .matches(/^[a-zA-Z]*$/, "Firstname can only contain letters")
        .trim(),
    lastName: yup
        .string()
        .required("Lastname is required")
        .max(30, "Lastname cannot be more than 30 characters")
        .matches(/^[a-zA-Z]*$/, "Lastname can only contain letters")
        .trim(),
    email: yup.string().email().required("Email is required").trim(),
    username: yup
        .string()
        .trim()
        .required("Username is required")
        .min(5, "Username must be at least 5 characters long")
        .max(25, "Username cannot be more than 25 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Username can only contain letters, numbers, underscores, and hyphens"
        ),
    password: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(20, "Password cannot be more than 20 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Password can only contain letters, numbers, underscores, and hyphens"
        ),
});

const AccountValidationSchema = yup.object().shape({
    firstName: yup
        .string()
        .max(30, "Firstname cannot be more than 30 characters")
        .matches(/^[a-zA-Z]*$/, "Firstname can only contain letters")
        .trim(),
    lastName: yup
        .string()
        .max(30, "Lastname cannot be more than 30 characters")
        .matches(/^[a-zA-Z]*$/, "Lastname can only contain letters")
        .trim(),
    email: yup.string().email().trim(),
    username: yup
        .string()
        .trim()
        .min(5, "Username must be at least 5 characters long")
        .max(25, "Username cannot be more than 25 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Username can only contain letters, numbers, underscores, and hyphens"
        ),
});

const PasswordValidationSchema = yup.object().shape({
    oldPassword: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(20, "Password cannot be more than 20 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Password can only contain letters, numbers, underscores, and hyphens"
        ),
    newPassword: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(20, "Password cannot be more than 20 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Password can only contain letters, numbers, underscores, and hyphens"
        ),
    confirmPassword: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(20, "Password cannot be more than 20 characters")
        .matches(
            /^[a-zA-Z0-9_!-]+$/,
            "Password can only contain letters, numbers, underscores, and hyphens"
        )
        .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

export {
    LoginValidationSchema,
    RegisterValidationSchema,
    AccountValidationSchema,
    PasswordValidationSchema,
};
