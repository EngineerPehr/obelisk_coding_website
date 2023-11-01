import Obelisk from '../assets/images_and_logos/logo_white_cropped.png'
import { BsPersonVcard } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { BsEnvelope } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
const GitHub = 'https://github.com/EngineerPehr'
const LinkedIn = 'https://www.linkedin.com/in/pehr-lofgreen/'

function Sidebar () {
    return (
        <div className='fixed top-0 left-0 h-screen w-20 flex flex-col justify-between bg-charcoal-500 shadow z-50 overflow-hidden'>
            <div>
                <a href='#Home'>
                    <img src={Obelisk} alt='Logo' className='sidebar-icon w-20 h-20'/>
                </a>
            </div>
            <div>
                <a href='#About'>
                    <SidebarIcon icon={<BsPersonVcard size='40'/>} text='About'/>
                </a>
                <a href='#Projects'>
                    <SidebarIcon icon={<CgWebsite size='40'/>} text='Portfolio'/>
                </a>
                <a href='#Contact'>
                    <SidebarIcon icon={<BsEnvelope size='40'/>} text='Contact'/>
                </a>
            </div>
            <div>
                <a href={GitHub} target='_blank'>
                    <SidebarIcon icon={<FaGithub size='40'/>} text='GitHub'/>
                </a>
                <a href={LinkedIn} target='_blank'>
                    <SidebarIcon icon={<FaLinkedin size='40'/>} text='LinkedIn'/>
                </a>
            </div>
        </div>
    )
}

function SidebarIcon ({ icon, text = 'text' }) {
    return (
        <div className='sidebar-icon group'>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100 z-50'>
                {text}
            </span>
        </div>
    )
}

export default Sidebar