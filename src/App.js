import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Bar from "./scenes/bar/Bar";
import Calendar from "./scenes/calendar/Calendar";
import Contacts from "./scenes/contacts/Contacts";
import Dashboard from "./scenes/dashboard/Dashboard";
import FAQ from "./scenes/faq/FAQ";
import Form from "./scenes/form/Form";
import Geography from "./scenes/geography/Geography";
import SideBar from "./scenes/global/SideBar";
import TopBar from "./scenes/global/TopBar";
import Invoices from "./scenes/invoices/Invoices";
import Line from "./scenes/line/Line";
import Pie from "./scenes/pie/Pie";
import Team from "./scenes/team/Team";
import { ColorModeContext, useColorMode } from "./themes";

function App() {
  const [theme, colorMode] = useColorMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/dashboard-react" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
