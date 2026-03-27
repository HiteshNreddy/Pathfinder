import { GoogleGenAI, Type } from '@google/genai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { currentRole, targetRole } = await req.json();

    if (!currentRole || !targetRole) {
      return NextResponse.json({ error: 'Missing roles' }, { status: 400 });
    }

    // Use the platform-provided API key. 
    // AI Studio Build provides several possible environment variables.
    const apiKey = process.env.API_KEY || 
                   process.env.NEXT_PUBLIC_GEMINI_API_KEY || 
                   process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey === 'MY_API_KEY') {
      return NextResponse.json({ 
        error: 'Gemini API key is not configured. If you are in AI Studio, please click the "Select API Key" button in the header or configure it in the Settings > Secrets panel.' 
      }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a career progression strategist. Generate 2-3 realistic, actionable career paths from "${currentRole}" to "${targetRole}".

Requirements:
- Each path should have 3-6 intermediate roles (including the final target role).
- Paths should vary in approach (e.g., one technical-heavy, one management-focused, one hybrid).
- For each role provide: title, 5-8 key skills (categorized), 3-5 common tools, experience requirement (years), core responsibilities.
- Explicitly identify skill gaps between each transition.
- Provide realistic timeline per step.
- Ensure paths are grounded in real industry progression patterns.
- The first role in each path MUST be the current role "${currentRole}".
- The last role in each path MUST be the target role "${targetRole}".
`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              name: { type: Type.STRING },
              difficulty: { type: Type.STRING, enum: ['beginner-friendly', 'moderate', 'aggressive'] },
              totalTimeline: { type: Type.STRING },
              roles: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    title: { type: Type.STRING },
                    seniorityLevel: { type: Type.STRING },
                    skills: {
                      type: Type.ARRAY,
                      items: {
                        type: Type.OBJECT,
                        properties: {
                          name: { type: Type.STRING },
                          category: { type: Type.STRING, enum: ['technical', 'soft', 'domain'] },
                          proficiencyRequired: { type: Type.STRING, enum: ['basic', 'intermediate', 'advanced', 'expert'] },
                          isNew: { type: Type.BOOLEAN }
                        },
                        required: ['name', 'category', 'proficiencyRequired', 'isNew']
                      }
                    },
                    tools: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    experienceRequired: { type: Type.STRING },
                    responsibilities: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING }
                    },
                    transitionTimeline: { type: Type.STRING },
                    skillGap: {
                      type: Type.OBJECT,
                      properties: {
                        fromRole: { type: Type.STRING },
                        toRole: { type: Type.STRING },
                        newSkills: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              name: { type: Type.STRING },
                              category: { type: Type.STRING, enum: ['technical', 'soft', 'domain'] },
                              proficiencyRequired: { type: Type.STRING, enum: ['basic', 'intermediate', 'advanced', 'expert'] },
                              isNew: { type: Type.BOOLEAN }
                            },
                            required: ['name', 'category', 'proficiencyRequired', 'isNew']
                          }
                        },
                        deepenedSkills: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              name: { type: Type.STRING },
                              category: { type: Type.STRING, enum: ['technical', 'soft', 'domain'] },
                              proficiencyRequired: { type: Type.STRING, enum: ['basic', 'intermediate', 'advanced', 'expert'] },
                              isNew: { type: Type.BOOLEAN }
                            },
                            required: ['name', 'category', 'proficiencyRequired', 'isNew']
                          }
                        },
                        overlapSkills: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              name: { type: Type.STRING },
                              category: { type: Type.STRING, enum: ['technical', 'soft', 'domain'] },
                              proficiencyRequired: { type: Type.STRING, enum: ['basic', 'intermediate', 'advanced', 'expert'] },
                              isNew: { type: Type.BOOLEAN }
                            },
                            required: ['name', 'category', 'proficiencyRequired', 'isNew']
                          }
                        }
                      },
                      required: ['fromRole', 'toRole', 'newSkills', 'deepenedSkills', 'overlapSkills']
                    }
                  },
                  required: ['id', 'title', 'seniorityLevel', 'skills', 'tools', 'experienceRequired', 'responsibilities']
                }
              }
            },
            required: ['id', 'name', 'difficulty', 'totalTimeline', 'roles']
          }
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error('No text returned from Gemini');
    }
    
    const paths = JSON.parse(text);
    return NextResponse.json(paths);
  } catch (error: any) {
    console.error('Error generating paths:', error);
    return NextResponse.json({ error: error.message || 'Failed to generate paths' }, { status: 500 });
  }
}
