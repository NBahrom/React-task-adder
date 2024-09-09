

export default function SideBar({onAddProject, onSelectProject, projects, selectedProject = ''}) {

    return(
        <section className="bg-black rounded-r-lg p-5 mr-2 mt-2 flex flex-col max-w-72 gap-3 h-full min-h-screen">
            <h1 className="text-white text-4xl">Your projects</h1>

            <button onClick={onAddProject} className=" text-sm  bg-gray-600 rounded p-1 w-fit">+ Add Project</button>

            <ul className="mt-10 flex flex-col gap-4">
                {projects.map((project) => {
                    let cssClass = 'text-gray-400 text-xl'
                    if(project.id == selectedProject.id){
                        cssClass += ' bg-stone-800 text-stone-200'
                    }else{
                        cssClass += ' text-stone-400'
                    }
                return(    
                <li key={project.id}>
                    <button onClick={() => { onSelectProject(project.id)}} className={cssClass}> {project.title}</button>
                
                </li>)
                })}

              
               
            </ul>

        </section>
    )
}