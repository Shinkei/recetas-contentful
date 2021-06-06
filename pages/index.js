import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export async function getStaticProps() {
  const clients = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const response = await clients.getEntries({
    content_type: 'receta',
  })

  return {
    props: { recetas: response.items },
    revalidate: 10, // Incremental Static Regeneration : representa en segundos cada cuanto next deve revisar por actualizaciones
  }
}

export default function Recipes({ recetas }) {
  return (
    <div className='recipe-list'>
      {recetas.map((receta) => (
        <RecipeCard key={receta.sys.id} recipe={receta} />
      ))}
      <style jsx>
        {`
          .recipe-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px 60px;
          }
        `}
      </style>
    </div>
  )
}
