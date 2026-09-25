import { Link, useLocation } from 'react-router-dom'
import { ROUTES, SECTIONS } from '../config/site'

/**
 * Site nav. Markup mirrors the source 1:1 so the global stylesheet applies unchanged.
 *
 * The source's two pages actually have two DIFFERENT nav CTAs, not one shared nav:
 *  - index.html: "Try Demo" -> demo.html, plain .btn-black
 *  - demo.html:  "Book a Call" -> index.html#contact, .btn-black.btn-sm (smaller)
 * This component renders whichever one matches the current route.
 *
 * SECTIONS are in-page anchors on Home; from any other route (demo) they need to navigate back to
 * "/" first, so every link goes through react-router's <Link> to "/#id".
 * Scroll-shadow + mobile toggle + smooth-anchor-scroll behaviour lives in src/interactions (owned
 * by the interactions layer) — this component only renders the markup it attaches to.
 */
export default function Navbar() {
  const onDemo = useLocation().pathname === ROUTES.demo

  return (
    <header className={onDemo ? 'nav nav--demo' : 'nav'} id="nav">
      <div className="nav-inner">
        <Link to={`${ROUTES.home}#top`} className="logo" aria-label="LeaseOps home">
          <img src="/Logo.png" alt="LeaseOps" />
        </Link>
        <nav className="nav-links" id="navLinks">
          {SECTIONS.map((s) => (
            <Link key={s.id} to={`${ROUTES.home}#${s.id}`}>
              {s.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          {onDemo ? (
            <Link to={`${ROUTES.home}#contact`} className="btn btn-black btn-sm">
              Book a Call
            </Link>
          ) : (
            <Link to={ROUTES.demo} className="btn btn-black">
              Try Demo
            </Link>
          )}
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
