import { useEffect, useState } from "react";
import CustomPaper from "./CustomPaper";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { List } from 'react-window';
import FileWidget from "./FileWidget";
import Divider from "@mui/material/Divider";

const downloadedFiles:Object ={}

type RowComponentProps<RowProps extends object = object> = {
    ariaAttributes: {
        "aria-posinset": number;
        "aria-setsize": number;
        role: "listitem";
    };
    index: number;
    style: React.CSSProperties;
} & RowProps

function renderRow(props: RowComponentProps) {
  const { index, style } = props;
  
  return (
    <ListItem style={style} key={index} component="div" disablePadding sx={{ py: 0.5 }}>
      <ListItemButton>
        <FileWidget fileName={`Item ${index + 1}`.repeat(10)}/>
      </ListItemButton>
    </ListItem>
  );
}

export default function FileDownloadPane({ size }) {
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        if (!rerender) {
            setRerender(true);
        }
    }, [size])


    return (
        <CustomPaper setSize={() => { }} resizable={true} size={['100%', size[1]]}>
            <div className="download-options-content file-download-content">
                <span className="download-options-eyebrow">// downloaded files</span>
                <div className="file-download-list">
                    <Divider sx={{ borderColor: 'error.main' }} />
                    <List
                        rowHeight={76}
                        rowCount={200}
                        style={{
                          width: '100%',
                          height: '100%',
                          maxHeight: '100%',
                        }}
                        rowProps={{}}
                        overscanCount={5}
                        rowComponent={renderRow}
                    />
                </div>
            </div>
        </CustomPaper>
    );
}