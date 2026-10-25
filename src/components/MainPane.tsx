import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';


const pages = ['MP4', 'MP3'];

export default function MainPane() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#1E1E1E',
                color: '#D73220'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <VideoLibraryOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#D73220',
                            textDecoration: 'none',
                        }}
                    >
                        ScrapeForce
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                            slotProps={{
                                paper: {
                                    sx: {
                                        backgroundColor: '#1E1E1E',
                                        color: '#D73220',
                                        boxShadow: 'none',
                                        '& .MuiList-root': {
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                        },
                                    },
                                },
                            }}>
                            {pages.map((page) => (
                                <MenuItem component='a' key={page} onClick={handleCloseNavMenu} href={page === 'MP4'? 'mp4' : 'mp3'} sx={{
                                    backgroundColor: '#1E1E1E',
                                    '&:hover': {
                                        backgroundColor: '#1f0300'
                                    },
                                }}>
                                    <Typography sx={{ textAlign: 'center', color: '#D73220' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <VideoLibraryOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ScrapeForce
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                href={page === 'MP4'? 'mp4' : 'mp3'}
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#D73220', display: 'block', }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
