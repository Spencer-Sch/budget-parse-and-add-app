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
    '@media (max-width: 1280px)': {
      height: '65vh',
      width: '90vw',
    },
    '@media (max-width: 999px)': {
      marginTop: '8vh',
      height: '75vh',
      width: '90vw',
    },
    '@media (max-width: 599px)': {
      margin: '0',
      height: '100vh',
      width: '100vw',
    },
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  h1: {
    fontSize: '4rem',
    margin: '2rem 0 2rem 0',
    fontWeight: 'bold',
    '@media (max-width: 1280px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 999px)': {
      margin: '3.8rem 0 2rem 0',
      fontSize: '3rem',
    },
    '@media (max-width: 800px)': {
      fontSize: '2.5rem',
    },
    '@media (max-width: 675px)': {
      fontSize: '2.2rem',
    },
    '@media (max-width: 599px)': {
      margin: '1.2rem 0 1rem 0',
      fontSize: '2rem',
    },
  },
  typographyInstructions: {
    '@media (max-width: 1280px)': {
      fontSize: '1rem',
    },
    '@media (max-width: 599px)': {
      fontSize: '0.8rem',
    },
  },
  TextField: {
    marginTop: '1rem',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '4px',
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
    '@media (max-width: 1280px)': {
      width: '15rem',
      fontSize: '1.5rem',
    },
    '@media (max-width: 999px)': {
      width: '18rem',
      fontSize: '1.8rem',
    },
    '@media (max-width: 599px)': {
      width: '100%',
      fontSize: '1.2rem',
      borderRadius: '0',
    },
  },
  buttonGrid: {
    margin: '2rem 0 3rem 0',
    '@media (max-width: 599px)': {
      margin: '1.8rem 0 1.5rem 0',
    },
  },
  typographyTotal: {
    marginRight: '0.5rem',
    '@media (max-width: 1280px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 599px)': {
      fontSize: '2rem',
    },
  },
  typographyError: {
    color: 'red',
    marginRight: '0.5rem',
    '@media (max-width: 1280px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 599px)': {
      fontSize: '1.1rem',
    },
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
        <>
          <Typography variant="h4" className={classes.typographyError}>
            Error! Please ensure all "$" and&nbsp;
          </Typography>
          <Typography variant="h4" className={classes.typographyError}>
            "," are in the correct place.
          </Typography>
        </>
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
          <Grid item xs={12} sm={10} md={8} justifyContent="center">
            <Typography variant="h1" align="center" className={classes.h1}>
              Budget Parse and&nbsp;Add&nbsp;App
            </Typography>
          </Grid>
          <Grid container item xs={11} sm={10} md={8}>
            <Typography variant="h6" className={classes.typographyInstructions}>
              Include dollar sign '$' before each item's value&nbsp;
            </Typography>
            <Typography variant="h6" className={classes.typographyInstructions}>
              <b>AND</b> separate each item with a comma ','
            </Typography>
          </Grid>
          <Grid container item justifyContent="center" xs={12} sm={10} md={8}>
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
              inputProps={{
                style: {
                  overflow: 'auto',
                  maxHeight: '11.8rem',
                },
              }}
            />
          </Grid>
          <Grid
            container
            item
            justifyContent="center"
            xs={12}
            sm={10}
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
          <Grid container item justifyContent="center" xs={11} sm={10} md={12}>
            {totalElementOutput}
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default App;
