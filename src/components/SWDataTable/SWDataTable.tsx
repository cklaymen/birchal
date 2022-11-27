import useQueryWithUrl from '../../hooks/useQueryWithUrl';
import SWData from '../../types/SWData';

const NUMBER_OF_COLUMNS_TO_DISPLAY = 5

const SWDataTable: React.FC<{useQuerySWData: () => ReturnType<typeof useQueryWithUrl<SWData<Object>>>}> = ({useQuerySWData}) => {
  const { data, isLoading, isError, setUrl } = useQuerySWData();

  if (isLoading) {
    return <div>Loading data...</div>;
  }
  if (isError) {
    return <div>Something went wrong.</div>;
  }
  if (!data) {
    return <div>There is no data.</div>;
  }

  return (
    <div>
      <button disabled={!data.previous} onClick={() => setUrl(data.previous)}>previous page</button>
      <button disabled={!data.next} onClick={() => setUrl(data.next)}>next page</button>
      <table>
        <thead>
          <tr>
          {Object.keys(data.results[0]).slice(0,NUMBER_OF_COLUMNS_TO_DISPLAY).map(key => <th key={key}>{key}</th>)}</tr>
        </thead>
        <tbody>
        {data.results.map((row) => {
          const rowValues = Object.values(row)
          return(
          <tr key={rowValues[0]}>
            {rowValues.slice(0,NUMBER_OF_COLUMNS_TO_DISPLAY).map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        )})}
        </tbody>
      </table>
    </div>
  );
};

export default SWDataTable;
