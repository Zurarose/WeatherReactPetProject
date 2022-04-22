import React, {Suspense} from 'react';
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
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {Link, Route, Routes} from "react-router-dom";
import WeatherContainer from "../Content/Weather/WeatherContainer";

const ToDoListContainer = React.lazy(() => import('../Content/ToDoList/ToDoListContainer'))


const drawerWidth = 200;
const SideMenu = (props) => {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: '#1976d3'}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Weather Pet Project — WPP
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer sx={{
                width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }} variant="permanent" anchor="left">
                <Toolbar>

                </Toolbar>
                <List>
                    <ListItemButton component={Link} to={"/"}>
                        <ListItemIcon>
                            <CloudIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Weather"/>
                    </ListItemButton>
                    <ListItemButton component={Link} to={"/ToDoList"}>
                        <ListItemIcon>
                            <FormatListBulletedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="To do list"/>
                    </ListItemButton>
                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, bgcolor: 'background.default', p: 2}}>
                <Toolbar/>
                <Routes>
                    <Route index element={<WeatherContainer/>}/>

                    <Route path={"/ToDoList"} element={
                        <Suspense fallback={<div>Loading...</div>}><ToDoListContainer/></Suspense>}/>
                </Routes>
            </Box>
        </Box>
    )
        ;
}
export default SideMenu