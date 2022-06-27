//? Required
import { useState, useEffect } from "react";
import Select from "react-select";

//? icons
import WalletIcon from "../ui/WalletIcon";

//? Components
import TransAction from "./TransAction";
import OverView from "./OverView";
import TotalCard from "./TotalCard";
import TransActionForm from "./TransActionForm";

//? Comp
export default function ExpenseApp() {
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [transActions, setTransActions] = useState([]);
    const [isShow, setIsShow] = useState(false);
    function addTransAction(formValues) {
        setTransActions([...transActions, { ...formValues, id: Date.now() }]);
    }
    useEffect(() => {
        let exp = 0;
        let inc = 0;
        transActions.forEach((t) => {
            t.type === "expense"
                ? (exp = exp + parseFloat(t.amount))
                : (inc = inc + parseFloat(t.amount));
        });
        setExpense(exp);
        setIncome(inc);
    }, [transActions]);
    const [selected, setSelected] = useState([]);
    function setData(newSelect) {
        setSelected(newSelect);
    }
    const filteredData = selected.map((filteredItem) => {
        return filteredItem.value;
    });
    const filteredX = transActions.filter((item) =>
        filteredData.includes(item.type)
    );
    const selectOptions = [
        { value: "expense", label: "هزینه‌ها" },
        { value: "income", label: "دریافتی‌ها" },
    ];
    return (
        <>
            <TotalCard expense={expense} income={income} />
            <section
                className="
                relative z-20 flex min-h-[500px] w-full max-w-sm flex-col rounded-lg 
                border bg-white/70 p-3 backdrop-blur-lg backdrop-saturate-200"
            >
                <OverView
                    expense={expense}
                    income={income}
                    addTransAction={addTransAction}
                />
                {/* filter and search */}
                <div className="mt-10 flex w-full max-w-sm items-center justify-center gap-x-2">
                    <Select
                        value={selected}
                        onChange={setData}
                        options={selectOptions}
                        className="w-full cursor-pointer text-sky-500"
                        placeholder="فیلتر"
                        instanceId={"thisIsKey"}
                        closeMenuOnSelect={false}
                        isMulti
                    />
                </div>
                <TransAction
                    transActions={transActions}
                    filtered={filteredX}
                    selected={selected}
                />
                <TransActionForm
                    addTransAction={addTransAction}
                    setIsShow={setIsShow}
                    isShow={isShow}
                />
                <button
                    onClick={() => setIsShow((prev) => !prev)}
                    className="WalletShadow absolute -bottom-5 right-1/2 w-fit translate-x-1/2 rounded-full bg-white p-2"
                >
                    <WalletIcon />
                </button>
            </section>
        </>
    );
}
