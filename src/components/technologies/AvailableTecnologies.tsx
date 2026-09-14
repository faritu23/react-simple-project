
import type { ITecnology } from '../../Types/TecnologyType';
import TechnologyCard from './TechnologyCard';

interface AvailableTecnologiesProps {
    technologies: ITecnology[]
    stack: ITecnology[]
    onAddToStack: (technology: ITecnology) => void
}

const AvailableTecnologies = ({technologies, stack, onAddToStack}: AvailableTecnologiesProps) => {
    return (
        <div className=' grid grid-cols-3 gap-1 max-w-7xl mx-auto'>
            {
                technologies.map((technology:ITecnology)=>{
                    return <TechnologyCard key={technology.id} technology={technology} isAdded={stack.some((item) => item.id === technology.id)} onAddToStack={onAddToStack} />
                    
                })

            }
        </div>
    );
};

export default AvailableTecnologies;