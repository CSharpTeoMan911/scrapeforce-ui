import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mp4')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/mp4"!</div>
}
