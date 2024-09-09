
import { useState } from "react"; 


import SideBar from "./components/sidebar";
import NoProject from "./components/noProject";
import NewProject from "./components/newProject";
import Tasks from "./components/tasks";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  })


  function handleAddProject() {
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProject: true
      }
     
    })
  }

  function handleSelectProject(id) {
    setProjectState(prevState => {
      
      return{
        ...prevState,
        selectedProject: id
      }
     
    })
  }

  function handleAddProjectClose() {
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProject: undefined
      }
     
    })
  }

  function handleProjectSave(projectData) {
    

      const dataNewProject = {
        ...projectData,
        id: Math.random()
      }
  
      setProjectState(prevState => {
        return{
            ...prevState,
            selectedProject: undefined,
            projects: [...prevState.projects, dataNewProject ]
        }

       
       
  
      })

  }

  function deleteProject() {
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        )
      }
    })


  }

  const selectedProjectId = projectState.projects.find( project => project.id === projectState.selectedProject)

  function handleTaskAdd(text) {
    setProjectState(prevState => {
      const newTasks = {
        text: text,
        projectId: prevState.selectedProject,
        id: Math.random()
      }

      return{
        ...prevState,
        tasks: [ newTasks , ...prevState.tasks]
      }
    })
  }

  function handleTaskClear(id) {
    setProjectState((prevState) => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id
        )
      }
    })
  }
  
  

  let screen = <Tasks onClear={handleTaskClear} tasks={projectState.tasks} onTaskkAdd={handleTaskAdd} onDelete={deleteProject} projects={selectedProjectId} />

  if(projectState.selectedProject == true){
    screen = <NewProject  onSaveProject={handleProjectSave} onAddProjectClose={handleAddProjectClose} />
  }else if(projectState.selectedProject == undefined){
    screen = <NoProject onAddProject={handleAddProject} />
  }

 

  return (
    <section className="flex">
      <SideBar selectedProject={selectedProjectId} onSelectProject={handleSelectProject} projects={projectState.projects} onAddProject={handleAddProject} />

      <div className=" w-4/5">
         {screen}
        
       
      </div>
      
      
      {/* <h1 className="my-8 text-center text-5xl font-bold ">Hello World</h1> */}
    </section>
  );
}

export default App;


