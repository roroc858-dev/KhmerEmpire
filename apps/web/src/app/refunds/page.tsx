import { StoreShell } from "@/app/components/store-shell";

export default function RefundPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-4xl px-4 py-16 text-slate-300">
        <h1 className="text-4xl font-black text-white">Refund policy</h1>
        <p className="mt-6">Refunds are evaluated case-by-case when a product was not delivered, was delivered incorrectly, or an administrator has confirmed a processing issue.</p>
      </main>
    </StoreShell>
  );
}
