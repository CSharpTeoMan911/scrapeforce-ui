import Frame from '../components/Frame'
import MainPane from '../components/MainPane'


export default function MobileFrameBlock() {
    return (
        <Frame Id={'main_frame'} height={'100vh'} width={'100vw'} position={'absolute'} display={'flex'} className={'_'}>
            <MainPane/>
            <div>
                
            </div>
        </Frame>
    )
}