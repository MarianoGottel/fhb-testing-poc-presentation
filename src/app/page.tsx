import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A0A0A] text-white">
      <h1 className="mb-8 text-4xl font-bold">Project Aurora Presentations</h1>
      <div className="flex flex-col gap-4">
        <Link
          href="/presentation"
          className="rounded-lg bg-[#66B2FF] px-8 py-4 text-xl font-semibold text-white transition-all hover:bg-[#66B2FF]/80"
        >
          Engineering All Hands - June 5, 2025
        </Link>
        <Link
          href="/presentation/presenter"
          className="rounded-lg border border-white/20 px-8 py-4 text-center text-lg text-white/80 transition-all hover:border-white/40 hover:text-white"
        >
          Presenter View
        </Link>
        <Link
          href="/presentation/fallback"
          className="text-center text-sm text-white/60 hover:text-white/80"
        >
          Static Fallback Version
        </Link>
      </div>
    </div>
  )
}
