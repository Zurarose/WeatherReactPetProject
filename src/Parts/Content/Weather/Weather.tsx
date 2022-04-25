import React, {useEffect, useState} from "react";
import List from '@mui/material/List';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ShowerIcon from '@mui/icons-material/Shower';
import GrainIcon from '@mui/icons-material/Grain';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import Typography from "@mui/material/Typography";
import WeatherSelect from "./WeatherSelect";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PredictWeatherCard from "./PredictWeather";
import CurrentWeatherCard from "./CurrentWeather";
import Loader from "../../Utils/Loader/Loader";
import {PredictType, WeatherType} from "../../../Types/Weather/WeatherTypes";

interface PropsType {
    CountriesList: ReadonlyArray<string> | []
    CitiesList: ReadonlyArray<string> | []
    CurrentWeather: WeatherType | null
    PredictWeather: ReadonlyArray<PredictType> | []

    getWeatherThunk: (city: string) => void
    getCountriesThunk: () => void
    getCitiesThunk: (country: string) => void
}

const Weather = React.memo((props: PropsType) => {
    const WeatherIcon = (weather: { now: string | null }) => {
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
            default: {
                return <></>
            }
        }
    }
    const [predictWeather, setWeatherPredict] = useState<ReadonlyArray<PredictType> | null>(null)
    const [currentWeather, setCurrentWeather] = useState<WeatherType | null>(null)

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
        setWeatherPredict(props.PredictWeather)
    }, [props.PredictWeather])
    return (
        <Box>
            <WeatherSelect {...props} clearData={clearData}/>
            <Stack sx={{display: 'flex', pt: 3, borderBottom: 1, borderColor: 'grey.500'}}
                   direction={{xs: 'column', sm: 'column', md: 'column', lg: 'row'}}>
                <List
                    sx={{
                        width: {xs: '100%', sm: '100%', md: '100%', lg: '20%'},
                        bgcolor: 'background.paper',
                        borderRight: 1,
                        borderColor: 'grey.500'
                    }}
                    component="nav" aria-labelledby="nested-list-subheader" subheader={
                    <Typography variant="h5">Current weather</Typography>}>
                    {currentWeather
                        ? <CurrentWeatherCard currentWeather={props.CurrentWeather} WeatherIcon={WeatherIcon}/>
                        : <Loader/>}
                </List>
                <Box sx={{width: {xs: '100%', sm: '100%', md: '100%', lg: '80%'}}}>
                    <Typography sx={{textAlign: 'left', pl: 1}} variant="h5">Weather forecast for 7 days</Typography>
                    <Stack sx={{display: "flex", flexDirection: "row", mt: 0}}>
                        {predictWeather
                            ? predictWeather.slice(1).map((day, i) => {
                                let days = new Date()
                                days.setDate(days.getDate() + i)
                                return (
                                    <PredictWeatherCard key={i} days={days} day={day} WeatherIcon={WeatherIcon}/>)
                            })
                            : <Loader/>}
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
});

export default Weather