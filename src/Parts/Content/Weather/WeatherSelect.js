import React from "react";
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
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
            setActive(true)
            props.getCountriesThunk()
            setOptionsCountry(props.CountriesList)

        }, [loadingCountries], props.CitiesList);

        useEffect(() => {
            if (!openCountry) {
                setOptionsCountry([]);
            }
        }, [openCountry]);

        useEffect(() => {
            if (setOptionsCity.length !==0) {
                setActive(false)
            }
            setOptionsCity(props.CitiesList)
        }, [loadingCities, props.CitiesList]);

        useEffect(() => {
            if (!openCity) {
                setOptionsCity([]);
            }
        }, [openCity]);

        return (
            <Stack direction="row" spacing={1}>
                <Autocomplete sx
                    value={valueCountry}
                    onChange={(event, newValue) => {
                        setValueCountry(newValue)
                        setValueCity(null)
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
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loadingCountries ? <CircularProgress color="inherit" size={20}/> : null}
                                    </React.Fragment>
                                ),
                            }}
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
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <React.Fragment>
                                        {loadingCities ? <CircularProgress color="inherit" size={20}/> : null}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />
                <Button variant="contained" size="small">Submit</Button>
            </Stack>
        );
    })
;

export default WeatherSelect