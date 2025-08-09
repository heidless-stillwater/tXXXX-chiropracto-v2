'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized chiropractic tips.
 *
 * - generateChiropracticTip - A function that generates chiropractic tips based on user input.
 * - ChiropracticTipInput - The input type for the generateChiropracticTip function.
 * - ChiropracticTipOutput - The return type for the generateChiropracticTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChiropracticTipInputSchema = z.object({
  userInfo: z
    .string()
    .optional()
    .describe(
      'Optional information about the user, which can be used to personalize the tip. If not provided, a general tip will be generated.'
    ),
});
export type ChiropracticTipInput = z.infer<typeof ChiropracticTipInputSchema>;

const ChiropracticTipOutputSchema = z.object({
  tip: z.string().describe('A personalized chiropractic tip.'),
});
export type ChiropracticTipOutput = z.infer<typeof ChiropracticTipOutputSchema>;

export async function generateChiropracticTip(
  input: ChiropracticTipInput
): Promise<ChiropracticTipOutput> {
  return generateChiropracticTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chiropracticTipPrompt',
  input: {schema: ChiropracticTipInputSchema},
  output: {schema: ChiropracticTipOutputSchema},
  prompt: `You are a helpful AI assistant that provides personalized chiropractic tips.

  Generate a chiropractic tip based on the following user information:
  {{#if userInfo}}
  User Info: {{{userInfo}}}
  {{/if}}

  Tip:`,
});

const generateChiropracticTipFlow = ai.defineFlow(
  {
    name: 'generateChiropracticTipFlow',
    inputSchema: ChiropracticTipInputSchema,
    outputSchema: ChiropracticTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
