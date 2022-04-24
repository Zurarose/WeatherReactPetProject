import React from 'react';
import Box from "@mui/material/Box";
import {LinearProgress} from "@mui/material";

const Loader = () => {
    return (
        <Box sx={{width: '100%'}}>
            <LinearProgress sx={{m: 1}}/>
        </Box>
    );
};

export default Loader;