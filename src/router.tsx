import { createBrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import SWDataTable from './components/SWDataTable/SWDataTable';
import useFilms from './hooks/useFilms';
import usePeople from './hooks/usePeople';
import usePlanets from './hooks/usePlanets';
import routePaths from './routePaths';

const router = createBrowserRouter([
  {
    path: routePaths.root,
    element: <Layout />,
    children: [
      {
        path: routePaths.films,
        element: <SWDataTable key="films" useQuerySWData={useFilms} />,
      },
      {
        path: routePaths.people,
        element: <SWDataTable key="people" useQuerySWData={usePeople} />,
      },
      {
        path: routePaths.planets,
        element: <SWDataTable key="planets" useQuerySWData={usePlanets} />,
      },
    ],
  },
]);

export default router;
