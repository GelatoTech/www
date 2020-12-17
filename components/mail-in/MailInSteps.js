import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import '@material-ui/core/styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Assignment from '@material-ui/icons/Assignment';
import Payment from '@material-ui/icons/Payment';
import Mail from '@material-ui/icons/Mail';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Build from '@material-ui/icons/Build';
import CheckCircle from '@material-ui/icons/CheckCircle';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <Assignment />,
    2: <Payment />,
    3: <Mail />,
    4: <MonetizationOnIcon />,
    5: <Build />,
    6: <Mail />,
    7: <CheckCircle />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Submit Mail-In Form', 
    'Pay Diagnostic Fee', 
    'Mail Your Device', 
    'Get Repair Estimate', 
    'Device Repaired', 
    'Pay Invoice', 
    'Receive Device'
  ];
}

export default function MailInSteps(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(7);
  const steps = getSteps();

  const router = useRouter();

  useEffect(() => {
    const { query: { step } } = router;
    setTimeout(() => {
      props.step
        ? setActiveStep(props.step)
        : setActiveStep(step);
    }, 10);
  })

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions} style={{ textAlign: 'center' }}>
              Thank you for choosing Gelatotech!
            </Typography>
            {/* <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
          </div>
        ) : null
        }
      </div>
    </div>
  );
}
