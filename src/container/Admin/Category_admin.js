// import Dialog  from './Dialog'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { DialogContentText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, Categorydata } from '../redux/action/category.action';


export default function Medicine() {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([])
  const [Update, setUpdate] = useState();
  const [dopen, setDopen] = React.useState(false);
  const [did, setDid] = useState()
  const dispatch = useDispatch();

  const handleClickDopen = (id) => {
    setDopen(true);
    setDid(id);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setUpdate()
  };

  const handleClose = () => {
    setOpen(false);
    setUpdate()
    setDopen()
    formik.resetForm();
  };



  let datad = {
    name: yup.string().required('enter name'),
    // price: yup.string().required('please enter price'),
    // Category: yup.string().required('please enter Category'),

  }

  let schema = yup.object().shape(datad);

  const formik = useFormik({
    initialValues: {
      name: '',
      // Category: '',
      // price: '',
    },
    validationSchema: schema,
    onSubmit: (value, { resetForm }) => {
      if(Update) {
        handleupdate(value)
      } else {
        handleSubmitdata(value)
      }
      resetForm();
    }
  })
  
  const handleupdate = (value) => {
    let localdata = JSON.parse(localStorage.getItem("users"));
    
    let udata = localdata.map((l, i) => {
      if(l.id === value.id) {
          return value;
      } else {
        return l;
      }
    })
    console.log(udata);

    localStorage.setItem("users", JSON.stringify(udata))
    setOpen(false)
    setUpdate()
    loadData()
  }

  const handleSubmitdata = (values) => {
    // console.log(values);
    // let localdata = JSON.parse(localStorage.getItem("users"))

    let data = {
      id: Math.floor(Math.random() * 1000),
      ...values
    }


    // if (localdata === null) {
    //   localStorage.setItem("users", JSON.stringify([data]))
    // } else {
    //   localdata.push(data)
    //   localStorage.setItem("users", JSON.stringify(localdata))
    // }

    dispatch(addCategory(values))

    setOpen(false);
    loadData()

  }

  const columns = [
    
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    
    {
      field: 'delete', headerName: 'Delete', width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleClickDopen(params.row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      )
    },
    {
      field: 'edit', headerName: 'Edit', width: 130,
      renderCell: (params) => (
        <>
          <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
            <CreateIcon />
          </IconButton>
        </>
      )
    }
  ];

  const handleEdit = (data) => {
    setOpen(true);
    setUpdate(data);
    formik.setValues(data);
    // console.log(data);
  }

  const handleDelete = (id) => {
    let localData = JSON.parse(localStorage.getItem("users"))

    let filterData = localData.filter((v, i) => v.id !== did);

    localStorage.setItem("users", JSON.stringify(filterData));
    loadData()
    setDopen(false)
  }

  const loadData = () => {
    let localData = JSON.parse(localStorage.getItem("users"))

    if (localData !== null) {
      setData(localData)
    }
  }


  useEffect(
    () => {
      dispatch(Categorydata())
      loadData()
    },
    [])

  return (
    <>

      <Box>
        <Container>
          <div>
          <Button variant="outlined" onClick={() => handleClickOpen()}>
              Add data
            </Button>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Add data</DialogTitle>
              <Formik value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="name Address"
                      type="name"
                      fullWidth
                      variant="standard"
                      onChange={formik.handleChange}
                      defaultValue={formik.values.name}
                      helperText={formik.errors.name}
                      error={formik.errors.name ? true : false}
                    />

                  </DialogContent>
                  <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                    {
                      Update ?
                      <Button type="submit">Update</Button>
                       :
                      <Button type="submit">Submit</Button>
                    }
                  </DialogActions>
                </Form>
              </Formik>
            </Dialog>
            <div>
            <Dialog
              open={dopen}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are You Sure Delete  Data ...? "}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">

                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleDelete()}>yes</Button>
                <Button onClick={handleClose}>No</Button>
              </DialogActions>
            </Dialog>
          </div>
          </div>
        </Container>
      </Box>

    </>
  )
}
