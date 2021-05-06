import React from 'react'
import {Grid} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import Typography from "@material-ui/core/Typography";
import DataStudiesTabs from "../components/Tabs";
import 'typeface-roboto'

const StudyPage = () => {
    const tabs = [
        {
            labelTab: "Documentation",
            linkTab: "/not/implemented",
        },
        {
            labelTab: "Forms",
            linkTab: "/forms"
        },
        {
            labelTab: "Add researcher",
            linkTab: "/not/implemented"
        }
    ];

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <DataStudiesAppBar/>
            </Grid>
            <Grid item justify="center" style={{display: "grid"}}>
                <DataStudiesTabs tabsInfo={tabs} />
            </Grid>
            <Grid item>
                <Typography variant="body1" align={"justify"} style={{margin: "2% 15%"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin. Vestibulum laoreet arcu vitae diam blandit hendrerit. Suspendisse potenti. Cras sit amet fermentum sem, id dictum tortor. Vestibulum consectetur blandit orci pulvinar lobortis. Fusce efficitur, odio quis dictum ullamcorper, nibh leo commodo magna, fermentum tincidunt ipsum tellus eu velit. Proin maximus interdum commodo. Cras quis enim ac lectus rutrum rutrum.

                    Vivamus libero nisi, pellentesque vel posuere eu, vestibulum ac odio. Cras in vestibulum purus. Nam placerat ut risus nec efficitur. Nulla pulvinar tellus at dolor congue mollis. Nunc ornare rhoncus eros, non commodo mi scelerisque eu. Vivamus lacinia ex id odio auctor pretium. Nullam nec convallis lacus. Nullam quis faucibus ante. Phasellus et sagittis sem. In volutpat in enim viverra vehicula. Nunc est augue, gravida eget cursus eget, dictum vel risus. Vivamus nec sollicitudin leo. Curabitur bibendum metus urna, non tincidunt lectus sagittis eu.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default StudyPage