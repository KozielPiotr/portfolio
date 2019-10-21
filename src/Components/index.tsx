import React, {Fragment} from "react";

import Grid from "@material-ui/core/Grid";

import {Header, Footer, LeftSection, RightSection} from "./Body/Sections"


export default () => 
    <Fragment>
        <Grid item sm={12}>
            <Header />
        </Grid>
        <Grid item sm={3}>
            <LeftSection />
        </Grid>
        <Grid item sm={9}>
            <RightSection />
        </Grid>
        <Grid item sm={12}>
            <Footer />
        </Grid>
    </Fragment>
