# Subscription Tracker

An Expo and React Native application prototype for helping users track
subscriptions, their statuses and renewal dates, overall costs, and current
plans.

The current app is a UI prototype backed by typed, hardcoded sample data. It is
not yet connected to an account, backend, payment provider, or persistent
storage.

## What is implemented

- A Home dashboard with a sample balance and renewal date.
- A horizontal upcoming-subscriptions carousel.
- A vertically scrolling Home page implemented as a `FlatList`, with dashboard
  content in its header and subscription cards as list rows.
- Expandable subscription cards with plan, payment, status, and date details.
- A custom tab bar for Home, Subscriptions, Insights, and Settings.
- Root launch redirects to the Home tab.
- Expo splash-screen handling that keeps the splash visible until custom fonts
  are loaded, then falls back to system fonts if loading fails.
- Shared currency, date, and status formatting helpers.

The Subscriptions tab, authentication screens, Insights, Settings, onboarding,
and subscription detail route are currently placeholders or examples. See
[Current limitations](#current-limitations) and the [project documentation](./docs/README.md)
for details.

## Tech stack

- Expo SDK 58 and Expo Router
- React 19 and React Native 0.88
- TypeScript
- NativeWind 5 and Tailwind CSS 4
- Day.js for date formatting

## Getting started

Install dependencies and start the Expo development server:

```sh
npm install
npm run start
```

Use the Expo CLI commands to open a target:

```sh
npm run android
npm run ios
npm run web
```

Additional package scripts include `npm run start-clear` to clear the Expo
cache and `npm run lint` to invoke Expo lint. Lint setup is not currently
committed; see [Development notes](./docs/development.md#validation-notes)
before running it. There is no test runner configured in this repository.

## Project structure

```text
src/app/            Expo Router layouts, tabs, auth, and detail routes
components/         Shared subscription cards and list heading
constants/          Typed sample data, icons, images, and theme values
lib/                Formatting helpers
assets/             Fonts, icons, and application images
docs/               Product, architecture, screen, data, and development docs
example/            Separate Expo starter example; not part of the app docs
```

## Current limitations

- Subscription data and the displayed balance are sample constants; the balance
  is not calculated from the subscription list.
- Changes are not persisted between launches.
- Authentication, live subscription synchronization, and payment management
  are not implemented.
- Insights and Settings are placeholder screens.
- The subscription detail route currently displays its route ID rather than
  loading a subscription record.

## Documentation

Start with the [documentation index](./docs/README.md), then see:

- [Product overview](./docs/product-overview.md)
- [Architecture](./docs/architecture.md)
- [Screens and features](./docs/screens-and-features.md)
- [Data and design](./docs/data-and-design.md)
- [Development and configuration](./docs/development.md)
