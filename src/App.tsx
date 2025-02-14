import { HashRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

import "@mantine/core/styles.css";

function App() {
   return (
      <MantineProvider>
         <HashRouter>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/story" element={<StoryPage />} />
            </Routes>
         </HashRouter>
      </MantineProvider>
   );
}

export default App;
