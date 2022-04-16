import React, {useEffect, useState} from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Card, CardContent, LinearProgress, ListItem} from "@mui/material";
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
    const [weatherPredict, setWeatherPredict] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)
    let list = null
    if (weatherPredict) {
        list = weatherPredict.daily.map((day, i) => {
            if (i > 0) {
                let days = new Date()
                days.setDate(days.getDate() + i)
                return (<Card sx={{boxShadow: 0, borderRight: 1, borderRadius: 0, mt: 2, borderColor: 'grey.500'}}
                              key={i}>
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
                            <ListItem sx={{display: "flex", p: 1}}>
                                <ListItemText sx={{textAlign: 'center', borderRight: 1, borderColor: 'grey.500'}}
                                              primary={"Min: " + day.temp.min + "℃"}/>
                                <ListItemText sx={{textAlign: 'center'}}
                                              primary={"Max: " + day.temp.max + "℃"}/>
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
    }
    function clearData() {
        setWeatherPredict(null)
        setCurrentWeather(null)
    }

    useEffect(() => {
        props.getWeatherThunk("Kyiv")
    }, [])

    useEffect(() => {
        setCurrentWeather(props.CurrentWeather)
    }, [props.CurrentWeather])

    useEffect(() => {
        if (props.PredictWeather) {
            setWeatherPredict(props.PredictWeather)
        }
    }, [props.PredictWeather])
    return (
        <Box>
            <WeatherSelect {...props} clearData={clearData}/>
            <Stack sx={{display: 'flex', pt: 3, borderBottom: 1, borderColor: 'grey.500'}}
                   direction={{ xs: 'column',sm: 'column', md: 'column', lg: 'row' }}>
                <List
                    sx={{width: {xs: '100%', sm: '100%', md: '100%', lg: '20%' }, bgcolor: 'background.paper', borderRight: 1, borderColor: 'grey.500'}}
                    component="nav" aria-labelledby="nested-list-subheader" subheader={
                    <Typography variant="h5">Current weather</Typography>}>
                    {currentWeather ? <>
                        <ListSubheader>{`City, Country`}</ListSubheader>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon/>
                            </ListItemIcon>
                            <ListItemText primary={currentWeather.name + ", " + currentWeather.sys.country}/>
                        </ListItem>
                        <ListSubheader>{`Weather information`}</ListSubheader>
                        <ListItem>
                            <ListItemIcon>
                                <WeatherIcon now={currentWeather.weather[0].main}/>
                            </ListItemIcon>
                            <ListItemText primary={currentWeather.weather[0].main}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DeviceThermostatIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={currentWeather.main.temp + "℃"}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText sx={{textAlign: 'center', borderRight: 1, borderColor: 'grey.500'}}
                                          primary={"Min: " + currentWeather.main.temp_min + "℃"}/>
                            <ListItemText sx={{textAlign: 'center'}}
                                          primary={"Max: " + currentWeather.main.temp_max + "℃"}/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AirIcon/>
                            </ListItemIcon>
                            <ListItemText primary={currentWeather.wind.speed + " m/h"}/>
                        </ListItem>
                    </> : <LinearProgress sx={{m: 1}}/>}
                </List>
                <Box sx={{width: {xs: '100%', sm: '100%', md: '100%', lg: '80%' }}}>
                    <Typography sx={{textAlign: 'left', pl: 1}} variant="h5">Weather forecast for 7 days</Typography>
                    <Stack sx={{display: "flex", flexDirection: "row", mt: 0}}>
                        {list ? list : <Box sx={{width: '100%'}}>
                            <LinearProgress sx={{ m: 1}}/>
                        </Box>}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
});

export default Weather