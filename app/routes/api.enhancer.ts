import { type ActionFunctionArgs } from '@remix-run/cloudflare';

export async function action({ request }: ActionFunctionArgs) {
  const { message } = await request.json<{ message: string }>();
  
  // Simple prompt enhancement for now
  const enhancedPrompt = `Please help me with the following: ${message}`;
  
  return Response.json({ enhancedPrompt });
}