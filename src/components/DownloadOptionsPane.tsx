import CustomPaper from "./CustomPaper"
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

export default function DownloadOptionsPane() {
    return (
        <CustomPaper>
            <div style={{display:'flex', flexDirection:'row'}}>
                <Chip label="Link" color="error" variant="outlined" sx={{
                    alignSelf:'center',
                    }
                }/>
                <TextField
                    error
                    defaultValue="Hello World"
                    sx={{
                        marginLeft: '30px',
                        alignSelf:'center',
                        '& .MuiInputBase-input': {
                            alignSelf:'center',
                            color: '#D73220',
                            padding: '5px'
                        }
                    }} />
            </div>
        </CustomPaper>
    )
}