import React from 'react'
// Material ui
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import {
  Add,
  CloudUpload
} from '@material-ui/icons'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 'auto'
  },
  button: {
    margin: theme.spacing(1)
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

export default function Contrarecibo () { 
  const classes = useStyles()
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <Grid container>
      <Grid item xs={12} md={12} lg={12}>
        <TableContainer component={Paper} className={fixedHeightPaper}>
          <div className={classes.titleContainer}>
            <div className={classes.title}>Contrerecibo</div>
            <Button variant='outlined' startIcon={<CloudUpload />} className={classes.button}>Cargar Contrarecibo</Button>
          </div>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Fondo</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Beneficiario</TableCell>
                <TableCell align='right'>Importe</TableCell>
                <TableCell align='right'>Contrarecibo</TableCell>
                <TableCell align='right'>Fecha</TableCell>
                <TableCell align='right'>Cheque</TableCell>
                <TableCell align='right'>Estatus</TableCell>
                <TableCell align='right'>Agregar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key=''>
                <TableCell>0</TableCell>
                <TableCell>Fondo Revolvente</TableCell>
                <TableCell>JESUS IVAN VARGAS ESPINDOLA</TableCell>
                <TableCell align='right'>$ 100.00</TableCell>
                <TableCell align='right'>Contra</TableCell>
                <TableCell align='right'>25/08/2021</TableCell>
                <TableCell align='right'>ch-12788</TableCell>
                <TableCell align='right'>Contrarecibo Agregado</TableCell>
                <TableCell align='right'>
                  <Add />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}
