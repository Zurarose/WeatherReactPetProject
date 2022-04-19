import React from "react";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const WeatherSelect = React.memo((props) => {
        const [valueCountry, setValueCountry] = useState(null);
        const [inputValueCountry, setInputValueCountry] = useState('');
        const [openCountry, setOpenCountry] = useState(false);
        const [optionsCountry, setOptionsCountry] = useState([]);

        const [active, setActive] = useState(true)

        const [valueCity, setValueCity] = useState(null);
        const [inputValueCity, setInputValueCity] = useState('');
        const [openCity, setOpenCity] = useState(false);
        const [optionsCity, setOptionsCity] = useState([]);

        const loadingCountries = openCountry && optionsCountry.length === 0;
        const loadingCities = openCity && optionsCity.length === 0;


        useEffect(() => {
            setOptionsCity([])
            setValueCity(null)
            props.getCountriesThunk()
            setOptionsCountry(props.CountriesList)

        }, [loadingCountries]);

        useEffect(() => {
            if (!openCountry) {
                setOptionsCountry([]);
            }
        }, [openCountry]);

        useEffect(() => {
            if (props.CitiesList.length !== 0) {
                setActive(false)
            }
            setOptionsCity(props.CitiesList)
        }, [props.CitiesList]);

        useEffect(() => {
            if (!openCity) {
                setOptionsCity([]);
            }
        }, [openCity]);

        function setWeather() {
            props.clearData()
            props.getWeatherThunk(valueCity)
        }

        return (
            <Stack direction="row" spacing={1}>
                <Autocomplete
                    value={valueCountry}
                    onChange={(event, newValue) => {
                        setActive(true)
                        setValueCountry(newValue)
                        props.getCitiesThunk(newValue)
                    }}
                    inputValue={inputValueCountry}
                    onInputChange={(event, newInputValue) => {
                        setInputValueCountry(newInputValue)
                    }}
                    id="citySelect"
                    size="small"
                    sx={{width: 400}}
                    open={openCountry}
                    onOpen={() => {
                        setOpenCountry(true);
                    }}
                    onClose={() => {
                        setOpenCountry(false);
                    }}
                    options={optionsCountry}
                    loading={loadingCountries}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Country"
                        />
                    )}
                />
                <Autocomplete
                    disabled={active}
                    value={valueCity}
                    onChange={(event, newValue) => {
                        setValueCity(newValue);
                    }}
                    inputValue={inputValueCity}
                    onInputChange={(event, newInputValue) => {
                        setInputValueCity(newInputValue);
                    }}
                    id="countrySelect"
                    size="small"
                    sx={{width: 300}}
                    open={openCity}
                    onOpen={() => {
                        setOpenCity(true);
                    }}
                    onClose={() => {
                        setOpenCity(false);
                    }}
                    options={optionsCity}
                    loading={loadingCities}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Cities"
                        />
                    )}
                />
                <Button disabled={!valueCity} onClick={setWeather} variant="contained" size="small">Submit</Button>
            </Stack>
        );
    })
;

export default WeatherSelect