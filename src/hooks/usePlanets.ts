import SWData from '../types/SWData';
import useQueryWithUrl from './useQueryWithUrl';

const usePlanets = () =>
  useQueryWithUrl<SWData<Object>>('https://swapi.dev/api/planets');

export default usePlanets;
