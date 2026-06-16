import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
          <div className="mx-auto max-w-3xl rounded-3xl border border-red-200 bg-white p-8 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-700">Portfolio runtime error</p>
            <h1 className="mt-3 text-3xl font-semibold">The page hit a JavaScript error.</h1>
            <p className="mt-4 leading-7 text-slate-600">
              This fallback is here so the page does not become a blank white screen while we debug.
            </p>
            <pre className="mt-6 overflow-auto rounded-2xl bg-slate-950 p-4 text-sm text-slate-100">
              {String(this.state.error?.message || this.state.error)}
            </pre>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
