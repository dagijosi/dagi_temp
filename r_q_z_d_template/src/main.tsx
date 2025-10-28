import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CustomError } from './utils/error.ts'
import { useAuthStore } from './store/authStore.ts'
import { toast } from 'sonner'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof CustomError) {
        if (error.statusCode === 401) {
          useAuthStore.getState().logout();
        }
      }
      else if (error instanceof TypeError && error.message === "Failed to fetch") {
        toast.error("No internet connection. Please check your network.");
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof CustomError) {
        if (error.statusCode === 401 || error.statusCode === 404) {
          useAuthStore.getState().logout();
        }
      }
      else if (error instanceof TypeError && error.message === "Failed to fetch") {
        toast.error("No internet connection. Please check your network.");
      }
    },
  }),
  defaultOptions: {
    queries: { retry: false },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
