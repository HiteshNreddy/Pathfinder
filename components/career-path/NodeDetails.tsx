'use client';

import { useCareerStore } from '@/store/useCareerStore';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Wrench, Briefcase, Clock, Target } from 'lucide-react';

export function NodeDetails() {
  const { selectedNode, setSelectedNode } = useCareerStore();

  if (!selectedNode) return null;

  const { role } = selectedNode;

  const technicalSkills = role.skills.filter(s => s.category === 'technical');
  const softSkills = role.skills.filter(s => s.category === 'soft');
  const domainSkills = role.skills.filter(s => s.category === 'domain');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex justify-end bg-slate-900/20 backdrop-blur-sm"
        onClick={() => setSelectedNode(null)}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-md h-full bg-white shadow-2xl overflow-y-auto border-l border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Role Details</h2>
            <button 
              onClick={() => setSelectedNode(null)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">{role.title}</h1>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Briefcase className="w-4 h-4" /> {role.seniorityLevel}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Clock className="w-4 h-4" /> {role.experienceRequired}
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <section>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-500" /> Core Responsibilities
              </h3>
              <ul className="space-y-2">
                {role.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Required Skills</h3>
              
              <div className="space-y-5">
                {technicalSkills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-slate-500 mb-2">Technical</h4>
                    <div className="flex flex-wrap gap-2">
                      {technicalSkills.map((skill, i) => (
                        <SkillBadge key={i} skill={skill} />
                      ))}
                    </div>
                  </div>
                )}
                
                {softSkills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-slate-500 mb-2">Soft Skills & Leadership</h4>
                    <div className="flex flex-wrap gap-2">
                      {softSkills.map((skill, i) => (
                        <SkillBadge key={i} skill={skill} />
                      ))}
                    </div>
                  </div>
                )}

                {domainSkills.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-slate-500 mb-2">Domain Knowledge</h4>
                    <div className="flex flex-wrap gap-2">
                      {domainSkills.map((skill, i) => (
                        <SkillBadge key={i} skill={skill} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Tools */}
            <section>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-emerald-500" /> Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {role.tools.map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg">
                    {tool}
                  </span>
                ))}
              </div>
            </section>

            {/* Gap Analysis */}
            {role.skillGap && (
              <section className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-100">
                <h3 className="text-sm font-semibold text-emerald-900 uppercase tracking-wider mb-4">Transition Analysis</h3>
                
                <div className="space-y-4">
                  {role.skillGap.newSkills.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-emerald-700 mb-2">New Skills to Acquire</h4>
                      <ul className="space-y-1">
                        {role.skillGap.newSkills.map((s, i) => (
                          <li key={i} className="text-sm text-emerald-800 flex items-center gap-2">
                            <ArrowRight className="w-3 h-3" /> {s.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {role.skillGap.deepenedSkills.length > 0 && (
                    <div>
                      <h4 className="text-xs font-medium text-emerald-700 mb-2">Skills to Deepen</h4>
                      <ul className="space-y-1">
                        {role.skillGap.deepenedSkills.map((s, i) => (
                          <li key={i} className="text-sm text-emerald-800 flex items-center gap-2">
                            <ArrowRight className="w-3 h-3" /> {s.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function SkillBadge({ skill }: { skill: any }) {
  const levelColors = {
    basic: 'bg-slate-100 text-slate-600 border-slate-200',
    intermediate: 'bg-blue-50 text-blue-700 border-blue-100',
    advanced: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    expert: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  };

  return (
    <div className={`px-2.5 py-1 rounded-md border text-xs font-medium flex items-center gap-1.5 ${levelColors[skill.proficiencyRequired as keyof typeof levelColors]}`}>
      <span>{skill.name}</span>
      {skill.isNew && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" title="New Skill" />}
    </div>
  );
}
