
function Filter(props) {

    const courses = props.courses;
    const category = props.category;
    const setCategory = props.setCategory;


    return (
        <div className="pt-5 pb-5 px-3 w-full max-w-[700px] mx-auto flex overflow-auto justify-between font-semibold
        text-[20px] font-mono ">
            {
                courses.map((course) => {
                    return (
                        <button 
                        className={`text-white py-1 px-4 rounded-full 
                        ${category===course.title ? 
                        "border bg-slate-800 shadow-md shadow-slate-300" :
                        "opacity-50" }` }
                        onClick={()=>{setCategory(course.title);}}
                        key={course.id}
                        >{course.title}</button>
                    );
                })
            }
        </div>
    );
}
export default Filter;