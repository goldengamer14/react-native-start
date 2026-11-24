# Architecture

## Application structure

The application uses Expo Router file-based routing. Route components live in
[`src/app/`](../src/app/); shared UI, data, and helpers live outside that
directory.

| Path | Responsibility |
| --- | --- |
| [`src/app/_layout.tsx`](../src/app/_layout.tsx) | Root stack, global stylesheet, custom font loading, and splash-screen visibility |
| [`src/app/index.tsx`](../src/app/index.tsx) | Redirects the root URL to the Home tab |
| [`src/app/(auth)/`](<../src/app/(auth)/>) | Sign-in and sign-up route group |
| [`src/app/(tabs)/`](<../src/app/(tabs)/>) | Main tab navigator and its four screens |
| [`src/app/onboarding.tsx`](../src/app/onboarding.tsx) | Onboarding placeholder route |
| [`src/app/subscriptions/`](../src/app/subscriptions/) | Dynamic subscription detail route |
| [`components/`](../components/) | Reusable subscription cards and list heading |
| [`constants/`](../constants/) | Navigation entries, sample data, theme, and asset maps |
| [`lib/`](../lib/) | Formatting helpers |
| [`assets/`](../assets/) | Fonts, icons, app imagery, and Expo icon artwork |

## Navigation

The root layout provides a stack navigator with headers hidden. The `(tabs)`
route group defines Home, Subscriptions, Insights, and Settings. A separate
dynamic route at `src/app/subscriptions/[id].tsx` displays a subscription ID.
The `(auth)` route group contains sign-in and sign-up screens.

The route groups organize screens without adding the group names to their
visible URLs. Tab names and icons are configured in
[`constants/data.ts`](../constants/data.ts); tab-bar appearance is configured
in [`src/app/(tabs)/_layout.tsx`](<../src/app/(tabs)/_layout.tsx>).
The root `index.tsx` makes the initial route deterministic by redirecting `/`
to `/(tabs)`, whose index screen is Home.

## UI and state

Screens use React Native components, NativeWind class names, and shared
component classes from [`global.css`](../global.css). The Home screen uses a
vertical `FlatList` as its page container: the dashboard and horizontal
upcoming carousel are in the list header, while subscription cards are list
rows. It owns the expanded-subscription selection with React state. The root
layout prevents automatic splash dismissal and hides the splash after fonts are
loaded. If loading fails, it reports the font error, hides the splash, and
continues with system font fallbacks so the app does not remain on the splash.

Sample screen content is provided by constants rather than a data service or
global state store.

Global subscription and navigation types are declared in
[`type.d.ts`](../type.d.ts). There is no separate API, persistence, or domain
service layer in the current implementation.

## App configuration

[`app.json`](../app.json) configures Expo Router, splash screen, fonts, portrait
orientation, typed routes, and the React Compiler experiment. The web output is
configured as `server`. Native platform project folders are generated rather
than tracked in this repository.

The project uses Expo, React Native, Expo Router, NativeWind, and Tailwind CSS.
Exact package versions are maintained in [`package.json`](../package.json) and
[`package-lock.json`](../package-lock.json).
