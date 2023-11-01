import Obelisk from '../assets/images_and_logos/logo_white_cropped.png'
function Home () {
    return (
        <div id='Home' className='flex flex-row justify-between '>
            <div className='py-20'>
                <h1 className='text-5xl font-semibold text-flame mb-10'>
                    Welcome to Obelisk Coding
                    <br/>
                    by Pehr Lofgreen.
                </h1>
                <h2 className='text-3xl font-semibold text-flame'>
                    Software Engineer | Full-Stack Developer | Problem Solver
                </h2>
            </div>
            <div className='w-1/4 opacity-0 xl:opacity-100'>
                <img src={Obelisk} className=''/>
            </div>
        </div>
    )
}

export default Home