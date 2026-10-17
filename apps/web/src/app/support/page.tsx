import { StoreShell } from "@/app/components/store-shell";

export default function SupportPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Support</h1>
        <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900/70 p-6 text-slate-300">
          Contact the KhmerEmpire team through the in-game support channel or the official support email. Manual payment review and delivery issues are handled by administrators only.
        </div>
      </main>
    </StoreShell>
  );
}
