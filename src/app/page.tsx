import { trpc, getQueryClient } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import Client from "./client"
import { Suspense } from "react"



const page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text: "Explain the theory of relativity in simple terms."}))
  return (  
    <HydrationBoundary state={dehydrate(queryClient)}>
    <div className='bg-black text-white'>
      <Suspense fallback={<div>Loading...</div>}>
      <Client/>
      </Suspense>
    </div>
    </HydrationBoundary>
  )
}

export default page
