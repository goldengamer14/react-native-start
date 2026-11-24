# Screens and features

Route groups such as `(tabs)` and `(auth)` are organizational and do not form
part of the route URL.

## Main tabs

| Screen | Source | Current behavior |
| --- | --- | --- |
| Home | [`src/app/(tabs)/index.tsx`](<../src/app/(tabs)/index.tsx>) | Uses a vertical `FlatList` as the page container. Its header shows the sample user, balance and date, and a horizontal upcoming-renewal carousel; subscription cards are the vertical list rows. A card can be expanded to display payment, category, start date, renewal date, and status. Data comes from constants. |
| Subscriptions | [`src/app/(tabs)/subscriptions.tsx`](<../src/app/(tabs)/subscriptions.tsx>) | Shows links for Spotify and Claude examples. |
| Insights | [`src/app/(tabs)/insights.tsx`](<../src/app/(tabs)/insights.tsx>) | Placeholder text; no calculations or reports are shown. |
| Settings | [`src/app/(tabs)/settings.tsx`](<../src/app/(tabs)/settings.tsx>) | Placeholder text; no settings are available yet. |

The custom tab bar is configured in
[`src/app/(tabs)/_layout.tsx`](<../src/app/(tabs)/_layout.tsx>). Its screen names
and icons are listed in [`constants/data.ts`](../constants/data.ts).
Opening the root path `/` redirects to the Home tab through
[`src/app/index.tsx`](../src/app/index.tsx).

## Other routes

| Screen | Source | Current behavior |
| --- | --- | --- |
| Onboarding | [`src/app/onboarding.tsx`](../src/app/onboarding.tsx) | Placeholder content and a link back to Home. |
| Sign in | [`src/app/(auth)/sign-in.tsx`](<../src/app/(auth)/sign-in.tsx>) | Placeholder content with links to sign-up and Home; no authentication occurs. |
| Sign up | [`src/app/(auth)/sign-up.tsx`](<../src/app/(auth)/sign-up.tsx>) | Placeholder content with links to sign-in and Home; no account is created. |
| Subscription detail | [`src/app/subscriptions/[id].tsx`](../src/app/subscriptions/[id].tsx) | Displays the route's `id` parameter and a link back to the Subscriptions tab. It does not look up or edit subscription data. |

## Not yet implemented

- Creating, editing, deleting, or persisting subscriptions.
- Authentication or user-specific data.
- Computing aggregate costs from subscription records.
- Live status, payment, or renewal synchronization.
- Working actions for the list headings' “View all” controls.
- Insights or configurable settings.

These are gaps relative to the product goal, not promises about future scope.
