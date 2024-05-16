import { Button } from "@mui/material";
import PropTypes from "prop-types";

export function ButtonFormBlack({ children, ...rest }) {
  return (
    <>
      <Button
        variant="contained"
        {...rest}
        sx={{
          width: 400,
          height: 50,
          bgcolor: "#0F0F0F",
          "&:hover": { backgroundColor: "#A29686", color: "#0F0F0F" },
        }}
      >
        {children}
      </Button>
    </>
  );
}

ButtonFormBlack.propTypes = {
  children: PropTypes.node.isRequired,
};
