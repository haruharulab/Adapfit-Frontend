import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as analytics from './ga4';

const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    analytics.init();
  }, []);

  useEffect(() => {
    const path = location.pathname + location.search;
    analytics.sendPageview(path);
  }, [location]);
}

export default useAnalytics;