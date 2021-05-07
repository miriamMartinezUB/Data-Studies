import React from 'react'
import PropTypes from 'prop-types'
import {createMuiTheme, Grid, ListItem, makeStyles, MuiThemeProvider, Typography} from "@material-ui/core";
import DataStudiesIconButton from "../IconButton";
import DataStudiesDataModal from "../DataModal";
import {nameIcons} from "../../constants/icons";
import DataStudiesDialog from "../Dialog";

const DataStudiesData = ({name, description, columns, data}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const theme = createMuiTheme({
        palette: {
            secondary: {
                main: '#333'
            }
        }
    });

    const onDownload = ({name}) => {
        const link = document.createElement('a');
        const nameCleaned = name.replace(/\s/g, '_')
        link.download = `${nameCleaned}.csv`;
        link.href = "./dataset.csv";
        link.click();
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const inlineStyle = {
        modal: {
            marginTop: 'auto',
            display: 'inline-block',
            position: 'absolute',
            top: '20%'
        }
    };

    const classes = useStyles();

    return (
        <ListItem divider={true}>
            <Grid item xs={'auto'} sm container>
                <Grid item xs container direction={"row"} spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom={true} variant="h6">
                            {name}
                        </Typography>
                        <Typography variant="body1" style={{ color: "black" }}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <MuiThemeProvider theme={theme}>
                        <div className={classes.root}>
                            <DataStudiesIconButton
                                name={nameIcons.SHOW}
                                size={"medium"}
                                color={"inherit"}
                                onClick={handleOpen}>
                            </DataStudiesIconButton>
                            {open && <DataStudiesDialog onClose={() => onDownload({name})}
                                                        onCancel={() => {
                                                            handleClose()
                                                        }}
                                                        textButton={"Download"} title={name}
                                                        description={description}
                                                        children={<DataStudiesDataModal
                                                            columns={columns}
                                                            name={name}
                                                            data={data}>
                                                        </DataStudiesDataModal>}/>}
                            <DataStudiesIconButton
                                name={nameIcons.DOWNLOAD}
                                size={"medium"}
                                color={"inherit"}
                                onClick={() => onDownload({name})}>
                            </DataStudiesIconButton>
                        </div>
                    </MuiThemeProvider>
                </Grid>
            </Grid>
        </ListItem>
    )
}

DataStudiesData.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.array.isRequired,
}

export default DataStudiesData