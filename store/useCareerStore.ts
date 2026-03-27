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
  loadDemoPaths: () => void;
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
  
  loadDemoPaths: () => {
    const { DEMO_PATHS } = require('@/data/demoPaths');
    set({ 
      paths: DEMO_PATHS, 
      currentRole: 'Frontend Developer', 
      targetRole: 'VP of Engineering',
      isLoading: false,
      error: null 
    });
  },
  
  generatePaths: async () => {
    const { currentRole, targetRole } = get();
    if (!currentRole || !targetRole) return;
    
    set({ isLoading: true, error: null, paths: [], selectedNode: null, isComparing: false });
    
    // Simulate a short delay for "generation" feel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const { DEMO_PATHS } = require('@/data/demoPaths');
    
    // Select paths based on currentRole, fallback to Frontend Developer if not found
    const selectedPaths = DEMO_PATHS[currentRole] || DEMO_PATHS['Frontend Developer'];
    
    set({ paths: selectedPaths, isLoading: false });
  },
  
  setSelectedNode: (node) => set({ selectedNode: node }),
  setIsComparing: (isComparing) => set({ isComparing }),
  reset: () => set({ currentRole: '', targetRole: '', paths: [], selectedNode: null, isComparing: false, error: null }),
}));
