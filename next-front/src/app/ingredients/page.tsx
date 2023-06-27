import { createClient } from 'microcms-js-sdk'
import dayjs from 'dayjs'
import Image from 'next/image'

async function getContents() {
  const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ? process.env.MICROCMS_SERVICE_DOMAIN : '',
    apiKey: process.env.MICROCMS_API_KEY ? process.env.MICROCMS_API_KEY : ''
  })

  const response = await client.getList({
    customRequestInit: {
      cache: 'default'
    },
    endpoint: 'ingredients'
  })
  return response.contents
}

export default async function Home() {
  const contents = await getContents()
  return (
    <ul style={{ textAlign: 'center', marginTop: 20 }}>
      {contents.map((item) => {
        return (
          <li key={item.id} style={{ textAlign: 'center' }}>
            【食材名】{item.ingredients_name}
            【種類】{item.ingredients_type}
            【画像】
            {item.ingredients_image && (
              <Image
                alt={'食材の画像'}
                src={item.ingredients_image.url}
                width={item.ingredients_image.width}
                height={item.ingredients_image.height}
                style={{ margin: 'auto', display: 'block' }}
              />
            )}
            【登録日時】{dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}
          </li>
        )
      })}
    </ul>
  )
}
