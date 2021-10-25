import {
  Box,
  Button,
  Card,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 'auto',
    padding: '0',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.light,
    marginTop: '3rem',
  },
  h1: {
    fontSize: '4rem',
  },
  button: {
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Card elevation={10} className={classes.card}>
        <Typography variant="h1" className={classes.h1}>
          Budget Parse and Add App
        </Typography>
        <Typography variant="subtitle2">
          Include dollar sign '$' before each item's value. Separate each item
          with a comma ','
        </Typography>
        <TextField
          variant="outlined"
          id="outlined-textarea"
          label="Add Budget Items Here..."
          placeholder="Ex: coffee $5, gas $20, dinner $15"
          multiline
          fullWidth
          minRows={10}
        />
        <Button variant="filled" className={classes.button}>
          Get Total
        </Button>
        <Typography variant="h2">Total:</Typography>
        <Typography variant="h2">$300</Typography>
      </Card>
    </Container>
  );
}

export default App;
