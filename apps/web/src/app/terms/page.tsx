import { StoreShell } from "@/app/components/store-shell";

export default function TermsPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-4xl px-4 py-16 text-slate-300">
        <h1 className="text-4xl font-black text-white">Terms of service</h1>
        <p className="mt-6">Products are sold for a single server environment and must be used in accordance with server rules and account ownership requirements.</p>
      </main>
    </StoreShell>
  );
}
