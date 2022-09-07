import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Form, Formik, useFormik } from 'formik';



export default function DataTable() {

    // const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [Update, setUpdate] = useState();
    // const [dopen, setDopen] = React.useState(false);
    // const [did, setDid] = useState()
    
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
        name: yup.string().required('please enter name'),
        category:yup.string().required('please enter category'),
        price:yup.number().required('please enter price'),
        file: yup.mixed().required('please select file'),
      }
    
    
      let schema = yup.object().shape(datad);
    
      const Formik = useFormik({
        initialValues: {
          name: '',
          category:'',
          price:'',
          file: ''
        },
        validationSchema: schema,
        onSubmit: (value, { resetForm }) => {
          if (Update) {
            handleupdate(value)
          } else {
            handleSubmitdata(value)
          }
          resetForm();
        }
      })

      const handleupdate = (value) => {

      }

      const handleSubmitdata = (value) => {

      }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Name', headerName: 'Name', width: 130 },
        { field: 'Category', headerName: 'Category', width: 130 },
        { field: 'price', headerName: 'price', width: 130 },
        { field: 'url', headerName: 'FileName', width: 130 },
        {
            field: 'dalete', headerName: 'Dalete', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" onClick={() => { setDid(params.row); handleClickDopen(params.row) }}>
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
        },

        
    ];
    const handleEdit = (data) => {

    }

    const handleDelete = () => {

    }
    const loadData = () => {

    }

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];
    return (
        <>
        <div style={{ height: 400, width: '100%' }}>
            <Button variant="outlined" onClick={() => handleClickOpen()}>
                Add Data
            </Button>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add doctors</DialogTitle>
            <Formik value={formik}>
              <Form onSubmit={formik.handleSubmit}>
                <DialogContent>

                  <TextField
                    margin="dense"
                    id="name"
                    label="name"
                    type="name"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.name}
                    helperText={formik.errors.name}
                    error={formik.errors.name ? true : false}

                  />

                  <TextField
                    margin="dense"
                    id="category"
                    label="category"
                    type="category"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.category}
                    helperText={formik.errors.category}
                    error={formik.errors.category ? true : false}
                  />
                  <TextField
                    margin="price"
                    id="price"
                    label="price"
                    fullWidth
                    variant="standard"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.price}
                    helperText={formik.errors.price}
                    error={formik.errors.price ? true : false}

                  />
                  <input
                    type="file"
                    name="file"
                    id="file"
                    fullWidth
                    variant="standard"
                    onChange={e => formik.setFieldValue("file", e.target.files[0])}
                  
                  />
                  {
                   <p style={{color:"red"}}>
                    {formik.errors.file && formik.errors.file}
                   </p> 
                  }
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {
                      Update ?
                        <Button type="submit">Update</Button>
                        :
                        <Button type="submit">Submit</Button>
                    }
                  </DialogActions>
                </DialogContent>
              </Form>
            </Formik>
          </Dialog>
        </>  
    );
}
