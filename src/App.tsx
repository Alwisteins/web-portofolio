import { BrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
