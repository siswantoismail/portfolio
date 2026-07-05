function GithubSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl border border-slate-800 p-10">
        <h2 className="text-3xl font-bold">GitHub Activity</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-4xl font-bold text-blue-500">150+</h3>
            <p>Commits</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">20+</h3>
            <p>Repositories</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-500">10+</h3>
            <p>Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GithubSection;
