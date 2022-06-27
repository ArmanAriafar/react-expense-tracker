export default function OverView({ income, expense }) {
    return (
        <>
            <div className="flex w-full items-center justify-between gap-x-2">
                <div className="BgRed flex w-full flex-col gap-y-4 rounded-lg px-2 py-1 text-lg font-black text-white">
                    هزینه{" "}
                    <span className="self-end font-serif text-2xl font-bold text-red-500">
                        <span className="font-sans text-xs font-light text-red-600">
                            تومان
                        </span>{" "}
                        {expense.toLocaleString()}
                    </span>
                </div>
                <div className="BgGreen flex w-full flex-col gap-y-4 rounded-lg px-2 py-1 text-lg font-black text-white">
                    دریافتی{" "}
                    <span className="self-end font-serif text-2xl font-bold text-green-500">
                        <span className="font-sans text-xs font-light text-green-600">
                            تومان
                        </span>{" "}
                        {income.toLocaleString()}
                    </span>
                </div>
            </div>
        </>
    );
}
