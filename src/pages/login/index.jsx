import { Button, TextField, Typography } from '@mui/material'
import styles from './style.module.css'

export function Login(){
    return(<div>
        <div>
            <Typography>Efetue seu login </Typography>
            <form>

            <TextField>Email</TextField>
            <TextField>Senha</TextField>
            <Button></Button>
            </form>
            <Button>Cadastr</Button>
        </div>
    </div>)
}