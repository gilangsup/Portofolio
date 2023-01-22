import { useState } from 'react'
import Profile from "./components/Profile"
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./components/ModalMotion";

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
      <div className="w-full h-full bg-gradient-to-r from-[#0f0c29] to-[#302b63]  ...">
        <Profile/>
      <div className="container px-20 py-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={() => (modalOpen ? close() : open())}
        >
          Launch modal
        </motion.button>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
  
          onExitComplete={() => null}
        >
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
      </div>
      </div>

  )
}

export default App
