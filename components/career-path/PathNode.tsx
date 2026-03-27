import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { Role } from '@/types';
import { Briefcase, Clock, Wrench } from 'lucide-react';

interface PathNodeProps {
  data: {
    role: Role;
    pathId: string;
    isStart: boolean;
    isEnd: boolean;
  };
  selected: boolean;
}

export const PathNode = memo(({ data, selected }: PathNodeProps) => {
  const { role, isStart, isEnd } = data;

  return (
    <div className={`w-[280px] bg-white rounded-xl border-2 transition-all duration-200 shadow-sm hover:shadow-md ${
      selected ? 'border-emerald-500 shadow-emerald-100' : 'border-slate-200 hover:border-emerald-300'
    }`}>
      {!isStart && <Handle type="target" position={Position.Left} className="w-3 h-3 bg-emerald-500 border-2 border-white" />}
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-semibold text-slate-900 text-lg leading-tight">{role.title}</h3>
            <p className="text-sm text-slate-500 mt-1">{role.seniorityLevel}</p>
          </div>
          {isStart && <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md ml-2">Current</span>}
          {isEnd && <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-md ml-2">Target</span>}
        </div>

        <div className="space-y-2 mt-4">
          <div className="flex items-center text-sm text-slate-600">
            <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
            <span>{role.skills.length} Key Skills</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <Wrench className="w-4 h-4 mr-2 text-slate-400" />
            <span>{role.tools.length} Tools</span>
          </div>
          <div className="flex items-center text-sm text-slate-600">
            <Clock className="w-4 h-4 mr-2 text-slate-400" />
            <span>{role.experienceRequired} exp</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1">
          {role.skills.slice(0, 3).map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-[10px] uppercase tracking-wider font-medium rounded border border-slate-100">
              {skill.name}
            </span>
          ))}
          {role.skills.length > 3 && (
            <span className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] font-medium rounded border border-slate-100">
              +{role.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {!isEnd && <Handle type="source" position={Position.Right} className="w-3 h-3 bg-emerald-500 border-2 border-white" />}
    </div>
  );
});

PathNode.displayName = 'PathNode';
