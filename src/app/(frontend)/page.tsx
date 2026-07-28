import { getPayload } from 'payload'
import config from '@payload-config'
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
    },
    limit: 1,
  })

  const page = result.docs[0]

  if (!page) {
  return <main>Страница "home" ещё не создана в админке.</main>
}

  return (
  <main>
    <h1>{page.title}</h1>
    <RichText data={page.content} />
  </main>
)
}