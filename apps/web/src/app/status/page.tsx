import { StoreShell } from "@/app/components/store-shell";

export default function StatusPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">Server status</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">Website</p>
            <h2 className="mt-3 text-3xl font-black text-white">Online</h2>
          </div>
          <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300">Minecraft</p>
            <h2 className="mt-3 text-3xl font-black text-white">Connected</h2>
          </div>
          <div className="rounded-3xl border border-sky-500/30 bg-sky-500/5 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-sky-300">Players</p>
            <h2 className="mt-3 text-3xl font-black text-white">42</h2>
          </div>
        </div>
      </main>
    </StoreShell>
  );
}
