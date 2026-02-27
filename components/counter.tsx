"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter: {count}</CardTitle>
        <CardDescription>Interactive client component</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <Button onClick={() => setCount(count - 1)} variant="outline">Decrement</Button>
          <Button onClick={() => setCount(0)} variant="destructive">Reset</Button>
        </div>
        <p className="text-sm text-muted-foreground">
          This component demonstrates client-side state management.
        </p>
      </CardContent>
    </Card>
  )
}