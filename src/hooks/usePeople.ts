import SWData from '../types/SWData';
import useQueryWithUrl from './useQueryWithUrl';

const usePeople = () =>
  useQueryWithUrl<SWData<Object>>('https://swapi.dev/api/people');

export default usePeople;
