import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import {filterData, apiUrl} from './data';
import Loading from './Components/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {

  const [category, setCategory] = useState(filterData[0].title);
  const [loader, setLoader] = useState(true);
  const [courses, setCourses]=useState([]);

  async function extractData(setCourses){
    setLoader(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("data fetch error");
    }
    setLoader(false);
  }

  useEffect(()=>{
    extractData(setCourses);
    
  },[]);

  return (
    <>
      <div className='w-full min-h-[100vh] h-[100%] p-0 m-0 bg-slate-800 overflow-x-hidden'>
        <Navbar />

        <Filter courses={filterData} category={category} setCategory={setCategory}/>

        {
          loader ? <Loading /> : <Cards courseDetails={courses} category={category}/>
        }
        
      </div>
    </>
  )
}

export default App;
