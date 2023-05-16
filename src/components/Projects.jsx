import React from 'react'
import eoBoz from '../assets/homeboz.png'
import stayapp from '../assets/stayapp.png'
import altaDashboard from '../assets/altaDashboar.png'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Projects = () => {

    const style = {
        position: 'absolute',
        top: '15%',
        left: '5%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
  
    return (
        <div className='container px-20 py-20 text-left'>
            <section>
            <div data-aos="fade-right" className='text-white overflow-x-hidden'>
                <p className='text-4xl'>My projects</p>
                <p className='my-5 text-lg'>I have created 3 projects which is all projects i worked on with the backend. 
                I used the React library to build all projects and deploy them with Vercel
                <p className='mt-5'>Lets check my projects below</p>
                </p>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3 my-10'>
                <div data-aos="fade-up-right" className='text-white text-left'>
                    <a className='cursor-pointer text-2xl underline underline-offset-6' onClick={handleOpen}>Eo-Bozz</a>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box data-aos="flip-left" sx={style}>
                            <img src={eoBoz}/>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <span className='font-bold'>EO-Bozz</span><br/>is an application that provides EO (Event Organizer) services with various choices, verified
                                and clear reviews of the activities that the EO has handled. Become an intermediary between the EO
                                and customers who need their services so as to prevent the above problems from happening in your
                                life. We built this website with Javascript library React-Vite and deploy with Vercel. See the source on
                                <a href="https://github.com/gilangsup/EO-Bozz-Frontend-ReactJS" target="_blank" className='cursor-pointer'> Github</a> for detail.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div data-aos="fade-up-left" className='text-white text-left'>
                    <a className='cursor-pointer underline underline-offset-6 text-2xl' onClick={handleOpen1}>Stay-App</a>
                    <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box data-aos="flip-left" sx={style}>
                            <img src={stayapp} />
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <span className='font-bold'>Stay</span><br />Stay is a web app marketplace for homestays and short-term experiences. We built this website with
                                Javascript framework NextJS and deploy with Netlify. We were inspired by Airbnb but with our own
                                sense of design. See the source on Github for detail.
                                <a href="https://github.com/gilangsup/Stay-App-Frontend" target="_blank" className='cursor-pointer'> Github</a> for detail.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div data-aos="fade-up-right" className='text-white text-left'>
                    <a className='cursor-pointer underline underline-offset-6 text-2xl' onClick={handleOpen2}>Dashboard Office</a>
                    <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box data-aos="flip-left" sx={style}>
                            <img src={altaDashboard} />
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <span className='font-bold'>Stay</span><br />Dashboard Office is an online reporting website dashboard that manages data simulations, classes,
                                users & mentors from Alterra Academy. We built this website with library Javascript React-Vite and
                                other tools like Redux and DaisyUI. See the source on Github for detail.
                                <a href="https://github.com/gilangsup/Dashboard-Alta" target="_blank" className='cursor-pointer'> Github</a> for detail.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Projects
