import ReactTooltip from 'react-tooltip';

export function MailInSteps(props) {

  const steps = [
    { 
      title: 'Submit Mail-In Form', 
      tooltip: `Fill out the Mail-On Form, make sure all information is correct, and write a clear description of the device problem.`}, 
    { 
      title: '$40 Diagnostic Fee', 
      tooltip: `We first run a diagnostic test to find the problem with your device. Once we find the problem, we will contact you & tell you the cost of the repair. If you approve the repair cost, we will put the $40 diagnostic fee towards your repair. If you disapprove the repair cost, we will ship back your device and only charge you $40 for the diagnostic fee.`
    }, 
    { 
      title: 'Mail Your Device', 
      tooltip: `Once you ship your device to us, we will contact you to confirm your mail-in device repair.`
    }, 
    { 
      title: 'Get Repair Estimate', 
      tooltip: `Once we do the diagnostic test and find the problems. We will contact you and give you an estimate on your device repair.`
    }, 
    { 
      title: 'Device Repaired', 
      tooltip: `Once the repair is done, we will test your device to make sure everything works before shipping back.`
    }, 
    { 
      title: 'Pay Invoice', 
      tooltip: `After the repair & test is done, we will send you an Invoice via Stripe. We also accept Bitcoin for payment if you prefer to pay with crypto.`
    }, 
    { 
      title: 'Receive Device', 
      tooltip: `After we receive the payment, we will ship your device same-day <br/>and provide you a shipping tracking number. Once you receive your device, make sure to test everything and reach out to us if there is any problem.`
    },
  ];

  return (
    <div className="container">
      <div style={{ marginLeft: '1em', marginBottom: '2em' }}>
        <h1 className="title">How It Works</h1>
        <h1 className="subtitle has-text-grey" style={{ fontSize: '0.8em' }}>Hover over steps for more info</h1>
      </div>
      <ul className="list-unstyled multi-steps">
        {
          steps.map((step, i) => (
            <li 
              key={i}
              data-tip={step.tooltip}
              style={{ width: '8em' }}
              className={(props.step === i) ? 'is-active' : null}>
                <ReactTooltip insecure multiline clickable place="top" className="tooltip" />
                {step.title}
            </li>
            )
          )
        }
      </ul>
      <br /><br />
    </div>
  );

};