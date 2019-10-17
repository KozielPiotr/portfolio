import React from 'react';
import Grid from '@material-ui/core/Grid';

import RightSection from "./Right/RightSection";
import LeftSection from "./Left/LeftSection";


export default () => 
    <Grid container spacing={1} >
        <LeftSection />
        <RightSection />
    </Grid>
