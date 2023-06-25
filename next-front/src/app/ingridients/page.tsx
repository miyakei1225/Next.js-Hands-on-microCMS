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
    <ul>
      {contents.map((item) => {
        return (
          <li key={item.id}>
            {item.ingredients_name}
            {item.ingredients_type}
            {item.ingredients_image && (
              <Image
                alt={'食材の画像'}
                src={item.ingredients_image.url}
                width={item.ingredients_image.width}
                height={item.ingredients_image.height}
              />
            )}
            {dayjs(item.createdAt).format('YYYY-MM-DD HH:mm:ss')}
          </li>
        )
      })}
    </ul>
  )
}
