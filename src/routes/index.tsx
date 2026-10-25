import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: Home })

function Home() {
   window.location.href = '/mp4';
}
