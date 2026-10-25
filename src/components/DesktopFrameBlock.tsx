import Frame from '../components/Frame'
import MainPane from '../components/MainPane'
import DownloadOptionsPane from './DownloadOptionsPane'


export default function DesktopFrameBlock() {
    return (
      <Frame Id={'main_frame'} height={'100vh'} width={'100vw'} position={'absolute'} display={'flex'} className={'mainDiv'}>
        <MainPane />
        <div style={{ display: 'block', alignSelf: 'center' }}>
          <div style={{ width: '50vw', minWidth: '300px', display: 'inline-block' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <DownloadOptionsPane/>
            </div>
          </div>
          <div style={{ width: '50vw', minWidth: '300px', display: 'inline-block' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

            </div>
          </div>
        </div>
      </Frame>
    )
}