import "@/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import Portfolio from "@/pages/Portfolio";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}

export default App;
