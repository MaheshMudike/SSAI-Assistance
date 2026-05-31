import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OpenAIService {

    private apiKey = environment.openAiApiKey; // (you can move to env later)

    async generateText(prompt: string): Promise<string> {

        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'user',
                            content: prompt
                        }
                    ]
                },
                {
                    headers: {
                        'Authorization': `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            return response.data.choices[0].message.content;

        } catch (error) {
            console.error('OpenAI Error', error);

            const lowerPrompt = prompt.toLowerCase();

            // Financial Situation
            if (
                lowerPrompt.includes('financial') ||
                lowerPrompt.includes('income') ||
                lowerPrompt.includes('money')
            ) {

                return `
I am currently facing financial difficulties due to limited income and increasing daily expenses. Managing household needs and essential costs has become challenging. I am seeking financial assistance to help improve my current financial situation and support my basic living requirements.
 `;
            }

            // Employment Circumstances
            if (
                lowerPrompt.includes('employment') ||
                lowerPrompt.includes('job') ||
                lowerPrompt.includes('work') ||
                lowerPrompt.includes('unemployed')
            ) {

                return `
My employment situation is currently unstable, which has significantly affected my financial condition. Due to limited job opportunities and reduced income, I am finding it difficult to manage personal and family expenses. I am actively seeking stable employment opportunities.
 `;
            }

            // Reason for Applying
            if (
                lowerPrompt.includes('reason') ||
                lowerPrompt.includes('apply') ||
                lowerPrompt.includes('assistance')
            ) {

                return `
I am applying for financial assistance to support my essential living expenses during a difficult period. This support will help me manage my current financial challenges and maintain stability while improving my overall situation.
 `;
            }

            // Default fallback
            return `
I am currently experiencing financial hardship and require support to manage my living expenses. Financial assistance would greatly help improve my current situation and provide temporary relief during this difficult time.
 `;
        }
    }
}