import SWData from '../types/SWData';
import useQueryWithUrl from './useQueryWithUrl';

interface Film {
  name: string;
}

const useFilms = () =>
  useQueryWithUrl<SWData<Film>>('https://swapi.dev/api/films');

export default useFilms;
