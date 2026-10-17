import { StoreShell } from "@/app/components/store-shell";

const keys = [
  { name: "Vote Key", price: "$1.99" },
  { name: "Rare Key", price: "$3.99" },
  { name: "Legendary Key", price: "$5.99" },
];

export default function KeyStorePage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Crate keys</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {keys.map((key) => (
            <div key={key.name} className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Crate</p>
              <h2 className="mt-4 text-2xl font-black text-white">{key.name}</h2>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-amber-300">{key.price}</span>
                <button className="rounded-full bg-amber-400 px-4 py-2 font-bold text-slate-900">Add</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </StoreShell>
  );
}
