import CustomPaper from "./CustomPaper"
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import '../styles/components.css'
import { useState, useEffect } from 'react';


function downloadVideo(url:string, selectedResolution:string){

}


export default function DownloadOptionsPane({setSize}) {
    const [url, setUrl] = useState('');
    const [selectedResolution, setSelectedResolution] = useState('720p');
    const getResolutionVariant = (resolution: string) =>
        selectedResolution === resolution ? 'filled' : 'outlined';

    useEffect(()=>{

    }, [])

    return (
        <CustomPaper setSize={setSize} resizable={false} size={[0,0]} >
            <style>
                @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');
            </style>

            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                    <p className="paragraphs" style={{ alignSelf: 'flex-start', textAlign: 'start', marginTop: '10px', marginBottom: '10px' }}>
                            // download
                    </p>
                    <h1 className="headings" style={{ alignSelf: 'flex-start', textAlign: 'start' }}>
                        Paste a link.
                    </h1>
                    <h1 className="headings" style={{ alignSelf: 'flex-start', textAlign: 'start', marginBottom: '50px' }}>
                        Get the video.
                    </h1>
                </div>

                <Divider sx={{
                    marginTop: '30px',
                    marginBottom: '20px',
                    borderBottomWidth: 2
                }} />

                <div className='grid_template'>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
                        <Chip label="Link" color="error" variant="outlined" sx={{
                            alignSelf: 'flex-start',
                            fontSize: '15px',
                        }} />
                    </div>
                    <TextField
                        onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{setUrl(event.target.value)}}
                        error
                        defaultValue=""
                        sx={{
                            gridColumn: 'span 3',
                            width: '70%',
                            marginLeft: '30px',
                            alignSelf: 'center',
                            '& .MuiInputBase-input': {
                                alignSelf: 'center',
                                color: '#D73220',
                                padding: '5px'
                            }
                        }} />
                </div>

                <Divider sx={{
                    marginTop: '60px',
                    marginBottom: '20px',
                    borderBottomWidth: 2
                }} />

                <div className="grid_template_resolutions" style={{ margin: '0px 0px 0px 10px' }}>

                    <Chip color="error" variant={getResolutionVariant('240p')} label="240p" onClick={() => { setSelectedResolution('240p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />
                    <Chip color="error" variant={getResolutionVariant('360p')} label="360p" onClick={() => { setSelectedResolution('360p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />
                    <Chip color="error" variant={getResolutionVariant('480p')} label="480p" onClick={() => { setSelectedResolution('480p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />
                    <Chip color="error" variant={getResolutionVariant('720p')} label="720p" onClick={() => { setSelectedResolution('720p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />

                    <Chip color="error" variant={getResolutionVariant('1080p')} label="1080p" onClick={() => { setSelectedResolution('1080p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />
                    <Chip color="error" variant={getResolutionVariant('1440p')} label="1440p" onClick={() => { setSelectedResolution('1440p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />
                    <Chip color="error" variant={getResolutionVariant('2160p')} label="2160p" onClick={() => { setSelectedResolution('2160p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />
                    <Chip color="error" variant={getResolutionVariant('4320p')} label="4320p" onClick={() => { setSelectedResolution('4320p'); }} sx={{
                        width: 'fit-content',
                        padding: '10px'
                    }} />
                </div>

                <Divider sx={{
                    marginTop: '30px',
                    marginBottom: '20px',
                    borderBottomWidth: 2
                }} />

                <Button variant="contained" color="error" onClick={()=>{downloadVideo(url, selectedResolution)}} sx={{
                    margin: '60px 10px 0px 10px',
                    fontFamily: "JetBrains Mono, monospace"
                }}>Download</Button>
            </div>
        </CustomPaper>
    )
}