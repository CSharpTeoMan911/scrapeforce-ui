import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { startDeviceDetector, stopDeviceDetector, detectDevice } from "../utilities/device_detector"
import MobileFrameBlock from '#/components/MobileFrameBlock'
import DesktopFrameBlock from '#/components/DesktopFrameBlock'

export const Route = createFileRoute('/mp4')({
  component: RouteComponent,
})

function RouteComponent() {
  useEffect(() => {
    stopDeviceDetector()
    startDeviceDetector()
  }, [])

  const [isMobile, setIsMobile] = useState(detectDevice())

  if (isMobile) {
    return (
      <MobileFrameBlock/>
    )
  }
  else {
    return (
      <DesktopFrameBlock/>
    )
  }
}
