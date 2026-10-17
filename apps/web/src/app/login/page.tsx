import { StoreShell } from "@/app/components/store-shell";

export default function LoginPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-md px-4 py-16">
        <div className="rounded-3xl border border-slate-700 bg-slate-900/70 p-8">
          <h1 className="text-3xl font-black text-white">Login</h1>
          <div className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="Email" />
            <input type="password" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white" placeholder="Password" />
            <button className="w-full rounded-full bg-amber-400 px-4 py-3 font-bold text-slate-900">Sign in</button>
          </div>
        </div>
      </main>
    </StoreShell>
  );
}
