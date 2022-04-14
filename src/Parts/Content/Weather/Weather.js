import React from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ListItem} from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ShowerIcon from '@mui/icons-material/Shower';
import GrainIcon from '@mui/icons-material/Grain';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Typography from "@mui/material/Typography";
import AirIcon from '@mui/icons-material/Air';
import WeatherSelect from "./WeatherSelect";

const Weather = React.memo((props) => {
    const WeatherIcon = (props) => {
        switch (props.CurrentWeather.weather[0].main) {
            case ("Clear"): {
                return <WbSunnyIcon/>
            }
            case ("Thunderstorm"): {
                return <ThunderstormIcon/>
            }
            case ("Drizzle"): {
                return <ShowerIcon/>
            }
            case ("Rain"): {
                return <GrainIcon/>
            }
            case ("Snow"): {
                return <AcUnitIcon/>
            }
            case ("Clouds"): {
                return <WbCloudyIcon/>
            }
        }
    }
    return (<div>
        <WeatherSelect {...props}/>
        <List
            sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
            component="nav" aria-labelledby="nested-list-subheader" subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                <Typography variant="h5">Information</Typography>
            </ListSubheader>}>
            <ListSubheader>{`City, Country`}</ListSubheader>
            <ListItem>
                <ListItemIcon>
                    <LocationOnIcon/>
                </ListItemIcon>
                <ListItemText primary={props.CurrentWeather.name + ", " + props.CurrentWeather.sys.country}/>
            </ListItem>
            <ListSubheader>{`Weather information`}</ListSubheader>
            <ListItem>
                <ListItemIcon>
                    <WeatherIcon {...props}/>
                </ListItemIcon>
                <ListItemText primary={props.CurrentWeather.weather[0].main}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <DeviceThermostatIcon/>
                </ListItemIcon>
                <ListItemText
                    primary={props.CurrentWeather.main.temp + "℃ (Feels like " + props.CurrentWeather.main.feels_like + "℃)"}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AirIcon/>
                </ListItemIcon>
                <ListItemText primary={props.CurrentWeather.wind.speed + " m/h"}/>
            </ListItem>

        </List>
    </div>)
});

export default Weather