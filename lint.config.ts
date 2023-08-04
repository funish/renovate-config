import { defineLintConfig } from "@funish/lint";

export default defineLintConfig({
  staged: {
    "*.json": "pnpm format",
  },
});
