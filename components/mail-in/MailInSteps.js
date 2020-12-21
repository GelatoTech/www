export default function MailInSteps(props) {

  const steps = [
    'Submit Mail-In Form', 
    '$40 Diagnostic Fee', 
    'Mail Your Device', 
    'Get Repair Estimate', 
    'Device Repaired', 
    'Pay Invoice', 
    'Receive Device'
  ];

  return (
    <div className="container">
      <br /><br />
      <ul className="list-unstyled multi-steps">
        {
          steps.map((step, i) => {
            return (
              <li 
                key={i}
                style={{ width: '8em' }}
                className={(props.step === i) ? 'is-active' : null}>{step}</li>
            )
          })
        }
        {/* <li>Start</li>
        <li>First Step</li>
        <li className="is-active">Middle Stage</li>
        <li>Finish</li> */}
      </ul>
      <br /><br />
    </div>
  );

};