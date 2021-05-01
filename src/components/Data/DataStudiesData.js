import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import {createMuiTheme, makeStyles, Modal, MuiThemeProvider} from "@material-ui/core";
import DataStudiesIconButton from "../IconButton";
import DataStudiesDataModal from "../DataModal";

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
        modal : {
            marginTop: 'auto',
            display: 'inline-block',
            position: 'absolute',
            top: '20%'
        }
    };

    const classes = useStyles();

    return(
        <ListItem>
            <Grid item xs={'auto'} sm container>
                <Grid item xs container direction={"row"} spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom={true} variant="subtitle1">
                            {name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <MuiThemeProvider theme={theme}>
                        <div className={classes.root}>
                            <DataStudiesIconButton
                                name={'show'}
                                color={'secondary'}
                                size={'10'}
                                background={'COLOR_BLUE'}
                                onClick={handleOpen}>
                            </DataStudiesIconButton>
                            <Modal
                                open={open}
                                style={inlineStyle.modal}
                                onClose={handleClose}>
                                <DataStudiesDataModal
                                    columns={columns}
                                    name={name}
                                    data={data}>
                                </DataStudiesDataModal>
                            </Modal>
                            <DataStudiesIconButton
                                name={'download'}
                                color={'primary'}
                                size={'10'}
                                background={'COLOR_BLUE'}
                                onClick={()=>onDownload({name})}>
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