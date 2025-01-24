import { CheckCircle2 } from 'lucide-react'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export default function Verify() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 bg-gradient-to-b from-background to-muted/20">
      <Card className="w-full max-w-md text-center border-2 shadow-lg animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
        <CardHeader className="space-y-6 pb-8">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100/80 p-4">
              <CheckCircle2 className="h-12 w-12 text-green-500 animate-in zoom-in-50 duration-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Check your inbox!
          </h1>
        </CardHeader>
        <CardContent className="space-y-6 pb-8">
          <p
            className={cn(
              'text-lg text-muted-foreground',
              'max-w-[80%] mx-auto'
            )}
          >
            We&apos;ve sent you an email to login.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Can&apos;t find the email? Be sure to check your spam folder.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
