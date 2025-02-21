import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Layout } from "./components/layout";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

import "@mantine/core/styles.css";

function App() {
   return (
      <MantineProvider>
         <BrowserRouter>
            <Layout>
               <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/story/:id" element={<StoryPage />} />
               </Routes>
            </Layout>
         </BrowserRouter>
      </MantineProvider>
   );
}

export default App;
