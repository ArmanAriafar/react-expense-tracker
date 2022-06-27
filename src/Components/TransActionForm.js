//? Required
import { useState } from "react";
import { motion } from "framer-motion";

//? Icons
import PlusSmIcon from "@heroicons/react/solid/PlusSmIcon";

//? FormComp
export default function TransActionForm({ addTransAction, setIsShow, isShow }) {
    const FormVars = {
        close: {
            display: "none",
            opacity: 0,
            bottom: -50,
            transition: {
                display: {
                    delay: 1,
                },
            },
        },
        open: {
            display: "inline",
            opacity: 1,
            bottom: 20,
        },
    };
    const [formValues, setFormValues] = useState({
        type: "expense",
        amount: "",
        desc: "",
    });
    function changeHandler(e) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }
    function ON_SUBMIT(e) {
        e.preventDefault();
        addTransAction(formValues);
        setIsShow((prev) => !prev);
    }
    return (
        <motion.form
            variants={FormVars}
            animate={isShow ? "open" : "close"}
            onSubmit={ON_SUBMIT}
            className="absolute right-1/2 h-1/2 w-[90%] translate-x-1/2 rounded-xl bg-white px-4 pt-4 shadow-lg"
        >
            <input
                type="text"
                name="desc"
                placeholder="عنوان"
                value={formValues.desc}
                onChange={changeHandler}
                className="input input-bordered input-info input-md w-full text-sky-500"
            />
            <div
                className="
                mt-4 grid w-full grid-cols-[10%_90%] items-center justify-items-center rounded-lg border 
                border-blue-300 py-3 px-4 font-serif text-2xl text-sky-500 duration-200 focus:bg-sky-50"
            >
                <span className="text-sm font-bold text-sky-400">tm</span>
                <input
                    type="number"
                    name="amount"
                    dir="ltr"
                    placeholder="100,000"
                    value={formValues.amount}
                    onChange={changeHandler}
                    className="h-full w-full outline-none"
                />
            </div>
            <div className="my-4 flex items-center justify-evenly">
                <div className="flex items-center gap-x-1 font-bold text-rose-500">
                    <input
                        type="radio"
                        name="type"
                        id="expense"
                        value="expense"
                        checked={formValues.type === "expense"}
                        onChange={changeHandler}
                        className="radio radio-primary radio-sm"
                    />
                    <label htmlFor="expense">هزینه</label>
                </div>
                <div className="flex items-center gap-x-1 font-bold text-emerald-500">
                    <input
                        type="radio"
                        name="type"
                        id="income"
                        value="income"
                        checked={formValues.type === "income"}
                        onChange={changeHandler}
                        className="radio radio-secondary radio-sm"
                    />
                    <label htmlFor="income">دریافتی</label>
                </div>
            </div>
            <button
                type="submit"
                className="my-2 flex w-full items-center justify-center rounded-lg bg-sky-50 py-2.5 font-extrabold text-sky-500"
            >
                <PlusSmIcon
                    style={{ width: "1.2rem", transform: "translateY(-1px)" }}
                />
                افزودن
            </button>
        </motion.form>
    );
}
