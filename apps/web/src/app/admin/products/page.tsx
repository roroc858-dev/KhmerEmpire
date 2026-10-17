import { StoreShell } from "@/app/components/store-shell";

export default function AdminProductsPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Product management</h1>
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-6 text-slate-300">Protected admin product catalog and pricing configuration will live here.</div>
      </main>
    </StoreShell>
  );
}
