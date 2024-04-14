import './Loading.css';

function Loading(){
    return(
        <div className='grid place-content-center p-20 h-full w-full'>
        <div className="custom-loader"></div>
        <p className='py-20 text-[30px] text-center'>Loading ...</p>
        </div>
    )
}
export default Loading;