export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-black tracking-tight text-brand-text">
          Zu<span className="text-teal-600">no</span>
        </h1>
        <p className="mt-3 text-brand-muted text-sm">
          Real prices. Live availability.
        </p>
        <div className="mt-8 inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse"></span>
          <span className="text-teal-700 text-xs font-medium">Coming soon to Hyderabad</span>
        </div>
      </div>
    </main>
  );
}
