import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useEffect, useRef } from 'react';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    height: 'fit-content',
    margin: '10px',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)'
}));


const ResizableDemoPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    height: 'fit-content',
    margin: '10px',
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)'
}));

export default function CustomPaper({ children, setSize, resizable, size }) {
    const paperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const paper = paperRef.current;
        if (!paper) return;

        const observer = new ResizeObserver(() => {
            const { width, height } = paper.getBoundingClientRect();
            setSize([width, height])
        });

        observer.observe(paper);
        return () => observer.disconnect();
    }, []);

    if (resizable) {
        return (<DemoPaper ref={paperRef} sx={{
            width: size[0],
            height: size[1]
        }}>
            {children}
        </DemoPaper>)
    }
    else {
        return (<DemoPaper ref={paperRef}>
            {children}
        </DemoPaper>)
    }
}