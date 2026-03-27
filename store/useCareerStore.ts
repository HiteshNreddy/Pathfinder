import { create } from 'zustand';
import { CareerPath, Role } from '@/types';

interface CareerStore {
  currentRole: string;
  targetRole: string;
  paths: CareerPath[];
  isLoading: boolean;
  error: string | null;
  selectedNode: { pathId: string; role: Role } | null;
  isComparing: boolean;
  
  setRoles: (current: string, target: string) => void;
  generatePaths: () => Promise<void>;
  setSelectedNode: (node: { pathId: string; role: Role } | null) => void;
  setIsComparing: (isComparing: boolean) => void;
  reset: () => void;
}

export const useCareerStore = create<CareerStore>((set, get) => ({
  currentRole: '',
  targetRole: '',
  paths: [],
  isLoading: false,
  error: null,
  selectedNode: null,
  isComparing: false,

  setRoles: (current, target) => set({ currentRole: current, targetRole: target }),
  
  generatePaths: async () => {
    const { currentRole, targetRole } = get();
    if (!currentRole || !targetRole) return;
    
    set({ isLoading: true, error: null, paths: [], selectedNode: null, isComparing: false });
    
    try {
      const res = await fetch('/api/generate-paths', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentRole, targetRole }),
      });
      
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to generate paths');
      }
      
      const paths = await res.json();
      set({ paths, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  setSelectedNode: (node) => set({ selectedNode: node }),
  setIsComparing: (isComparing) => set({ isComparing }),
  reset: () => set({ currentRole: '', targetRole: '', paths: [], selectedNode: null, isComparing: false, error: null }),
}));
