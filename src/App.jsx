import { useState } from 'react'
import Profile from "./components/Profile"
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./components/ModalMotion";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Projects from './components/Projects';

function App() {

  return (
      <div className="w-full bg-gradient-to-r from-[#0f0c29] to-[#302b63]  ...">
        <Profile/>
      <Projects/>
      </div>

  )
}

export default App
