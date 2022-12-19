import ga4 from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
const isProduction = process.env.NODE_ENV === 'production';

export const init = () => {
    if (!TRACKING_ID) return console.error('GA 추적ID 없음');
    ga4.initialize(TRACKING_ID, { 
        testMode: !isProduction 
    });
}

export const sendEvent = (name: string) => ga4.event('screen_view', {
  app_name: "adapfit_web",
  screen_name: name,
});

export const sendPageview = (path: string) => ga4.send({ 
  hitType: 'adapfit_web', 
  page: path 
});