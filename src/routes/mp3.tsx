import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mp3')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mp3"!</div>
}
