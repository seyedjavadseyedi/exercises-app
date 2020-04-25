import {createMuiTheme} from '@material-ui/core/styles'
import { purple, amber } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: amber,
        type: 'dark'
    }
})