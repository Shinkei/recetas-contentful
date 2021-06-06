import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotFound() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Opps1 esa pagina no existe 😭</h2>
      <p>
        Redirijiento a <Link href='/'> Pagina de Inicio</Link>
      </p>
      <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  )
}

export default NotFound
