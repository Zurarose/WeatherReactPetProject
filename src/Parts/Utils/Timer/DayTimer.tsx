import {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DayTimer = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <Box>
            <Typography textAlign='left' variant="h6">
                {date.toLocaleDateString() + " " + date.toLocaleTimeString()}
            </Typography>
        </Box>)
}
export default DayTimer