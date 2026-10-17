import { StoreShell } from "@/app/components/store-shell";

export default function AdminOrdersPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Order review</h1>
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-6 text-slate-300">Admin-only order queue and payment review interface.</div>
      </main>
    </StoreShell>
  );
}
