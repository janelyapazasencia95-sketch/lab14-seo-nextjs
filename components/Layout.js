import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <Link href="/" className="logo">SEO<span>Lab.</span></Link>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </header>
      {children}
      <footer>
        <p>SEO Lab — Laboratorio 14 | Next.js</p>
      </footer>
    </>
  );
}
