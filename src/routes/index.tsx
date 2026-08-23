import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <>
      <header className="site-header">
        <div className="site-shell">
          <a className="wordmark" href="/">
            Walter Furrer
          </a>
        </div>
      </header>
      <main className="site-shell hero">
        <h1 className="hero-title">Walter Furrer</h1>
        <p className="lead">Software Engineer @ Lights Over Atlanta</p>
      </main>
    </>
  )
}
