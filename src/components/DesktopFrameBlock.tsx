import Frame from '../components/Frame'
import MainPane from '../components/MainPane'
import DownloadOptionsPane from './DownloadOptionsPane'
import FileDownloadPane from './FileDownloadPane'
import { useState } from 'react'

export default function DesktopFrameBlock() {
  const [size, setSize] = useState([0, 0])

  return (
    <Frame
      Id={'main_frame'}
      height={'100vh'}
      width={'100vw'}
      position={'absolute'}
      display={'flex'}
      className={'mainDiv'}
    >
      <MainPane />
      <div className="desktop-panels-grid">
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <DownloadOptionsPane setSize={setSize} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <FileDownloadPane size={size} />
        </div>
      </div>
    </Frame>
  )
}
