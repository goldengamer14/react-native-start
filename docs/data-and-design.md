# Data and design

## Data

The current example data is defined in
[`constants/data.ts`](../constants/data.ts). It includes:

- A sample home user and fixed balance with a next-renewal date.
- Three upcoming-subscription entries.
- Four subscription entries with sample service names, prices, currencies,
  billing periods, statuses, dates, categories, payment descriptions, and card
  colors.
- Four tab definitions with titles and icon references.

These constants are presentation data; the application does not currently
persist or synchronize them.

Global TypeScript interfaces in [`type.d.ts`](../type.d.ts) describe tabs,
subscriptions, upcoming subscriptions, and their card props. Asset maps are
defined in [`constants/icons.ts`](../constants/icons.ts) and
[`constants/images.ts`](../constants/images.ts).

Formatting helpers in [`lib/utils.ts`](../lib/utils.ts) format currency,
subscription dates, and status labels. The home screen formats its next-renewal
date with Day.js.

## Visual system

[`global.css`](../global.css) defines NativeWind/Tailwind theme variables and
component classes. [`constants/theme.ts`](../constants/theme.ts) contains
corresponding JavaScript color and spacing values plus tab-bar dimensions.
When changing a shared visual value, keep both representations consistent
where both are used.

The app loads Plus Jakarta Sans font weights from
[`assets/fonts/`](../assets/fonts/). App artwork, service icons, and platform
icons are stored under [`assets/`](../assets/), primarily in `images/`,
`icons/`, and `expo.icon/`.

The design uses a warm cream background, navy primary color, coral accent, and
rounded cards. Subscription examples can supply their own card colors.

## Formatting defaults

- Currency formatting uses `en-US` locale and defaults to `INR` if no currency
  is provided.
- Subscription dates are displayed as `MM/DD/YYYY`.
- Missing or invalid dates display as “Not provided”; missing statuses display
  as “Unknown”.
