import {
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0',
    marginTop: '10vh',
    height: '70vh',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  h1: {
    fontSize: '4rem',
    margin: '1rem 0 2rem 0',
  },
  textarea: {
    marginTop: '0.5rem',
  },
  button: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2rem',
    padding: '0.5rem',
    width: '20rem',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonGrid: {
    margin: '2rem 0 3rem 0',
  },
  typographyTotal: {
    marginRight: '0.5rem',
  },
  typographyDollarAmount: {
    marginLeft: '0.5rem',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Card elevation={10} className={classes.card}>
        <Grid container justifyContent="center" xs={12}>
          <Grid item xs={12} justifyContent="center">
            <Typography variant="h1" align="center" className={classes.h1}>
              Budget Parse and Add App
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1">
              Include dollar sign '$' before each item's value. Separate each
              item with a comma ','
            </Typography>
            <TextField
              variant="outlined"
              id="outlined-textarea"
              label="Add Budget Items Here..."
              placeholder="Ex: coffee $5, gas $20, dinner $15"
              multiline
              fullWidth
              minRows={10}
              className={classes.textarea}
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid
            container
            item
            justifyContent="center"
            xs={12}
            className={classes.buttonGrid}
          >
            <Button variant="filled" className={classes.button}>
              Get Total
            </Button>
          </Grid>
          <Grid container item justifyContent="center" xs={12}>
            <Typography variant="h2" className={classes.typographyTotal}>
              Total: $<span id="totalSpan">0</span>
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
