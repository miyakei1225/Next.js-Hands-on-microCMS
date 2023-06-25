import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  console.log(params)
  return <div>Blog ID:{params.id}</div>
}

export default Page
