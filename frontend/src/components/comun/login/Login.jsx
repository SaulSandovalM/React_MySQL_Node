import React, { useState } from 'react'
// Material Ui
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// importaciones necesarias
import UsuariosDataService from '../../../services/Usuarios'
// Estilos
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Login ({ setToken }) {
  const classes = useStyles()
  // const [usernameReg, setUsernameReg] = useState('')
  // const [passwordReg, setPasswordReg] = useState('')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // const createUsuario = () => {
  //   var data = {
  //     nombre: usernameReg,
  //     contraseña: passwordReg
  //   }
  //   UsuariosDataService.create(data).then(response => {
  //     this.useState({
  //       nombre: response.data.nombre,
  //       contraseña: response.data.contraseña
  //     })
  //     console.log(response.data)
  //   }).catch(e => {
  //     console.log(e)
  //   })
  // }

  const loginUsuario = () => {
    var data = {
      nombre: username,
      contraseña: password
    }
    UsuariosDataService.getAll(data).then(response => {
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <Container component='main' maxWidth='xs' className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='ususario'
            label='Usuario'
            name='ususario'
            autoFocus
            onChange={(e) => { setUsername(e.target.value) }}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <Button
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={loginUsuario}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {'No tienes cuenta? Entra aqui'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant='body2' color='textSecondary' align='center'>
          Copyright © Gobierno del Estado de Hidalgo {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  )
}
