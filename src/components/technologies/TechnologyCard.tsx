import type { ITecnology } from '../../Types/TecnologyType';
import { CiStar } from 'react-icons/ci';
import { FaCheck } from "react-icons/fa"
interface TechnologyCardProps {
    technology: ITecnology
    isAdded: boolean
    onAddToStack: (technology: ITecnology) => void
}

const TechnologyCard = ({technology, isAdded, onAddToStack}: TechnologyCardProps) => {

    return (
      
            <div className="card bg-base-50 w-[300px] h-80 mt-4 shadow-sm ">
            <figure>
                <div className='flex justify-between items-center w-full px-5 pt-5 '>
                    <img src={technology.icon} alt={technology.name} className='w-12 font-medium'/>
                    <button type="button" className="btn rounded-full" >{technology.badge}</button>
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{technology.name}</h2>
                <p className=' text-gray-500'>{technology.description}</p>
                <div className='flex justify-between items-center'>
                    <button className="btn btn-soft my-2 text-gray-500">{technology.category}</button>
                    <span className='text-gray-500'>{technology.difficulty}</span>
                    <div className='flex justify-center items-center'>
                        <CiStar className='text-yellow-700' />
                        <span>  {technology.rating}</span>
                    </div>
                </div>
                
                <button onClick={() => onAddToStack(technology)} className="btn btn-block" disabled={isAdded}>
                    
                    {isAdded ? (
                        <>
                        <FaCheck/>
                        <span>Added</span>
                        </>

                    ) : " Add to Stack"}
                    {/* {isAdded?(
                        
                        <div className="flex items-center justify-center gap-2">
                            <FaCheck />
                            <span>Added</span>
                            
                        </div>
                       
                    ):
                    (
                        "Add to Stack"
                    )} */}

                    {/* {isAdded ? (
                        <>
                        <FaCheck />
                        <span>Added</span>
                        </>
                    ) : (
                        "Add to Stack"
                    )} */}
                    
                </button>
                
            </div>
            
            </div>
            );
};

export default TechnologyCard;

