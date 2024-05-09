import PropTypes from "prop-types";
import { Button } from "@mui/material";

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
            "&:hover": { backgroundColor: "#70675C" },
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
