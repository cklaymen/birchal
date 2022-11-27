import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';

import { globalStyles } from './stitches.config';
import router from './router';

const queryClient = new QueryClient();

function App() {
  globalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
