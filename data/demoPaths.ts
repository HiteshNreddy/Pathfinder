import { CareerPath } from '@/types';

export const DEMO_PATHS: Record<string, CareerPath[]> = {
  'Frontend Developer': [
    {
      id: 'fe-1',
      name: 'Technical Leadership Track',
      difficulty: 'moderate',
      totalTimeline: '8-12 years',
      roles: [
        {
          id: 'fe-r1',
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
          id: 'fe-r2',
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
          id: 'fe-r3',
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
          id: 'fe-r4',
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
    }
  ],
  'Data Analyst': [
    {
      id: 'da-1',
      name: 'Data Science Specialist',
      difficulty: 'aggressive',
      totalTimeline: '5-8 years',
      roles: [
        {
          id: 'da-r1',
          title: 'Data Analyst',
          seniorityLevel: 'Junior/Mid',
          skills: [
            { name: 'SQL', category: 'technical', proficiencyRequired: 'advanced', isNew: false },
            { name: 'Excel/Tableau', category: 'technical', proficiencyRequired: 'advanced', isNew: false },
            { name: 'Statistics', category: 'domain', proficiencyRequired: 'intermediate', isNew: false }
          ],
          tools: ['SQL Server', 'Tableau', 'Excel'],
          experienceRequired: '1-2 years',
          responsibilities: ['Cleaning data', 'Creating dashboards', 'Reporting insights'],
          transitionTimeline: 'Current'
        },
        {
          id: 'da-r2',
          title: 'Senior Data Analyst',
          seniorityLevel: 'Senior',
          skills: [
            { name: 'Python/R', category: 'technical', proficiencyRequired: 'intermediate', isNew: true },
            { name: 'Predictive Modeling', category: 'technical', proficiencyRequired: 'basic', isNew: true },
            { name: 'Business Strategy', category: 'domain', proficiencyRequired: 'intermediate', isNew: true }
          ],
          tools: ['Jupyter Notebooks', 'Pandas', 'PowerBI'],
          experienceRequired: '3-5 years',
          responsibilities: ['Advanced analytics', 'Stakeholder management', 'Leading analysis projects'],
          transitionTimeline: '2-3 years'
        },
        {
          id: 'da-r3',
          title: 'Data Scientist',
          seniorityLevel: 'Mid/Senior',
          skills: [
            { name: 'Machine Learning', category: 'technical', proficiencyRequired: 'advanced', isNew: true },
            { name: 'Deep Learning', category: 'technical', proficiencyRequired: 'basic', isNew: true },
            { name: 'Cloud Computing', category: 'technical', proficiencyRequired: 'intermediate', isNew: true }
          ],
          tools: ['Scikit-learn', 'TensorFlow', 'AWS/GCP'],
          experienceRequired: '5-7 years',
          responsibilities: ['Building ML models', 'A/B testing', 'Productionizing algorithms'],
          transitionTimeline: '2-3 years'
        }
      ]
    }
  ],
  'Product Designer': [
    {
      id: 'pd-1',
      name: 'Product Strategy Track',
      difficulty: 'moderate',
      totalTimeline: '7-10 years',
      roles: [
        {
          id: 'pd-r1',
          title: 'Product Designer',
          seniorityLevel: 'Junior/Mid',
          skills: [
            { name: 'UI Design', category: 'technical', proficiencyRequired: 'advanced', isNew: false },
            { name: 'UX Research', category: 'technical', proficiencyRequired: 'intermediate', isNew: false },
            { name: 'Prototyping', category: 'technical', proficiencyRequired: 'advanced', isNew: false }
          ],
          tools: ['Figma', 'Adobe XD', 'Miro'],
          experienceRequired: '1-3 years',
          responsibilities: ['Designing interfaces', 'User testing', 'Design systems'],
          transitionTimeline: 'Current'
        },
        {
          id: 'pd-r2',
          title: 'Senior Product Designer',
          seniorityLevel: 'Senior',
          skills: [
            { name: 'Design Strategy', category: 'domain', proficiencyRequired: 'advanced', isNew: true },
            { name: 'Product Thinking', category: 'domain', proficiencyRequired: 'advanced', isNew: true },
            { name: 'Leadership', category: 'soft', proficiencyRequired: 'intermediate', isNew: true }
          ],
          tools: ['Figma', 'Principle', 'UserTesting.com'],
          experienceRequired: '4-6 years',
          responsibilities: ['Leading design projects', 'Mentoring juniors', 'Defining design vision'],
          transitionTimeline: '3-4 years'
        },
        {
          id: 'pd-r3',
          title: 'Product Manager',
          seniorityLevel: 'Mid/Senior',
          skills: [
            { name: 'Roadmapping', category: 'domain', proficiencyRequired: 'advanced', isNew: true },
            { name: 'Data Analysis', category: 'technical', proficiencyRequired: 'intermediate', isNew: true },
            { name: 'Agile Methodology', category: 'domain', proficiencyRequired: 'advanced', isNew: true }
          ],
          tools: ['Jira', 'Amplitude', 'Productboard'],
          experienceRequired: '6-8 years',
          responsibilities: ['Defining product roadmap', 'Prioritizing features', 'Managing stakeholders'],
          transitionTimeline: '2-3 years'
        }
      ]
    }
  ]
};
