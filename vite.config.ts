import { defineConfig, loadEnv, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins: PluginOption[] = [react(), tailwindcss()];
  try {
    const m = await import(
      /* webpackIgnore: true */ './.vite-source-tags.js' as string
    ) as { sourceTags?: () => PluginOption };
    if (typeof m.sourceTags === 'function') {
      plugins.push(m.sourceTags());
    }
  } catch {
    // Optional local plugin — absent in normal development.
  }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_']);
  const processEnvDefines: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value);
  }

  return {
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
  };
})
