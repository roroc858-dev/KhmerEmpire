import { StoreShell } from "@/app/components/store-shell";

export default function AdminPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Admin dashboard</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6"><p className="text-xs uppercase tracking-[0.25em] text-amber-300">Orders</p><h2 className="mt-3 text-3xl font-black text-white">124</h2></div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6"><p className="text-xs uppercase tracking-[0.25em] text-amber-300">Revenue</p><h2 className="mt-3 text-3xl font-black text-white">$2,304</h2></div>
          <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-6"><p className="text-xs uppercase tracking-[0.25em] text-amber-300">Pending</p><h2 className="mt-3 text-3xl font-black text-white">7</h2></div>
        </div>
      </main>
    </StoreShell>
  );
}
