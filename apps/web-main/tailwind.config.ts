// tailwind config is required for editor support
import type { Config } from 'tailwindcss';

import sharedConfig from '../../packages/tailwind-config/tailwind.config';

const config: Partial<Config> = {
  content: ["./src/app/**/*.{tsx,ts,js}"],

  presets: [sharedConfig],
};

export default config;