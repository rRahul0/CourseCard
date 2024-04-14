import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

function Card({ id, image, description, title, liked, setLiked }) {

    function changeLike(cid) {
        if (liked.includes(cid)) {
            setLiked(liked.filter((i) => i != cid));
            toast.warning("like removed!");
            console.log(liked);
        }
        else {
            if (liked.length === 0) setLiked([cid]);
            else setLiked([...liked, cid]);
            toast.success("like success!");

        }
    }

    return (
        <div className='w-[270px] font-mono border bg-slate-700 rounded-lg shadow-2xl shadow-slate-700'>
            <div className='relative'>
                <img src={image.url} alt={image.alt} className='rounded-t-lg' />
                    <button onClick={() => { changeLike(id) }}
                        className='h-[30px] w-[30px] rounded-full border grid
                        place-content-center absolute right-2 bottom-3 bg-slate-200 '>
                        {
                            liked.includes(id) ? <FcLike className='h-[25px] w-[25px]' /> :
                             <FcLikePlaceholder className='h-[25px] w-[25px]' />
                        }
                    </button>
            </div>

            <div className='px-3 pb-2'>
                <h3 className=' text-[25px] font-bold text-slate-100 pt-3 pb-1'>{title}</h3>
                <p className='text-slate-300'>
                    {
                        description.length <= 100 ? description :
                        description.substring(0, 100) + ` ...`
                    }

                </p>
            </div>
        </div>
    )
}
export default Card;