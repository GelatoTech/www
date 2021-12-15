import React, { useEffect, useState } from  'react';
import Router from 'next/router';
import ReactGA from 'react-ga';

const TrackingID = 'UA-121085071-1';
const TrackingContext = React.createContext();

function GATracking(props) {

    const handleRouteChange = url  => {
        ReactGA.set({ page:  url });
        ReactGA.pageview(url);
    };

    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (!isInitialized) {
            ReactGA.initialize(TrackingID)
            Router.events.on('routeChangeComplete', handleRouteChange);
            setIsInitialized(true);
        }

        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [isInitialized])

    return <TrackingContext.Provider {...props} />
}

const  useTracking = () =>  React.useContext(TrackingContext);

export { GATracking, useTracking };
