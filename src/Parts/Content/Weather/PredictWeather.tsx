import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import React from "react";
import {Card, CardContent, ListItem} from "@mui/material";
import {PredictType} from "../../../Types/Weather/WeatherTypes";

interface PropsType {
    [days: string]: any

    day: PredictType | null
    WeatherIcon: (weather: { now: string | null }) => JSX.Element
}

const PredictWeather = React.memo(({days, day, WeatherIcon}: PropsType) => {
    return (
        <Card sx={{boxShadow: 0, borderRight: 1, borderRadius: 0, mt: 2, borderColor: 'grey.500'}}>
            <CardContent sx={{p: 0}}>
                <List sx={{p: 0}}>
                    <ListSubheader>{days.getUTCDate() + "th "}</ListSubheader>
                    <ListItem sx={{px: 1}}>
                        <ListItemIcon>
                            <WeatherIcon now={day && day.weather}/>
                        </ListItemIcon>
                        <ListItemText
                            primary={day && day.weather}/>
                    </ListItem>
                    <ListItem sx={{px: 1}}>
                        <ListItemIcon>
                            <DeviceThermostatIcon/>
                        </ListItemIcon>
                        <ListItemText
                            primary={day && day.temp.day + "℃"}/>
                    </ListItem>
                    <ListItem sx={{display: "flex", p: 1}}>
                        <ListItemText sx={{textAlign: 'center', borderRight: 1, borderColor: 'grey.500'}}
                                      primary={"Min: " + (day && day.temp.min) + "℃"}/>
                        <ListItemText sx={{textAlign: 'center'}}
                                      primary={"Max: " + (day && day.temp.max) + "℃"}/>
                    </ListItem>
                    <ListItem sx={{px: 1}}>
                        <ListItemIcon>
                            <AirIcon/>
                        </ListItemIcon>
                        <ListItemText primary={day && day.wind_speed + " m/h"}/>
                    </ListItem>
                </List>
            </CardContent>
        </Card>)
})
export default PredictWeather