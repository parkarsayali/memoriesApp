import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "8rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
  root: {
    "& .MuiTextField-root": {
      margin: "1rem",
    },
  },
  avatar: {
    margin: "1rem",
    backgroundColor: "secondary",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "3rem",
  },
  submit: {
    margin: "2rem",
  },
  googleButton: {
    // marginBottom: 2,
    margin: "2rem, 2rem, 0rem, 2rem",

    // margin: "2rem",
  },
}));
export { useStyles };
