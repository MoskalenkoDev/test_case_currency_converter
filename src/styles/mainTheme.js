import { createTheme} from "@mui/material/styles";
import { grey} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
      neutral: {
        main: grey[500],
        contrastText: 'white',
      },
    },
  });