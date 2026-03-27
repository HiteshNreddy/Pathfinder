import { CareerPath } from '@/types';

export const DEMO_PATHS: CareerPath[] = [
  {
    id: 'demo-1',
    name: 'Technical Leadership Track',
    difficulty: 'moderate',
    totalTimeline: '8-12 years',
    roles: [
      {
        id: 'r1',
        title: 'Frontend Developer',
        seniorityLevel: 'Junior/Mid',
        skills: [
          { name: 'React', category: 'technical', proficiencyRequired: 'intermediate', isNew: false },
          { name: 'TypeScript', category: 'technical', proficiencyRequired: 'basic', isNew: false },
          { name: 'CSS/Tailwind', category: 'technical', proficiencyRequired: 'advanced', isNew: false }
        ],
        tools: ['VS Code', 'Git', 'Chrome DevTools'],
        experienceRequired: '1-3 years',
        responsibilities: ['Building UI components', 'Collaborating with designers', 'Fixing frontend bugs'],
        transitionTimeline: 'Current'
      },
      {
        id: 'r2',
        title: 'Senior Frontend Engineer',
        seniorityLevel: 'Senior',
        skills: [
          { name: 'System Design', category: 'technical', proficiencyRequired: 'intermediate', isNew: true },
          { name: 'Performance Optimization', category: 'technical', proficiencyRequired: 'advanced', isNew: true },
          { name: 'Mentoring', category: 'soft', proficiencyRequired: 'basic', isNew: true }
        ],
        tools: ['Webpack/Vite', 'Jest', 'Storybook'],
        experienceRequired: '3-5 years',
        responsibilities: ['Architecting complex features', 'Code reviews', 'Leading frontend initiatives'],
        transitionTimeline: '2-3 years'
      },
      {
        id: 'r3',
        title: 'Staff Engineer',
        seniorityLevel: 'Staff',
        skills: [
          { name: 'Cross-team Architecture', category: 'technical', proficiencyRequired: 'advanced', isNew: true },
          { name: 'Strategic Planning', category: 'soft', proficiencyRequired: 'intermediate', isNew: true },
          { name: 'Technical Vision', category: 'domain', proficiencyRequired: 'advanced', isNew: true }
        ],
        tools: ['Architecture Diagrams', 'RFCs', 'Jira'],
        experienceRequired: '7-10 years',
        responsibilities: ['Setting technical direction', 'Solving organization-wide problems', 'Influencing product roadmap'],
        transitionTimeline: '3-5 years'
      },
      {
        id: 'r4',
        title: 'VP of Engineering',
        seniorityLevel: 'Executive',
        skills: [
          { name: 'Organizational Design', category: 'soft', proficiencyRequired: 'expert', isNew: true },
          { name: 'Budget Management', category: 'domain', proficiencyRequired: 'advanced', isNew: true },
          { name: 'Executive Leadership', category: 'soft', proficiencyRequired: 'expert', isNew: true }
        ],
        tools: ['Financial Software', 'HR Systems', 'Strategic Frameworks'],
        experienceRequired: '12+ years',
        responsibilities: ['Scaling engineering teams', 'Aligning tech with business goals', 'Building culture'],
        transitionTimeline: '3-4 years'
      }
    ]
  },
  {
    id: 'demo-2',
    name: 'Management & Strategy Track',
    difficulty: 'moderate',
    totalTimeline: '10-15 years',
    roles: [
      {
        id: 'm1',
        title: 'Frontend Developer',
        seniorityLevel: 'Junior/Mid',
        skills: [
          { name: 'JavaScript', category: 'technical', proficiencyRequired: 'advanced', isNew: false },
          { name: 'Communication', category: 'soft', proficiencyRequired: 'intermediate', isNew: false }
        ],
        tools: ['Git', 'VS Code'],
        experienceRequired: '1-3 years',
        responsibilities: ['Feature development', 'Team collaboration'],
        transitionTimeline: 'Current'
      },
      {
        id: 'm2',
        title: 'Engineering Manager',
        seniorityLevel: 'Management',
        skills: [
          { name: 'People Management', category: 'soft', proficiencyRequired: 'advanced', isNew: true },
          { name: 'Project Management', category: 'soft', proficiencyRequired: 'advanced', isNew: true },
          { name: 'Hiring', category: 'domain', proficiencyRequired: 'intermediate', isNew: true }
        ],
        tools: ['1:1 Frameworks', 'Project Boards', 'ATS'],
        experienceRequired: '5-7 years',
        responsibilities: ['Managing a team of 5-8', 'Career development', 'Delivery management'],
        transitionTimeline: '3-4 years'
      },
      {
        id: 'm3',
        title: 'Director of Engineering',
        seniorityLevel: 'Director',
        skills: [
          { name: 'Strategy Execution', category: 'soft', proficiencyRequired: 'advanced', isNew: true },
          { name: 'Change Management', category: 'soft', proficiencyRequired: 'advanced', isNew: true },
          { name: 'Operational Excellence', category: 'domain', proficiencyRequired: 'advanced', isNew: true }
        ],
        tools: ['OKRs', 'Roadmapping Tools'],
        experienceRequired: '10+ years',
        responsibilities: ['Managing multiple teams', 'Process optimization', 'Stakeholder management'],
        transitionTimeline: '4-6 years'
      },
      {
        id: 'm4',
        title: 'VP of Engineering',
        seniorityLevel: 'Executive',
        skills: [
          { name: 'Visionary Leadership', category: 'soft', proficiencyRequired: 'expert', isNew: true },
          { name: 'Business Strategy', category: 'domain', proficiencyRequired: 'expert', isNew: true }
        ],
        tools: ['Board Reports', 'Strategic Planning'],
        experienceRequired: '15+ years',
        responsibilities: ['Overall engineering strategy', 'Company leadership'],
        transitionTimeline: '3-5 years'
      }
    ]
  }
];
