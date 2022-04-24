import ListSubheader from "@mui/material/ListSubheader";
import {ListItem} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ListItemText from "@mui/material/ListItemText";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import React from "react";
import {WeatherType} from "../../../Types/Weather/WeatherTypes";


interface PropsType {
    currentWeather: WeatherType | null
    WeatherIcon: (weather: { now: string | null}) => JSX.Element
}

const CurrentWeather = ({currentWeather, WeatherIcon} : PropsType) => {
    return (
        <>
            <ListSubheader>{`City, Country`}</ListSubheader>
            <ListItem>
                <ListItemIcon>
                    <LocationOnIcon/>
                </ListItemIcon>
                <ListItemText primary={currentWeather && currentWeather.place.city + ", " + currentWeather.place.country}/>
            </ListItem>
            <ListSubheader>{`Weather information`}</ListSubheader>
            <ListItem>
                <ListItemIcon>
                    <WeatherIcon now={currentWeather && currentWeather.weather}/>
                </ListItemIcon>
                <ListItemText primary={currentWeather && currentWeather.weather}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <DeviceThermostatIcon/>
                </ListItemIcon>
                <ListItemText
                    primary={currentWeather && currentWeather.main.temp + "℃"}/>
            </ListItem>
            <ListItem>
                <ListItemText sx={{textAlign: 'center', borderRight: 1, borderColor: 'grey.500'}}
                              primary={"Min: " + (currentWeather && currentWeather.main.temp_min) + "℃"}/>
                <ListItemText sx={{textAlign: 'center'}}
                              primary={"Max: " + (currentWeather && currentWeather.main.temp_max) + "℃"}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <AirIcon/>
                </ListItemIcon>
                <ListItemText primary={currentWeather && currentWeather.wind + " m/h"}/>
            </ListItem>
        </>
    );
};

export default CurrentWeather;