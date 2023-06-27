import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Dynamic = () => {
  const router = useRouter()
  const id = router.query.id
  console.log(id)
  return (
    <Box>
      <Text>{id}</Text>
    </Box>
  )
}

export default Dynamic
