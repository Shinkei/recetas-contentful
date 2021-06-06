import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <a>
            <h1>
              <span>Recetas</span>
              <span>Shinkei</span>
            </h1>
            <h2>Muchas recetas</h2>
          </a>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Made with ❤️ by Shinkei</p>
      </footer>
    </div>
  )
}
