export interface CareerPath {
  id: string;
  name: string;
  difficulty: 'beginner-friendly' | 'moderate' | 'aggressive';
  totalTimeline: string;
  roles: Role[];
}

export interface Role {
  id: string;
  title: string;
  seniorityLevel: string;
  skills: Skill[];
  tools: string[];
  experienceRequired: string;
  responsibilities: string[];
  transitionTimeline?: string;
  skillGap?: SkillGap;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'domain';
  proficiencyRequired: 'basic' | 'intermediate' | 'advanced' | 'expert';
  isNew: boolean;
}

export interface SkillGap {
  fromRole: string;
  toRole: string;
  newSkills: Skill[];
  deepenedSkills: Skill[];
  overlapSkills: Skill[];
}
