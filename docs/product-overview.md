# Product overview

## Goal

The application is intended to help users track their subscriptions, monitor
subscription statuses and dates, understand their overall subscription cost,
and stay aware of the plans they currently have.

## Current state

The repository contains an early Expo / React Native prototype. It presents a
subscription dashboard using local, hardcoded sample data. The home screen
shows a sample balance, upcoming renewals, and subscription cards. The cards
can be expanded to show additional details. Its vertical page is a `FlatList`
whose header contains the dashboard and upcoming carousel, with subscriptions
rendered as list rows. The splash screen is held until the custom fonts load.

Several routes are placeholders. There is no persistence or backend integration
in the inspected application code, and the sample data is not connected to an
account or live subscription provider.

## Scope and status

| Capability | Current status |
| --- | --- |
| Browse sample subscriptions and their details | Implemented with static data |
| Expand a subscription card | Implemented in the home screen |
| Show upcoming subscription examples | Implemented with static data |
| Track user-entered subscriptions across app launches | Not implemented |
| Authenticate users | Not implemented; sign-in and sign-up are placeholders |
| Calculate overall subscription cost from subscription records | Not implemented; the home balance is a fixed sample value |
| Provide live billing or renewal information | Not implemented |
| Show subscription insights | Placeholder screen |

This table describes the repository's current implementation, not a feature
roadmap. Add planned behavior only when it has been confirmed.
