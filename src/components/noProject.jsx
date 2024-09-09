import noProjects from '../assets/no-projects.png'


export default function NoProject({onAddProject}) {
    return(
        <section className=" flex justify-center align-middle min-h-screen">
            <div className="container flex flex-col justify-center items-center gap-5 w-2/4">
                <div className=" w-20 h-20 ">
                    <img className='object-contain w-full h-full' src={noProjects} alt="" />
                </div>

                <h4 className=' text-gray-500 '>No Project Selected</h4>

                <p className=' text-center'>Create project or get started with a new one</p>

                <button onClick={onAddProject} className=' bg-black rounded p-3 text-gray-300'>Create new project</button>
            </div>
            
        </section>
    )

}