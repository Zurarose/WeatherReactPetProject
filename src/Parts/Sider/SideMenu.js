import * as React from 'react';
import '@fontsource/roboto/300.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloudIcon from '@mui/icons-material/Cloud';
import {Route, Routes} from "react-router-dom";
import WeatherContainer from "../Content/Weather/WeatherContainer";

const drawerWidth = 200;
const SideMenu = (props) => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "sky" }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Weather Pet Project — WPP
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer sx={{width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {width: drawerWidth,
                    boxSizing: 'border-box',},
            }} variant="permanent" anchor="left">
                <Toolbar>

                </Toolbar>
                <List>
                    <ListItemButton  key={1}>
                        <ListItemIcon>
                            <CloudIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Weather"/>
                    </ListItemButton>
                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, bgcolor: 'background.default', p: 2}}>
            <Toolbar/>
            <Routes>
                <Route index element={<WeatherContainer/>}/>
            </Routes>
        </Box>
</Box>
)
    ;
}
export default SideMenu