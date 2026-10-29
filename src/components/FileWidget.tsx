import IconButton from "@mui/material/IconButton";
import ReplayIcon from "@mui/icons-material/Replay";
import DeleteIcon from "@mui/icons-material/Delete";
import '../styles/components.css'

export default function FileWidget({ fileName }) {
    return (<div className="file-header">
        <input className="downloaded-filename " value={fileName} readOnly={true}/>
        <div style={{display:'flex', flexDirection:'column', alignContent: 'center' }}>
            <div style={{display:'flex', flexDirection:'row', alignSelf:'end'}}>
                <IconButton aria-label="Retry download">
                    <ReplayIcon sx={{
                        color:'red'
                    }}/>
                </IconButton>
                <IconButton aria-label="Delete file" color="error">
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    </div>);
}