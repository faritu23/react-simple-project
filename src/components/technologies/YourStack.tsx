import type { ITecnology } from '../../Types/TecnologyType';
import { FiX } from 'react-icons/fi';

interface YourStackProps {
  stack: ITecnology[]
  removeFromStack: (technologyId: string) => void
  removeAll: () => void
}

function YourStack({stack,removeFromStack,removeAll}: YourStackProps) {
  return (
    <aside className=" rounded-2xl border border-gray-200 bg-white p-5 shadow-sm mt-18  lg:sticky lg:top-20 ">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="text-[18px] font-semibold">Your Stack </h2>
          <p className="text-xs text-gray-400"> {stack.length?(`${stack.length} Technology Selected`):`No technologies selected yet.`} </p>
        </div>
      </div>


          {!stack.length ? (
            <div className="py-12 text-center border border-gray-200 rounded-2xl mt-3">
              <p className="text-sm text-gray-400">Your stack is empty. </p>
            </div>
          ) : ( 
          <div className="mt-4 space-y-2">
                  {stack.map((technology) => (
                    <div key={technology.id} className="flex min-h-13 items-center gap-3 rounded-lg border border-slate-200 px-3 py-2">
                      <img src={technology.icon} alt={technology.name} className="h-8 w-8 shrink-0 object-contain"/>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-xs font-semibold text-slate-800"> {technology.name} </h3>
                        <p className="text-[9px] text-slate-400"> {technology.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromStack(technology.id)}
                        aria-label={`Remove ${technology.name} from stack`}
                        className="shrink-0 text-xl text-slate-400 transition-colors hover:text-red-500">
                        <FiX aria-hidden="true" />
                      </button>
                  </div>
              ))}

              <button onClick={removeAll}  className="mt-10 w-full rounded-lg border border-red-300 py-1.5 text-sm font-semibold text-red-500  hover:bg-red-50"> Remove All </button>

            </div>
          )}
  
    </aside>
  );
}

export default YourStack;