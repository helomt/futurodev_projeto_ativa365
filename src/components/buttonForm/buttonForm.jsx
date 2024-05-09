import PropTypes from "prop-types";
import { Button } from "@mui/material";

export function ButtonForm({ children, ...rest }) {
  return (
    <>
      <Button
        variant="contained"
        {...rest}
        sx={{
          width: 400,
          height: 50,
          bgcolor: "#FF0A1B",
          "&:hover": { backgroundColor: "#F35359" },
        }}
      >
        {children}
      </Button>
    </>
  );
}

ButtonForm.propTypes = {
  children: PropTypes.node.isRequired,
};
