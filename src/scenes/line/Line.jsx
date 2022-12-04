import { Box } from "@mui/material";
import LineChart from "../../components/LineChart";
import Header from "../../components/Header";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line CHART" description="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
