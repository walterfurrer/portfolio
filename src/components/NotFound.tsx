import { Link } from "@tanstack/react-router"

import mountainLake from "../assets/painterly-mountain-lake.jpg"
import "./NotFound.css"

export function NotFound() {
  return (
    <main className="not-found">
      <img aria-hidden="true" alt="" className="not-found__background" src={mountainLake} />
      <div aria-hidden="true" className="not-found__overlay" />

      <section className="not-found__panel" aria-labelledby="not-found-title">
        <p className="not-found__label">404 · A happy little accident</p>
        <h1 id="not-found-title">Looks like this page took an unexpected turn.</h1>
        <p className="not-found__body">
          No worries—that’s just a happy little accident. The page you’re looking for isn’t here,
          but we can make a fresh start. Let’s head back home and try again.
        </p>
        <Link className="not-found__link" to="/">
          Take me back home
        </Link>
      </section>
    </main>
  )
}
