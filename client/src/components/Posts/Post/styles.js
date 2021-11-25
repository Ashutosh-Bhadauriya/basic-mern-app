import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "60px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "60px",
    position: "relative",
    padding: "15px",
  },

  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
});
