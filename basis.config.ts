import { defineBasisConfig } from "@funish/basis";

export default defineBasisConfig({
  lint: {
    staged: {
      "*": "pnpm lint",
    },
    project: {
      check: "renovate-config-validator ./default.json",
      format: "prettier --write --list-different . --ignore-path .gitignore",
    },
  },

  git: {
    hooks: {
      "pre-commit": "pnpm basis lint --staged",
      "commit-msg": "pnpm basis git --lint-commit",
    },
    autoSetup: true,
  },

  packageManager: {
    autoDetect: true,
  },
});
