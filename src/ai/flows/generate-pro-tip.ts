'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a life coaching pro tip for the homepage.
 *
 * It exports:
 * - `generateProTip`: An async function that returns a generated pro tip.
 * - `ProTipInput`: The input type for the generateProTip function (currently empty).
 * - `ProTipOutput`: The output type for the generateProTip function, containing the pro tip text.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProTipInputSchema = z.object({});
export type ProTipInput = z.infer<typeof ProTipInputSchema>;

const ProTipOutputSchema = z.object({
  tip: z.string().describe('A pro tip related to life coaching.'),
});
export type ProTipOutput = z.infer<typeof ProTipOutputSchema>;

export async function generateProTip(input: ProTipInput): Promise<ProTipOutput> {
  return generateProTipFlow(input);
}

const proTipPrompt = ai.definePrompt({
  name: 'proTipPrompt',
  input: {schema: ProTipInputSchema},
  output: {schema: ProTipOutputSchema},
  prompt: `You are a life coaching expert. Generate a single, actionable pro tip that would inspire someone to explore life coaching services. The tip should be concise and immediately useful. Focus on areas like personal growth, career transition, relationships, mindfulness, stress management, leadership, or performance. Do not include any introductory or concluding remarks. Be direct, and be specific.

Pro Tip:`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateProTipFlow = ai.defineFlow(
  {
    name: 'generateProTipFlow',
    inputSchema: ProTipInputSchema,
    outputSchema: ProTipOutputSchema,
  },
  async input => {
    const {output} = await proTipPrompt(input);
    return output!;
  }
);
