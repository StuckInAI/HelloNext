import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'
import Counter from '@/components/counter'
import ApiStatus from '@/components/api-status'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">NextJS Fullstack App</h1>
            <p className="text-muted-foreground mt-2">
              A modern fullstack application with Next.js, TypeScript, Tailwind CSS, and ShadCN
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Welcome</CardTitle>
              <CardDescription>Hello World Application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg">
                This is a fullstack Next.js application with TypeScript, Tailwind CSS, and ShadCN components.
              </p>
              <Button>Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactive Counter</CardTitle>
              <CardDescription>Client-side interactivity</CardDescription>
            </CardHeader>
            <CardContent>
              <Counter />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Status</CardTitle>
              <CardDescription>Backend API integration</CardDescription>
            </CardHeader>
            <CardContent>
              <ApiStatus />
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>Everything included in this starter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Frontend</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Next.js 14 with App Router</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>ShadCN Components</li>
                    <li>Dark/Light Theme</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Testing</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Jest & Testing Library</li>
                    <li>Unit Tests</li>
                    <li>Component Tests</li>
                    <li>Test Coverage</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">DevOps</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>GitHub Actions CI/CD</li>
                    <li>Automated Testing</li>
                    <li>Code Coverage</li>
                    <li>ESLint Configuration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}