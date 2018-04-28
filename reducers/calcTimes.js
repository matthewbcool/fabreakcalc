import { BREAK_START_TIME, LANDING_TIME, LAST_SERVICE_SELECTION, INTERVAL_SELECTION, CALCULATE_BREAKS } from '../actions/timeCalcActions';

const initialState = {
  startTime: "0:00",
  landTime: "0:00",
  lastServiceTimeSelect: '0',
  selectedIndex: '0',
  twoBreakStart: "0:00",
  threeBreakStart: "0:00",
  oneBreakEnd: "0:00",
  twoBreakEnd: "0:00",
  threeBreakEnd: "0:00",
  timePerBreak: "0:00",
  followOnStart: "0:00",
  timePerBreak: "0",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BREAK_START_TIME:
      return {
          ...state,
          startTime: action.startTime || 0,
      };
    case LANDING_TIME:
      return {
          ...state,
          landTime: action.landTime || 0,
      }
    case LAST_SERVICE_SELECTION:
       return {
           ...state,
           lastServiceTimeSelect: action.lastServeTimeSelect || 0,
       }
    case INTERVAL_SELECTION:
      return {
          ...state,
          selectedIndex: action.selectedIndex || 0,
      }
    case CALCULATE_BREAKS:
      return {
        ...state,
        twoBreakStart: action.twoBreakStart || 0,
        threeBreakStart: action.threeBreakStart || 0,
        oneBreakEnd: action.oneBreakEnd || 0,
        twoBreakEnd: action.twoBreakEnd || 0,
        threeBreakEnd: action.threeBreakEnd || 0,
        timePerBreak: action.timePerBreak || 0,
        followOnStart: action.followOnStart || 0,
      }
    default:
      return state;
  }
};
