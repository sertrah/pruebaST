import { ITrackingInfo } from '../elements/card-detail/ItrackingInfo';

export const filter = '@harlen/filter';
export const smartFilter = '@harlen/smartFilter';
export const reset = '@harlen/reset';
export const insertList = '@harlen/insertList';
export const addNewItem = '@harlen/addNewItem';

const initialState = {
  trackingInfo: null,
  tempTrackingInfo: null,
};

export function reducer(
  state: { trackingInfo: any; tempTrackingInfo: any } = initialState,
  { type, payload }
) {
  switch (type) {
    case filter:
      return Object.assign({}, state, {
        trackingInfo: filterList(searchByValue, state.tempTrackingInfo, payload)
      });
    case smartFilter:
          return Object.assign({}, state, {
            trackingInfo: filterList(searchByAttribute, state.tempTrackingInfo, payload ) 
          });
    case reset:
      return Object.assign({}, state, { trackingInfo: state.tempTrackingInfo });
    case insertList:
      return Object.assign({}, state, { trackingInfo: payload }, { tempTrackingInfo: payload });
    case addNewItem:
          return Object.assign({}, state, { trackingInfo: [payload, ...state.trackingInfo] }, { tempTrackingInfo: [payload, ...state.tempTrackingInfo] });
    default:
      return state;
  }
}

function filterList(callback, ...args): ITrackingInfo[] {
  return  callback.apply(this, args);
}

function searchByAttribute(tempTrackingList:ITrackingInfo[], attribute: string): ITrackingInfo[] {
  
  return  Object.entries(attribute).length === 0 ? 
  tempTrackingList:
  tempTrackingList.filter(search, attribute);
}

function search(tempTracking){
  return Object.keys(this).every((key) => {
    return key === "date" ? tempTracking["date"].getDate() === new Date().getDate() : tempTracking[key] === this[key] });
}
function searchByValue(tempTrackingList:ITrackingInfo[], filterValue: any): ITrackingInfo[] {
  return tempTrackingList.filter( x =>
    (x.departure
      ? x.departure.toLowerCase().indexOf(filterValue) !== -1
      : false) ||
    (x.arrival ? x.arrival.toLowerCase().indexOf(filterValue) !== -1 : false) ||
    (x.price ? x.price.toString().indexOf(filterValue) !== -1 : false) ||
    (x.amount ? x.amount.toString().indexOf(filterValue) !== -1 : false) ||
    (x.status ? (x.status === filterValue) : false) ||
    (x.date ? x.date.toString().indexOf(filterValue) !== -1 : false)
  );
}
