import { StoreShell } from "@/app/components/store-shell";

export default function CheckoutPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Checkout</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
            <h2 className="text-xl font-bold text-white">Order summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <span className="text-slate-300">VIP Rank</span>
                <span className="text-white">$4.99</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <span className="text-slate-300">Legendary Key</span>
                <span className="text-white">$5.99</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
            <h2 className="text-xl font-bold text-white">Payment</h2>
            <p className="mt-3 text-sm text-slate-400">Manual payment review required. Transfer funds, then submit your payment reference.</p>
            <button className="mt-6 w-full rounded-full bg-amber-400 px-4 py-3 font-bold text-slate-900">Submit order</button>
          </div>
        </div>
      </main>
    </StoreShell>
  );
}
