export default function TransAction({ transActions, filtered, selected }) {
    return (
        <section>
            {selected.length === 0
                ? transActions.map((t, key) => {
                      const amountValue = t.amount;
                      return (
                          <article
                              className={` mt-4 flex items-center justify-between rounded-lg py-4 px-2 font-black ${
                                  t.type === "expense"
                                      ? "bg-rose-100 text-rose-500"
                                      : "bg-emerald-100 text-emerald-500"
                              }`}
                              key={key}
                          >
                              <p>{t.desc}</p>
                              <p className="font-serif text-lg font-bold">
                                  {amountValue.toLocaleString()}
                              </p>
                          </article>
                      );
                  })
                : filtered.map((t, key) => {
                      return (
                          <article
                              className={` mt-4 flex items-center justify-between rounded-lg py-4 px-2 font-black ${
                                  t.type === "expense"
                                      ? "bg-rose-100 text-rose-500"
                                      : "bg-emerald-100 text-emerald-500"
                              }`}
                              key={key}
                          >
                              <p>{t.desc}</p>
                              <p className="font-serif text-lg font-bold">
                                  {t.amount.toLocaleString()}
                              </p>
                          </article>
                      );
                  })}
        </section>
    );
}
