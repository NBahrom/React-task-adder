import {useRef} from "react"
import Modal from "./Modal"


export default function NewProject({onAddProjectClose, onSaveProject}) {
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const date = useRef()

    function onClickSaveProject() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = date.current.value
        
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === '') {
            modal.current.open();

            return;
        }
        
        onSaveProject({title: enteredTitle, description:enteredDescription, date:enteredDate})
    }

    return(
        <>
            <Modal ref={modal}>Please fullfill all modals</Modal>
            <section className=" w-full flex flex-col gap-4 justify-center min-h-screen">
                
                    <div className="flex justify-end items-center gap-2">
                        <button onClick={onAddProjectClose} className=" text-black text-xl">Cancel</button>
                        <button onClick={onClickSaveProject} className=" text-white text-xl bg-black rounded pt-1 pb-1 pr-4 pl-4">Save</button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1 w-full">
                            <label className=" font-bold text-lg text-gray-600" htmlFor="title">Title</label>
                            <input required ref={title} name="title" type="text" className="rounded w-full p-1 border-b-2 text border-stone-300 focus-visible:outline-none focus-visible:border-black text-black bg-stone-200 font-medium"  />
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label htmlFor="desc" className=" font-bold text-lg text-gray-600" >Description</label>
                            <textarea required ref={description} name="desc" type="text" className="rounded w-full p-1 border-b-2 text border-stone-300 focus-visible:outline-none focus-visible:border-black text-black bg-stone-200 font-medium"  />
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label className=" font-bold text-lg text-gray-600" htmlFor="date">Due Date</label>
                            <input required ref={date} name="date" type="date" className="rounded w-full p-1 border-b-2 text border-stone-300 focus-visible:outline-none focus-visible:border-black text-black bg-stone-200 font-medium"  />
                        </div>
                    </div>
                    

    


            </section>
        </>
    )
}
