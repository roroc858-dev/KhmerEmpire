import Link from "next/link";
import { StoreShell } from "@/app/components/store-shell";

export default function CartPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Your cart</h1>
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between border-b border-slate-700 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white">VIP Rank</h2>
              <p className="text-sm text-slate-400">30-day access</p>
            </div>
            <div className="font-bold text-amber-300">$4.99</div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-lg font-bold text-white">Total</span>
            <span className="text-2xl font-extrabold text-amber-300">$4.99</span>
          </div>
          <Link href="/checkout" className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-900">Proceed to checkout</Link>
        </div>
      </main>
    </StoreShell>
  );
}
