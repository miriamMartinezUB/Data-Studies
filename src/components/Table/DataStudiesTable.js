import React from 'react'
import {DataGrid} from '@material-ui/data-grid';
import PropTypes from 'prop-types'
import {Grid, Snackbar, Typography} from "@material-ui/core";
import DataStudiesIconButton from "../IconButton";
import {nameIcons} from "../../constants/icons";
import DataStudiesDialog from "../Dialog";
import DataStudiesTextArea from "../TextArea";

const DataStudiesTable = ({columns, rows, name}) => {
    const [showMailIcon, setShowMailIcon] = React.useState(false);
    const [disableModalButton, setDisableModalButton] = React.useState(true);
    const [showSnackBar, setShowSnackBar] = React.useState(false);
    const [textSnackBar, setTextSnackBar] = React.useState("Succesfully sended");
    const [notificationText, setNotificationText] = React.useState(null);
    const [openModal, setOpenModal] = React.useState(false);
    const [modalDescription, setModalDescription] = React.useState("An email will be sent to patient/s:");
    const pageSize = 5

    return (
        <Grid container item
              direction={"column"}
              justify={"flex-end"}>
            {showSnackBar &&
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={showSnackBar}
                autoHideDuration={2500}
                onClose={() => {
                    setShowSnackBar(false)
                }}
                message={textSnackBar}

            />}
            {openModal && <DataStudiesDialog title={"Send Notification"}
                                             description={modalDescription}
                                             textButton={"Send"}
                                             disableModal={disableModalButton}
                                             children={
                                                 <DataStudiesTextArea
                                                     defaultMessage={"Write here"}
                                                     minRowSize={10}
                                                     maxChars={100}
                                                     maxRowSize={10}
                                                     required={true}
                                                     onChange={(text) => {
                                                         setDisableModalButton(false);
                                                         setNotificationText(text);
                                                     }}
                                                 />
                                             }
                                             onClose={() => {
                                                 if (notificationText == null) {
                                                     setTextSnackBar("You must write a message to can send")
                                                     setShowSnackBar(true)
                                                 } else {
                                                     setTextSnackBar("Succesfully sended")
                                                     setNotificationText(null)
                                                     setModalDescription("An email will be sent to patient/s:")
                                                     setOpenModal(false)
                                                     setShowSnackBar(true)
                                                 }
                                                 setDisableModalButton(true)
                                             }}
                                             onCancel={() => {
                                                 setTextSnackBar("Succesfully sended")
                                                 setNotificationText(null)
                                                 setOpenModal(false)
                                             }}/>}

            <Grid container item
                  alignItems={"center"}
                  direction={"row"}
                  justify={"space-between"}
                  style={{marginBottom: "20px"}}>
                <Grid>
                    <Typography display={'inline'} variant={"h4"}>
                        {`Reports of `}
                    </Typography>
                    <Typography display={'inline'} variant={"h4"}>
                        <b>{name}</b>
                    </Typography>
                </Grid>
                {showMailIcon &&
                <DataStudiesIconButton
                    name={nameIcons.MAIL}
                    color={"primary"}
                    size={"medium"}
                    onClick={() => {
                        setOpenModal(true);
                    }}/>}
            </Grid>
            <Grid container item
                  direction={"column"}
                  alignItems={"center"}>
                <div style={{height: 400, width: '100%'}}>
                    <DataGrid rows={rows} columns={columns} pageSize={pageSize} checkboxSelection
                              onSelectionModelChange={(param) => {
                                  console.log(param.selectionModel)
                                  if (param.selectionModel.length === 0) {
                                      setShowMailIcon(false)
                                  } else {
                                      let patients = ""
                                      param.selectionModel.forEach((value, index) => {
                                          patients = patients + rows[index].id_patient
                                          if ((rows.length - 1) !== index) {
                                              patients = patients + ", "
                                          }
                                      })
                                      setModalDescription(`An email will be sent to patient/s: ${patients}`)
                                      setShowMailIcon(true)
                                  }
                              }}

                    />
                </div>
            </Grid>
        </Grid>
    )
}

DataStudiesTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}

export default DataStudiesTable
