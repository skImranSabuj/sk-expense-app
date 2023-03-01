import "./App.css";
import ExpenseDashboard from "./components/ExpenseDashBoard/ExpenseDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppContextProvider from "./context/AppContext";
import Layout from "./components/Layout";

const queryClient = new QueryClient();
function App() {
  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ExpenseDashboard />} />
              {/* OTHER ROUTES HERE  */}
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default App;
