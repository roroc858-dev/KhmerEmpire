import { StoreShell } from "@/app/components/store-shell";

export default function PaymentPage({ params }: { params: { orderId: string } }) {
  return (
    <StoreShell>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Payment for #{params.orderId}</h1>
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-6">
          <p className="text-slate-300">Send payment using the bank or e-wallet details in the admin settings. Include the exact order number in your transfer reference.</p>
          <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 text-amber-200">Transfer reference required before admin approval.</div>
        </div>
      </main>
    </StoreShell>
  );
}
