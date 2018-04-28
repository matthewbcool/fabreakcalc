import moment from 'moment';
import Moment from 'react-moment';

export const BREAK_START_TIME = 'BREAK_START_TIME';
export const LANDING_TIME = 'LANDING_TIME';
export const LAST_SERVICE_SELECTION = 'LAST_SERVICE_SELECTION';
export const INTERVAL_SELECTION = 'INTERVAL_SELECTION';
export const CALCULATE_BREAKS = 'CALCULATE_BREAKS';

export const breakStartTime = startTime => ({
  type: BREAK_START_TIME,
  startTime: moment(startTime).format('HH:mm'),
});

export const landingTime = landTime => ({
    type: LANDING_TIME,
    landTime: moment(landTime).format('HH:mm'),
  });

export const lastServiceSelection = lastServeTimeSelect => ({
    type:  LAST_SERVICE_SELECTION,
    lastServeTimeSelect,
});

export const intervalSelection = selectedIndex => ({
    type: INTERVAL_SELECTION,
    selectedIndex,
});

export const calculateBreaks = (twoBreakStart, threeBreakStart, twoBreakEnd, oneBreakEnd, threeBreakEnd, timePerBreak, followOnStart)  => ({
    type: CALCULATE_BREAKS,
    twoBreakStart,
    threeBreakStart,
    oneBreakEnd,
    twoBreakEnd,
    threeBreakEnd,
    timePerBreak,
    followOnStart,
});