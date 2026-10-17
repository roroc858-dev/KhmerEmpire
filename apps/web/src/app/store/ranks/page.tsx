import { StoreShell } from "@/app/components/store-shell";

const ranks = [
  { name: "VIP", price: "$4.99", duration: "30 days" },
  { name: "MVP", price: "$9.99", duration: "30 days" },
  { name: "Legend", price: "$14.99", duration: "Permanent" },
];

export default function RankStorePage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Rank products</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {ranks.map((rank) => (
            <div key={rank.name} className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Rank</p>
              <h2 className="mt-4 text-3xl font-black text-white">{rank.name}</h2>
              <p className="mt-2 text-slate-400">{rank.duration}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-2xl font-extrabold text-amber-300">{rank.price}</span>
                <button className="rounded-full bg-amber-400 px-4 py-2 font-bold text-slate-900">Add</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </StoreShell>
  );
}
