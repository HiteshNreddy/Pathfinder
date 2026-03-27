'use client';

import { useState } from 'react';
import { useCareerStore } from '@/store/useCareerStore';
import { AlertCircle, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function RoleInput() {
  const { currentRole, targetRole, setRoles, generatePaths, isLoading } = useCareerStore();
  const [current, setCurrent] = useState(currentRole);
  const [target, setTarget] = useState(targetRole);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (current.trim() && target.trim()) {
      setRoles(current.trim(), target.trim());
      generatePaths();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
    >
      <div className="p-8 md:p-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Map Your Career Journey</h2>
            <p className="text-slate-500 mt-1">Discover intelligent pathways to your dream role.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="w-full space-y-2">
            <label htmlFor="currentRole" className="block text-sm font-medium text-slate-700">Current Role</label>
            <select
              id="currentRole"
              value={current}
              onChange={(e) => {
                setCurrent(e.target.value);
                // Automatically set a sensible target role for the demo
                if (e.target.value === 'Frontend Developer') setTarget('VP of Engineering');
                if (e.target.value === 'Data Analyst') setTarget('Data Scientist');
                if (e.target.value === 'Product Designer') setTarget('Product Manager');
                if (e.target.value === 'Backend Developer') setTarget('CTO');
                if (e.target.value === 'UX Researcher') setTarget('Head of Research');
                if (e.target.value === 'DevOps Engineer') setTarget('SRE Manager');
                if (e.target.value === 'Marketing Specialist') setTarget('CMO');
                if (e.target.value === 'Sales Representative') setTarget('VP of Sales');
                if (e.target.value === 'HR Coordinator') setTarget('Chief People Officer');
                if (e.target.value === 'Financial Analyst') setTarget('CFO');
                if (e.target.value === 'Customer Success Manager') setTarget('Head of Customer Success');
                if (e.target.value === 'Content Writer') setTarget('Content Strategy Director');
                if (e.target.value === 'Project Manager') setTarget('PMO Director');
              }}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50/50 appearance-none cursor-pointer"
              required
            >
              <option value="" disabled>Select your role</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Product Designer">Product Designer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="UX Researcher">UX Researcher</option>
              <option value="DevOps Engineer">DevOps Engineer</option>
              <option value="Marketing Specialist">Marketing Specialist</option>
              <option value="Sales Representative">Sales Representative</option>
              <option value="HR Coordinator">HR Coordinator</option>
              <option value="Financial Analyst">Financial Analyst</option>
              <option value="Customer Success Manager">Customer Success Manager</option>
              <option value="Content Writer">Content Writer</option>
              <option value="Project Manager">Project Manager</option>
            </select>
          </div>
          
          <div className="hidden md:flex pb-3 text-slate-400">
            <ArrowRight className="w-6 h-6" />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="targetRole" className="block text-sm font-medium text-slate-700">Target Role</label>
            <input
              id="targetRole"
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="e.g., VP of Engineering"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-slate-50/50"
              required
              readOnly
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !current.trim() || !target.trim()}
            className="w-full md:w-auto px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <span>Generate Paths</span>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
