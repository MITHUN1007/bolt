import { type ActionFunctionArgs } from '@remix-run/cloudflare';
import { streamText } from 'ai';
import { getAPIKey } from '~/lib/.server/llm/api-key';
import { getModel } from '~/lib/.server/llm/model';
import { MAX_RESPONSE_SEGMENTS, MAX_TOKENS } from '~/lib/.server/llm/constants';
import { getSystemPrompt } from '~/lib/.server/llm/prompts';
import { createScopedLogger } from '~/utils/logger';
import { stripIndent } from '~/utils/stripIndent';

const logger = createScopedLogger('api.chat');

export async function action(args: ActionFunctionArgs) {
  return chatAction(args);
}

async function chatAction({ context, request }: ActionFunctionArgs) {
  const { messages } = await request.json<{ messages: any[] }>();

  const apiKey = getAPIKey(context.cloudflare.env);
  const model = getModel(apiKey);

  const systemPrompt = getSystemPrompt();

  const stream = streamText({
    model,
    system: systemPrompt,
    messages: messages.slice(-MAX_RESPONSE_SEGMENTS),
    maxTokens: MAX_TOKENS,
    temperature: 0.2,
  });

  return stream.toDataStreamResponse();
}