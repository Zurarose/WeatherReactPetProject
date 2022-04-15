import React, {useEffect, useState} from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Card, CardContent, ListItem} from "@mui/material";
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
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const Weather = React.memo((props) => {
    const WeatherIcon = (weather) => {
        switch (weather.now) {
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

    const [weatherListPredict, setWeatherListPredict] = useState(null)

    useEffect(() => {

        if (props.PredictWeather) {
            let list = props.PredictWeather.daily.map((day, i) => {
                if (i > 0) {
                    let days = new Date()
                    days.setDate(days.getDate() + i)
                    return (<Card sx={{boxShadow: 0, borderRight: 1, borderRadius: 0, mt: 2, borderColor: 'grey.500'}} key={i}>
                        <CardContent sx={{p: 0}}>
                            <List sx={{p: 0}}>
                                <ListSubheader>{days.getUTCDate() + "th "}</ListSubheader>
                                <ListItem sx={{px: 1}}>
                                    <ListItemIcon>
                                        <WeatherIcon now={day.weather[0].main}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={day.weather[0].main}/>
                                </ListItem>
                                <ListItem sx={{px: 1}}>
                                    <ListItemIcon>
                                        <DeviceThermostatIcon/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={day.temp.day + "℃"}/>
                                </ListItem>
                                <ListItem sx={{px: 1}}>
                                    <ListItemIcon>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={"Min: " + day.temp.min + "℃ Max: " + day.temp.max + "℃"}/>
                                </ListItem>
                                <ListItem sx={{px: 1}}>
                                    <ListItemIcon>
                                        <AirIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={day.wind_speed + " m/h"}/>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>)
                }
            })
            setWeatherListPredict(list)
        }
    }, [props.PredictWeather])

    return (<Box>
        <WeatherSelect {...props}/>
        <Stack sx={{display: 'flex', flexDirection: 'row', pt: 3, borderBottom: 1, borderColor: 'grey.500'}}>
            <List
                sx={{width: '20%', bgcolor: 'background.paper'}}
                component="nav" aria-labelledby="nested-list-subheader" subheader={
                <Typography variant="h5">Information</Typography>}>
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
                        <WeatherIcon now={props.CurrentWeather.weather[0].main}/>
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
                    </ListItemIcon>
                    <ListItemText
                        primary={"Min: " + props.CurrentWeather.main.temp_min + "℃ Max: " + props.CurrentWeather.main.temp_max + "℃"}/>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <AirIcon/>
                    </ListItemIcon>
                    <ListItemText primary={props.CurrentWeather.wind.speed + " m/h"}/>
                </ListItem>
            </List>
            <Box sx={{width: '80%'}}>
                <Typography sx={{textAlign: 'left', pl: 1}} variant="h5">Weather forecast for 7 days</Typography>
                <Stack sx={{display: "flex", flexDirection: "row", mt: 0}}>
                    {weatherListPredict}
                </Stack>
            </Box>
        </Stack>
    </Box>)
});

export default Weather