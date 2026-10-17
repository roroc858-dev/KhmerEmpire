import { StoreShell } from "@/app/components/store-shell";

export default function FAQPage() {
  return (
    <StoreShell>
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-4xl font-black text-white">FAQ</h1>
        <div className="mt-8 space-y-4">
          {[
            "How do I buy a rank?",
            "What happens after payment approval?",
            "How do I link my Minecraft account?",
          ].map((question) => (
            <div key={question} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5">
              <h2 className="text-lg font-bold text-white">{question}</h2>
              <p className="mt-2 text-slate-400">Your purchase is reviewed manually and the server delivers the product only after admin approval.</p>
            </div>
          ))}
        </div>
      </main>
    </StoreShell>
  );
}
