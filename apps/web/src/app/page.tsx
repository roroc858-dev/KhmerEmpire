import Link from "next/link";
import { StoreShell } from "@/app/components/store-shell";

const featuredProducts = [
  { name: "VIP Rank", price: "$4.99", tag: "30 Days" },
  { name: "MVP Rank", price: "$9.99", tag: "30 Days" },
  { name: "Legend Rank", price: "$14.99", tag: "Permanent" },
];

export default function HomePage() {
  return (
    <StoreShell>
      <main>
        <section className="relative overflow-hidden border-b border-amber-500/20 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),_transparent_30%),linear-gradient(135deg,#070c17_0%,#0b1220_35%,#070c17_100%)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Play • Buy • Become legendary</p>
              <h1 className="max-w-2xl text-5xl font-black tracking-tight text-white md:text-7xl">KhmerEmpire</h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">Buy premium ranks, crate keys, and server access with secure manual payment review and automatic delivery after admin approval.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/store" className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900 shadow-[0_0_30px_rgba(245,158,11,0.45)]">Visit Store</Link>
                <Link href="/status" className="rounded-full border border-slate-600 px-6 py-3 font-bold text-slate-100">Server Status</Link>
              </div>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-slate-900/70 p-6 shadow-[0_0_40px_rgba(245,158,11,0.12)]">
              <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-[#0d1726] to-[#111827] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Featured</span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-bold text-emerald-300">Live</span>
                </div>
                <div className="space-y-4">
                  {featuredProducts.map((product, index) => (
                    <div key={product.name} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950/60 p-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{index === 0 ? "VIP" : index === 1 ? "MVP" : "LEGEND"}</div>
                        <div className="mt-1 font-bold text-white">{product.name}</div>
                        <div className="text-xs text-slate-400">{product.tag}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-extrabold text-amber-300">{product.price}</div>
                        <button className="mt-2 rounded-full bg-amber-400 px-3 py-1.5 text-xs font-bold text-slate-900">Buy Now</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">Featured products</p>
              <h2 className="mt-2 text-3xl font-black text-white">Ranks and crates</h2>
            </div>
            <Link href="/store" className="text-sm font-semibold text-amber-300">View all →</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <article key={product.name} className="rounded-3xl border border-slate-700 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/30">
                <div className="mb-4 h-32 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.35),_rgba(15,23,42,0.8))]" />
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-1 text-xs font-bold text-amber-300">{product.tag}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">Secure rank access, priority queue, and enhanced server perks.</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-amber-300">{product.price}</span>
                  <Link href="/store" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900">Add to cart</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </StoreShell>
  );
}
