import TableReservation from '../assets/images_and_logos/table_reservation_manager.png'
const tableReservationLink = 'https://reservation-frontend-srb0.onrender.com'
function Projects () {
    return (
        <div id='Projects' className='my-5'>
            <h3 className='text-4xl font-semibold mb-3 text-flame'>Portfolio:</h3>
            <div className='flex flex-col gap-3'>
                <div className='border bg-charcoal-200 my-2 rounded-md p-3 self-center md:w-11/12'>
                    <a href={tableReservationLink} target='_blank'>
                        <h4 className='text-3xl font-semibold text-flame mb-3 text-center hover:cursor-pointer'>
                            Table and Reservation Manager
                        </h4>
                    </a>
                    <p className='mb-3 lg:text-center'>
                        A full stack application for creating and managing a restaurant's tables and reservations. Stack: ReactJS, Bootstrap, NodeJS, ExpressJS, and PostgreSQL
                    </p>
                    <img src={TableReservation} alt="Table and Reservation Manager" className='mb-3'/>
                </div>
            </div>
        </div>
    )
}

export default Projects