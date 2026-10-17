import { StoreShell } from "@/app/components/store-shell";

export default function PrivacyPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-4xl px-4 py-16 text-slate-300">
        <h1 className="text-4xl font-black text-white">Privacy policy</h1>
        <p className="mt-6">KhmerEmpire stores only the minimum user and payment metadata required to verify ownership, process orders, and review manual payment evidence.</p>
      </main>
    </StoreShell>
  );
}
