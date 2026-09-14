import { use, useState } from 'react';
import type { ITecnology } from '../../Types/TecnologyType';
import AvailableTecnologies from './AvailableTecnologies';
import YourStack from './YourStack';
import { toast } from 'react-toastify';

interface TecnologyProps{
    technologyPromise:Promise<ITecnology[]>
    
}
const Technologies = ({technologyPromise}:TecnologyProps) => {
    const technologies=use(technologyPromise)// use is a hook
    const [stack, setStack] = useState<ITecnology[]>([])

    const addToStack = (technology: ITecnology) => {
        if (stack.some((item) => item.id === technology.id)) {
            toast.warning(`${technology.name} is already in your stack.`)
            return
        }

        setStack((currentStack) => [...currentStack, technology])
        toast.success(`${technology.name} added to your stack.`)
    }

    const removeFromStack = (technologyId: string) => {
        const technology = stack.find((item) => item.id === technologyId)
        setStack((currentStack) => currentStack.filter((item) => item.id !== technologyId))
        if (technology) {
            toast.success(`${technology.name} removed from your stack.`)
        }
    }

    const removeAll = () => {
        if (stack.length === 0) {
            toast.info('Your stack is already empty.')
            return
        }

        setStack([])
        toast.success('All technologies removed from your stack.')
    }

    return (
            <div className='container mx-auto grid max-w-7xl grid-cols-12 gap-[0.5px]'>
                <div className='col-span-10'>
                    <div >
                        <h2 className='text-2xl font-bold'>Explore the <span className='text-pink-600'>Technologies</span></h2>
                        <p>Pick one technology per category to build your ideal stack.</p>
                    </div>
                    <AvailableTecnologies technologies={technologies} stack={stack} onAddToStack={addToStack}></AvailableTecnologies>
                </div>
                <div className='col-span-2'>
                <YourStack
                    stack={stack}
                    removeFromStack={removeFromStack}
                    removeAll={removeAll}
                />
                </div>
            </div>
    );
};

export default Technologies;