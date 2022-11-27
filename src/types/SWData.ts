interface SWData<T extends Object> {
  count: number;
  next: string;
  previous: string;
  results: Array<T>;
}

export default SWData;
