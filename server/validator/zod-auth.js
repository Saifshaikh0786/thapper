const { z } = require("zod");

const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 characters" })
        .max(255, { message: "Name must be a maximum of 255 characters" }),

    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least 3 characters" })
        .max(255, { message: "Email length must be a maximum of 255 characters" }),

    phone: z
        .string({ required_error: "Phone number is required" })
        .trim()
        .min(10, { message: "Phone number must be exactly 10 characters" })
        .max(10, { message: "Phone number must be exactly 10 characters" }),

    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(7, { message: "Password can't be less than 7 characters" })
        .max(1024, { message: "Password cannot be greater than 1024 characters" }),
});

module.exports = signupSchema;
