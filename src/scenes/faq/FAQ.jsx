import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../themes";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="F.A.Q." description="Frequenty Asked Questions." />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Why cannot I see the dashboard in my workspace?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Dashboards are not available for the customers with fiscal calendars.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What user role should I have to use dashboards?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          ll workspace users can view dashboards and set up alerts on KPI
          changes (see Add an Alert to a KPI). Only workspace editors,
          explorers, and administrators can Create Dashboards.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Whom are dashboards shared with?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Dashboards are always visible to all workspace users. Any change you
          save is immediately visible to all workspace users.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I change the default date filter for a dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Editors, explorers, and administrators can change the default date
          filter to a different period. The new value applies to the whole
          dashboard for all viewers. Viewers can temporarily change the date
          filter. The new value also applies to the whole dashboard but visible
          only to the current viewer.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
