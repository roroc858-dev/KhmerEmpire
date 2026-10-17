import Link from "next/link";

export function StoreShell({ children }:{children: React.ReactNode}) {
  return (
    <div className="min-h-screen bg-[#070c17] text-slate-100">
      <header className="border-b border-amber-500/30 bg-[#090f1a]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-2xl font-black tracking-tight text-amber-400">KhmerEmpire</Link>
          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="/store" className="text-slate-200 hover:text-amber-300">Store</Link>
            <Link href="/store/ranks" className="text-slate-200 hover:text-amber-300">Ranks</Link>
            <Link href="/store/keys" className="text-slate-200 hover:text-amber-300">Keys</Link>
            <Link href="/status" className="text-slate-200 hover:text-amber-300">Status</Link>
            <Link href="/faq" className="text-slate-200 hover:text-amber-300">FAQ</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/cart" className="rounded-full border border-amber-500/40 px-4 py-2 text-sm font-semibold text-amber-300">Cart</Link>
            <Link href="/login" className="rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-slate-900">Login</Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-amber-500/20 bg-[#090f1a]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
          <div>
            <h3 className="mb-3 font-bold text-amber-300">KhmerEmpire</h3>
            <p className="text-sm text-slate-400">Minecraft ranks, keys, and admin-controlled delivery.</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Store</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="/store/ranks">Ranks</Link>
              <Link href="/store/keys">Crate Keys</Link>
              <Link href="/status">Server Status</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="/support">Support</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Policy</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <Link href="/privacy">Privacy</Link>
              <Link href="/refunds">Refunds</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
