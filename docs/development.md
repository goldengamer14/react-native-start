# Development

## Requirements and dependencies

This repository uses npm and includes `package-lock.json`. The key runtime
versions in `package.json` are Expo `~58.0.26`, Expo Router `~58.0.32`, React
Native `0.88.1`, React `19.3.0`, and TypeScript `~6.0.3`. Styling uses NativeWind
`5.0.0-rc.0` and Tailwind CSS `4.1.12`.

## Setup and run

From the repository root:

```sh
npm install
npm run start
```

Available package scripts are:

| Command | Purpose |
| --- | --- |
| `npm run start` | Start Expo |
| `npm run start-clear` | Start Expo and clear its cache |
| `npm run android` | Start Expo for Android |
| `npm run ios` | Start Expo for iOS |
| `npm run web` | Start Expo for web |
| `npm run lint` | Invoke `expo lint` |
| `npm run reset-project` | Intended to run the project reset script |

The `reset-project` script currently points to `./scripts/reset-project.js`;
the tracked reset script is under `example/scripts/`, so the root target is not
present in the tracked project.

## Configuration

- [`app.json`](../app.json) configures Expo Router, font and splash plugins,
  portrait orientation, app icons, typed routes, and web output.
- [`src/app/_layout.tsx`](../src/app/_layout.tsx) prevents the splash screen
  from hiding automatically and dismisses it after custom fonts have loaded.
  If custom font loading fails, the error is logged and the app continues with
  system font fallbacks rather than remaining on the splash screen.
- [`tsconfig.json`](../tsconfig.json) enables strict TypeScript and the `@/*`
  root alias. Its include patterns cover TypeScript files throughout the
  repository, including `example/`.
- [`metro.config.js`](../metro.config.js), [`postcss.config.mjs`](../postcss.config.mjs),
  and [`global.css`](../global.css) support NativeWind and Tailwind styling.
- Generated `.expo/`, `ios/`, and `android/` output is ignored by Git.

## Validation notes

There is no test script or test runner configured in `package.json`.
`npm run lint` invokes Expo's lint setup, but this repository snapshot has no
tracked ESLint configuration or ESLint dependencies; running the command may
prompt to configure/install them.

Because the TypeScript include patterns also include `example/`, a project-wide
`npx tsc --noEmit` checks that separate tree as well as the app documented
here. Keep that in mind when interpreting diagnostics for this project.
