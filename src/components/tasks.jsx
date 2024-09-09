import { useState } from "react"

export default function Tasks({projects, onDelete, onTaskkAdd, tasks, onClear}) {

    const [taskInput, setTaskInput] = useState('')



    function handleTaskClick() {
        if(taskInput.trim() != ''){
            onTaskkAdd(taskInput)
            setTaskInput('')
            
        }
    }



    return(
        <section className=" p-10 mt-15">
            <div className="flex justify-between items-center mb-5">
                <div className="flex flex-col gap-3">
                    <h2 className=" text-black text-4xl">{projects.title}</h2>
                    <span className="text-stone-500 text-xs">{projects.date}</span>
                </div>
                <button onClick={onDelete} className=" text-xl text-black">Delete</button>
            </div>

            <p className="text-black text-xl mb-6">{projects.description}</p>

            <hr className="mb-6 border-stone-400" />

            <h2 className="text-black mb-6 text-4xl">Tasks</h2>

            <div className="flex gap-4 mb-7">
                <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} type="text" className=" bg-stone-200 text-black p-2 max-w-52 rounded " />
                <button onClick={handleTaskClick} className="text-balck text-xl">Add Tasks</button>
            </div>

            <ul className=" py-16 px-10 rounded bg-stone-200 flex flex-col gap-5">
                {tasks.length >= 0 && tasks.map(function(item) {
                    if(item.projectId == projects.id){

                        return(
                        <li className="flex justify-between">
                            <p className="text-black text-xl">{item.text}</p>
                            <button onClick={() => onClear(item.id)} className="text-black text-xl">Clear</button>
                        </li>
                        )
                                            
                    }
                    
                })}
                       
            </ul>

        </section>
    )
}