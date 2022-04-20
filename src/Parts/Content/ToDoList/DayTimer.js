import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DayTimer = (props) => {
    const [dateValue, setDate] = useState({date: "", time: ""})
    useEffect(() => {
        updateTime()
    }, [dateValue])
    const updateTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + (today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds());
        setTimeout(() => setDate({date: date, time: time}), 500)
    }
    return (
        <Box>
            <Typography variant="h6">
                {dateValue.date + " " + dateValue.time}
            </Typography>
        </Box>)
}
export default DayTimer