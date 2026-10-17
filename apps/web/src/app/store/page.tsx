import Link from "next/link";
import { StoreShell } from "@/app/components/store-shell";

const products = [
  { name: "VIP Rank", price: "$4.99", type: "Rank" },
  { name: "MVP Rank", price: "$9.99", type: "Rank" },
  { name: "Legend Rank", price: "$14.99", type: "Rank" },
  { name: "Vote Key", price: "$1.99", type: "Crate Key" },
  { name: "Rare Key", price: "$3.99", type: "Crate Key" },
  { name: "Legendary Key", price: "$5.99", type: "Crate Key" },
];

export default function StorePage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Store</p>
            <h1 className="mt-2 text-4xl font-black text-white">KhmerEmpire products</h1>
          </div>
          <Link href="/cart" className="rounded-full border border-amber-500/30 px-4 py-2 text-sm font-bold text-amber-300">Cart</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="rounded-3xl border border-slate-700 bg-slate-900/70 p-5">
              <div className="mb-4 h-36 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.35),_rgba(15,23,42,0.7))]" />
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-slate-600 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">{product.type}</span>
                <span className="text-2xl font-extrabold text-amber-300">{product.price}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-white">{product.name}</h2>
              <p className="mt-2 text-sm text-slate-400">Server-side delivery and secure admin review.</p>
              <Link href="/checkout" className="mt-5 inline-flex rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900">Buy now</Link>
            </article>
          ))}
        </div>
      </main>
    </StoreShell>
  );
}
