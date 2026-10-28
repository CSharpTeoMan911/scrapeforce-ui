import Frame from '../components/Frame'
import MainPane from '../components/MainPane'
import DownloadOptionsPane from './DownloadOptionsPane'
import FileDownloadPane from './FileDownloadPane'
import { useEffect, useState } from 'react'


export default function DesktopFrameBlock() {

    const [size, setSize] = useState([0, 0]);

    return (
      <Frame Id={'main_frame'} height={'100vh'} width={'100vw'} position={'absolute'} display={'flex'} className={'mainDiv'}>
        <MainPane />
        <div style={{ display: 'block', alignSelf: 'center' }}>
          <div style={{ width: '50vw', minWidth: '300px', display: 'inline-block' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <DownloadOptionsPane setSize={setSize}/>
            </div>
          </div>
          <div style={{ width: '50vw', minWidth: '300px', display: 'inline-block' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FileDownloadPane size={size}/>
            </div>
          </div>
        </div>
      </Frame>
    )
}