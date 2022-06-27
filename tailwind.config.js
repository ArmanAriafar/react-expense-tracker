module.exports = {
    content: ["./src/**/*.js"],
    theme: {
        fontFamily: {
            sans: "IRANYekan",
            serif: "IRANYekanFaNum",
        },
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#f43f5e",
                    secondary: "#10b981",
                    info: "#0ea5e9",
                },
            },
        ],
    },
};
