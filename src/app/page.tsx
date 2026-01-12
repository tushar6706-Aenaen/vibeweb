import React from 'react'
import prisma from '@/lib/db'
const page = async () => {

  const posts = await prisma.post.findMany();
  return (
    <div className=''>
      {JSON.stringify(posts,null,2)}
    </div>
  )
}

export default page
