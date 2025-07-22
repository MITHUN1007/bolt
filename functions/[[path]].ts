import type { AppLoadContext } from '@remix-run/cloudflare';

export default {
  fetch: (request: Request, env: any, ctx: any) => {
    const context: AppLoadContext = {
      cloudflare: {
        env,
      },
    };
    
    // This will be handled by Remix
    return new Response('Not found', { status: 404 });
  },
};