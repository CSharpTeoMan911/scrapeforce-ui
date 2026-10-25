import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: 'fit-content',
  margin:'10px',
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor:'rgba(30, 30, 30, 0.5)'
}));

export default function CustomPaper({children}){
    return (<DemoPaper>
        {children}
    </DemoPaper>)
}