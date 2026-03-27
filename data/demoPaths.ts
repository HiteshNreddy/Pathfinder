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
  ],
  'Backend Developer': [
    {
      id: 'be-1',
      name: 'CTO Track',
      difficulty: 'aggressive',
      totalTimeline: '12-15 years',
      roles: [
        { id: 'be-r1', title: 'Backend Developer', seniorityLevel: 'Junior', skills: [{ name: 'Node.js', category: 'technical', proficiencyRequired: 'intermediate', isNew: false }], tools: ['VS Code', 'Docker'], experienceRequired: '1-2 years', responsibilities: ['API development'], transitionTimeline: 'Current' },
        { id: 'be-r2', title: 'Senior Backend Engineer', seniorityLevel: 'Senior', skills: [{ name: 'System Design', category: 'technical', proficiencyRequired: 'advanced', isNew: true }], tools: ['Kubernetes', 'Redis'], experienceRequired: '5-7 years', responsibilities: ['Architecture'], transitionTimeline: '4-5 years' },
        { id: 'be-r3', title: 'CTO', seniorityLevel: 'Executive', skills: [{ name: 'Strategic Leadership', category: 'soft', proficiencyRequired: 'expert', isNew: true }], tools: ['Strategic Planning'], experienceRequired: '12+ years', responsibilities: ['Tech Strategy'], transitionTimeline: '5-7 years' }
      ]
    }
  ],
  'UX Researcher': [
    {
      id: 'uxr-1',
      name: 'Research Leadership',
      difficulty: 'moderate',
      totalTimeline: '8-10 years',
      roles: [
        { id: 'uxr-r1', title: 'UX Researcher', seniorityLevel: 'Junior', skills: [{ name: 'User Interviews', category: 'technical', proficiencyRequired: 'intermediate', isNew: false }], tools: ['Dovetail'], experienceRequired: '1-2 years', responsibilities: ['Conducting research'], transitionTimeline: 'Current' },
        { id: 'uxr-r2', title: 'Head of Research', seniorityLevel: 'Director', skills: [{ name: 'Research Strategy', category: 'domain', proficiencyRequired: 'expert', isNew: true }], tools: ['Research Repositories'], experienceRequired: '8+ years', responsibilities: ['Leading research team'], transitionTimeline: '6-8 years' }
      ]
    }
  ],
  'DevOps Engineer': [
    {
      id: 'dev-1',
      name: 'SRE Management',
      difficulty: 'moderate',
      totalTimeline: '7-9 years',
      roles: [
        { id: 'dev-r1', title: 'DevOps Engineer', seniorityLevel: 'Mid', skills: [{ name: 'CI/CD', category: 'technical', proficiencyRequired: 'advanced', isNew: false }], tools: ['Terraform', 'Jenkins'], experienceRequired: '3-5 years', responsibilities: ['Infrastructure automation'], transitionTimeline: 'Current' },
        { id: 'dev-r2', title: 'SRE Manager', seniorityLevel: 'Management', skills: [{ name: 'Incident Management', category: 'soft', proficiencyRequired: 'advanced', isNew: true }], tools: ['PagerDuty'], experienceRequired: '7+ years', responsibilities: ['Reliability strategy'], transitionTimeline: '3-4 years' }
      ]
    }
  ],
  'Marketing Specialist': [
    {
      id: 'mkt-1',
      name: 'CMO Track',
      difficulty: 'moderate',
      totalTimeline: '12-15 years',
      roles: [
        { id: 'mkt-r1', title: 'Marketing Specialist', seniorityLevel: 'Junior', skills: [{ name: 'SEO', category: 'technical', proficiencyRequired: 'intermediate', isNew: false }], tools: ['Google Analytics'], experienceRequired: '1-2 years', responsibilities: ['Campaign execution'], transitionTimeline: 'Current' },
        { id: 'mkt-r2', title: 'CMO', seniorityLevel: 'Executive', skills: [{ name: 'Brand Strategy', category: 'domain', proficiencyRequired: 'expert', isNew: true }], tools: ['Marketing Automation'], experienceRequired: '12+ years', responsibilities: ['Global marketing strategy'], transitionTimeline: '10-12 years' }
      ]
    }
  ],
  'Sales Representative': [
    {
      id: 'sls-1',
      name: 'VP of Sales Track',
      difficulty: 'aggressive',
      totalTimeline: '10-12 years',
      roles: [
        { id: 'sls-r1', title: 'Sales Representative', seniorityLevel: 'Junior', skills: [{ name: 'Prospecting', category: 'soft', proficiencyRequired: 'intermediate', isNew: false }], tools: ['Salesforce'], experienceRequired: '1-2 years', responsibilities: ['Closing deals'], transitionTimeline: 'Current' },
        { id: 'sls-r2', title: 'VP of Sales', seniorityLevel: 'Executive', skills: [{ name: 'Revenue Strategy', category: 'domain', proficiencyRequired: 'expert', isNew: true }], tools: ['CRM Dashboards'], experienceRequired: '10+ years', responsibilities: ['Sales leadership'], transitionTimeline: '8-10 years' }
      ]
    }
  ],
  'HR Coordinator': [
    {
      id: 'hr-1',
      name: 'Chief People Officer Track',
      difficulty: 'moderate',
      totalTimeline: '12-15 years',
      roles: [
        { id: 'hr-r1', title: 'HR Coordinator', seniorityLevel: 'Junior', skills: [{ name: 'Recruiting', category: 'soft', proficiencyRequired: 'intermediate', isNew: false }], tools: ['BambooHR'], experienceRequired: '1-2 years', responsibilities: ['Onboarding'], transitionTimeline: 'Current' },
        { id: 'hr-r2', title: 'Chief People Officer', seniorityLevel: 'Executive', skills: [{ name: 'Culture Design', category: 'soft', proficiencyRequired: 'expert', isNew: true }], tools: ['HRIS'], experienceRequired: '12+ years', responsibilities: ['People strategy'], transitionTimeline: '10-12 years' }
      ]
    }
  ],
  'Financial Analyst': [
    {
      id: 'fin-1',
      name: 'CFO Track',
      difficulty: 'aggressive',
      totalTimeline: '15+ years',
      roles: [
        { id: 'fin-r1', title: 'Financial Analyst', seniorityLevel: 'Junior', skills: [{ name: 'Financial Modeling', category: 'technical', proficiencyRequired: 'advanced', isNew: false }], tools: ['Excel', 'SAP'], experienceRequired: '1-3 years', responsibilities: ['Budgeting'], transitionTimeline: 'Current' },
        { id: 'fin-r2', title: 'CFO', seniorityLevel: 'Executive', skills: [{ name: 'Capital Allocation', category: 'domain', proficiencyRequired: 'expert', isNew: true }], tools: ['ERP Systems'], experienceRequired: '15+ years', responsibilities: ['Financial strategy'], transitionTimeline: '12-15 years' }
      ]
    }
  ],
  'Customer Success Manager': [
    {
      id: 'cs-1',
      name: 'Head of Customer Success',
      difficulty: 'moderate',
      totalTimeline: '8-10 years',
      roles: [
        { id: 'cs-r1', title: 'Customer Success Manager', seniorityLevel: 'Mid', skills: [{ name: 'Relationship Management', category: 'soft', proficiencyRequired: 'advanced', isNew: false }], tools: ['Gainsight'], experienceRequired: '3-5 years', responsibilities: ['Retention'], transitionTimeline: 'Current' },
        { id: 'cs-r2', title: 'Head of Customer Success', seniorityLevel: 'Director', skills: [{ name: 'Churn Strategy', category: 'domain', proficiencyRequired: 'expert', isNew: true }], tools: ['Customer Analytics'], experienceRequired: '8+ years', responsibilities: ['Success strategy'], transitionTimeline: '4-5 years' }
      ]
    }
  ],
  'Content Writer': [
    {
      id: 'cw-1',
      name: 'Content Strategy Director',
      difficulty: 'moderate',
      totalTimeline: '8-10 years',
      roles: [
        { id: 'cw-r1', title: 'Content Writer', seniorityLevel: 'Junior', skills: [{ name: 'Copywriting', category: 'technical', proficiencyRequired: 'advanced', isNew: false }], tools: ['WordPress', 'Grammarly'], experienceRequired: '1-2 years', responsibilities: ['Writing articles'], transitionTimeline: 'Current' },
        { id: 'cw-r2', title: 'Content Strategy Director', seniorityLevel: 'Director', skills: [{ name: 'Content Strategy', category: 'domain', proficiencyRequired: 'expert', isNew: true }], tools: ['Content Calendars'], experienceRequired: '8+ years', responsibilities: ['Content vision'], transitionTimeline: '6-7 years' }
      ]
    }
  ],
  'Project Manager': [
    {
      id: 'pm-1',
      name: 'PMO Director Track',
      difficulty: 'moderate',
      totalTimeline: '10-12 years',
      roles: [
        { id: 'pm-r1', title: 'Project Manager', seniorityLevel: 'Mid', skills: [{ name: 'Agile', category: 'domain', proficiencyRequired: 'advanced', isNew: false }], tools: ['Asana', 'Jira'], experienceRequired: '3-5 years', responsibilities: ['Project delivery'], transitionTimeline: 'Current' },
        { id: 'pm-r2', title: 'PMO Director', seniorityLevel: 'Director', skills: [{ name: 'Portfolio Management', category: 'domain', proficiencyRequired: 'expert', isNew: true }], tools: ['Enterprise PM Tools'], experienceRequired: '10+ years', responsibilities: ['Program governance'], transitionTimeline: '6-7 years' }
      ]
    }
  ]
};
