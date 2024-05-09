import PropTypes from "prop-types";
import { TextField } from "@mui/material";


export function InputForm({ labelText, required, ...rest }) {
  return (
  
      <TextField
        color="error"
        variant="outlined"
        label={labelText}
        {...rest}
        sx={{ width: 250 }}
        required={required}  
      
      />

  );
}

InputForm.propTypes = {
  labelText: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
};
