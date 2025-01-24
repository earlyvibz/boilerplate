'use client'

import { signOut, useSession } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export default function Dashboard() {
  const { data: session } = useSession()

  return (
    <div>
      Dashboard
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  )
}
