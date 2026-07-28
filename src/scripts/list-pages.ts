import { getPayload } from 'payload'
import config from '@payload-config'

// Достаём обычный текст из Lexical JSON-дерева
function extractText(node: any): string {
  if (!node) return ''

  if (node.type === 'text') {
    return node.text || ''
  }

  if (Array.isArray(node.children)) {
    const childText = node.children.map(extractText).join('')
    // paragraph/heading — каждый превращаем в отдельную строку
    if (node.type === 'paragraph' || node.type === 'heading' || node.type === 'listitem') {
      return childText + '\n'
    }
    return childText
  }

  return ''
}

async function run() {
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 100,
  })

  for (const page of result.docs) {
    console.log('='.repeat(50))
    console.log(`TITLE: ${page.title}`)
    console.log(`SLUG:  ${page.slug}`)
    console.log('-'.repeat(50))
    const text = extractText(page.content?.root)
    console.log(text.trim())
    console.log()
  }

  process.exit(0)
}

run()