import { City } from '../Cities/City';
import DATA from './wrapped_compact_cities.json';

const cities: City[] = (DATA as any).cities;
export { cities };
