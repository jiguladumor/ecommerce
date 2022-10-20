import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { resetalert } from '../container/redux/action/alert.action';


export default function Alert() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()
  console.log("Alert");

  useEffect(() => {
    if (alert.text !== '') {
      enqueueSnackbar(alert.text, {
        variant:alert.color,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      });
      setTimeout(dispatch(resetalert()) ,2000)
    }

  }, [alert.text])


  return (
    <div>

    </div>
  )
}

