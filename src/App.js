import {
  Button,
  Card,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

import { useEffect, useState } from 'react';

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
  TextField: {
    maxHeight: '15rem',
    marginTop: '0.5rem',
    backgroundColor: theme.palette.secondary.light,
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
  typographyError: {
    color: 'red',
    marginRight: '0.5rem',
  },
}));

function App() {
  const classes = useStyles();

  const [total, setTotal] = useState(0);
  const [budgetString, setBudgetString] = useState('');
  const [totalElementOutput, settotalElementOutput] = useState(
    `Total: $${total}`
  );

  useEffect(() => {
    if (total === 'NaN') {
      settotalElementOutput(
        <Typography variant="h4" className={classes.typographyError}>
          Error! Please ensure all "$" and "," are in the correct place.
        </Typography>
      );
    } else {
      settotalElementOutput(
        <Typography variant="h2" className={classes.typographyTotal}>
          Total: ${total}
        </Typography>
      );
    }
  }, [total, classes.typographyTotal, classes.typographyError]);

  const getTotal = () => {
    if (budgetString) {
      const valuesArr = [];
      const itemList = budgetString.split(',');

      itemList.forEach((item) => {
        const dollarSign = item.indexOf('$');
        const value = item.slice(dollarSign + 1);
        if (value) {
          valuesArr.push(+value);
        }
      });
      setTotal(valuesArr.reduce((total, num) => total + num).toFixed(2));
    }
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Card elevation={10} className={classes.card}>
        <Grid container justifyContent="center" xs={12}>
          <Grid item xs={12} justifyContent="center">
            <Typography variant="h1" align="center" className={classes.h1}>
              Budget Parse and Add App
            </Typography>
          </Grid>
          <Grid container item xs={8}>
            <Typography variant="h6">
              Include dollar sign '$' before each item's value. Separate each
              item with a comma ','
            </Typography>
          </Grid>
          <Grid container item justifyContent="center" xs={8}>
            <TextField
              value={budgetString}
              onChange={(e) => setBudgetString(e.target.value)}
              variant="outlined"
              id="outlined-textarea"
              label="Add Budget Items Here..."
              placeholder="Ex: coffee $5, gas $20, dinner $15"
              multiline
              fullWidth
              minRows={10}
              className={classes.TextField}
            />
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            xs={12}
            className={classes.buttonGrid}
          >
            <Button
              variant="filled"
              onClick={getTotal}
              className={classes.button}
            >
              Get Total
            </Button>
          </Grid>
          <Grid container item justifyContent="center" xs={12}>
            {totalElementOutput}
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
