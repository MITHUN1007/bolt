export interface AppLoadContext {
  cloudflare: {
    env: {
      ANTHROPIC_API_KEY?: string;
      [key: string]: any;
    };
  };
}