"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Loader2 } from 'lucide-react'

interface ApiStatusData {
  status: string
  timestamp: string
  version: string
  features: string[]
}

export default function ApiStatus() {
  const [data, setData] = useState<ApiStatusData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('/api/status')
        if (!response.ok) {
          throw new Error('Failed to fetch API status')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchStatus()
    const interval = setInterval(fetchStatus, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          API Status
          {data && (
            <Badge variant={data.status === 'healthy' ? 'default' : 'destructive'}>
              {data.status}
            </Badge>
          )}
        </CardTitle>
        <CardDescription>Backend API integration status</CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading API status...</span>
          </div>
        ) : error ? (
          <div className="text-destructive">{error}</div>
        ) : data ? (
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">Version:</span> {data.version}
            </div>
            <div className="text-sm">
              <span className="font-medium">Last checked:</span>{' '}
              {new Date(data.timestamp).toLocaleTimeString()}
            </div>
            <div className="text-sm">
              <span className="font-medium">Features:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {data.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}