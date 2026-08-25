import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <main className="flex flex-col gap-4">
      <div>
        <h1 className="tracking-tighter">Walter Furrer</h1>
        <p className="text-2xl font-light tracking-tight text-muted-foreground">
          Software Engineer @ Lights Over Atlanta
        </p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <button className="bg-olive-background p-2 rounded-md text-olive-text w-32">
          Olive Button
        </button>
        <button className="bg-mist-background p-2 rounded-md text-mist-text w-32">
          Mist Button
        </button>
        <button className="bg-red-background p-2 rounded-md text-red-text w-32">Red Button</button>
        <button className="bg-amber-background p-2 rounded-md text-amber-text w-32">
          Amber Button
        </button>
      </div>
    </main>
  )
}
