import Card from './Card';
import { useState } from 'react';

function Cards(props) {

    const [liked, setLiked] = useState([]);
    const courseDetails = props.courseDetails;
    const category = props.category;
    
    function courses(){
        if(category==="All"){
            let courseArray = [];
            Object.values(courseDetails).forEach(array => {
                array.forEach(course=>{
                    courseArray.push(course);
                });
            });
            return courseArray;
        }
        else return courseDetails[category];
    }
    
    

    return (
        <div 
        className='w-full max-w-[900px] flex flex-wrap mx-auto gap-7 justify-center px-3 pb-10 pt-5'> 

            {
                courses().map(course=>{
                    return (<Card {...course} key={course.id} liked={liked} setLiked ={setLiked}/>);
                })
            }
        </div>
    )
}
export default Cards;