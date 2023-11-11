import { FaNodeJs, FaGitAlt, FaPython, FaHtml5, FaReact, FaJsSquare, FaCss3 } from 'react-icons/fa'
import { SiTailwindcss, SiPostgresql } from 'react-icons/si'
function About () {
    return (
        <div id='About' className='my-5'>
            <div>
                <h3 className='text-4xl font-semibold mb-3 text-flame'>About Me:</h3>
                <p className='mb-3'>
                    Junior software engineer proficient in full-stack development. Skilled in front-end and back-end programming, I have a solid understanding of frameworks and possess strong problem-solving abilities. With a background in corrections, I excel at finding solutions and collaborating effectively in dynamic environments.
                </p>
                <h4 className='text-3xl font-semibold mb-3 text-flame'>Skills:</h4>
                <div className='grid grid-cols-3 sm:flex sm:flex-row sm:justify-around'>
                    <div className='breathe animate-delay-[0.5s] text-center mb-2 group'>
                        <FaJsSquare color='#F7DF1E' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>JavaScript</span>
                    </div>
                    <div className='breathe animate-delay-[1s] text-center mb-2 group'>
                        <FaNodeJs color='#6CC24A' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>NodeJS</span>
                    </div>
                    <div className='breathe animate-delay-[1.5s] text-center mb-2 group'>
                        <FaReact color='#5ED4f4' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>ReactJS</span>
                    </div>
                    <div className='breathe animate-delay-[2s] text-center mb-2 group'>
                        <FaPython color='#FFDE57' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>Python3</span>
                    </div>
                    <div className='breathe animate-delay-[2.5s] text-center mb-2  group'>
                        <FaHtml5 color='#F06529' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>HTML 5</span>
                    </div>
                    <div className='breathe animate-delay-[3s] text-center mb-2 group'>
                        <FaCss3 color='#264DE4' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>CSS 3</span>
                    </div>
                    <div className='breathe animate-delay-[3.5s] text-center mb-2 group'>
                        <SiTailwindcss color='#38BDF8' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>Tailwind CSS</span>
                    </div>
                    <div className='breathe animate-delay-[4s] text-center mb-2 group'>
                        <FaGitAlt color='#DD0031' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>Git</span>
                    </div>
                    <div className='breathe animate-delay-[4.5s] text-center mb-2 group'>
                        <SiPostgresql color='#0064A5' className='icon'/>
                        <span className='opacity-0 md:opacity-100 group-hover:opacity-100'>PostgreSQL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About