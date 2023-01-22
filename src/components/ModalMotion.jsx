import { motion } from "framer-motion";
import Backdrop from "../components/Backdrop";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
    duration: 0.1,
    type: "spring",
    damping: 25,
    stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const style = {
 
};

const Modal = ({ handleClose, text }) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <button className="mt-3" onClick={handleClose}>Close</button>
        </Box>
     
      </motion.div>
    </Backdrop>
  );
};


export default Modal;