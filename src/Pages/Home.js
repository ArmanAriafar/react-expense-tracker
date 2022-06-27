//? Components
import ExpenseApp from "../Components/ExpenseApp";

//? Comp
export default function HomePage() {
    return (
        <header className="flex min-h-screen w-full flex-col items-center justify-start bg-zinc-100 px-1 select-none">
            <h2 className="pt-5 pb-12 text-[2rem] font-extralight text-zinc-400">
                هزیــــــــــــــــــــــــــــــنه‌های من
            </h2>
            <ExpenseApp />
        </header>
    );
}
