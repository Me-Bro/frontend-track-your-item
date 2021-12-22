import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { addRecords } from "../Service/api";
import { useHistory } from "react-router-dom";

const initialValue = {
  cat: "",
  desc: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const AddData = () => {
  const [data, setData] = useState(initialValue);
  const { cat, desc } = data;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const addDetails = async () => {
    await addRecords(data);
    history.push("/");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add About Record</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Category</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="cat"
          value={cat}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Desc</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="desc"
          value={desc}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addDetails()}
        >
          Add Record
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddData;
