# Vercel Web Analytics Setup Guide

This guide documents the implementation of Vercel Web Analytics in the Vote Demo project.

## Overview

This React/Vite project has been configured to use Vercel Web Analytics for tracking visitor metrics and page performance.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. You can install it using:

```bash
npm install vercel
```

Or with your preferred package manager:
- pnpm: `pnpm install vercel`
- yarn: `yarn install vercel`
- bun: `bun install vercel`

## Enable Web Analytics in Vercel

1. Go to the [Vercel dashboard](https://vercel.com/dashboard)
2. Select your Project
3. Click the **Analytics** tab
4. Click **Enable** from the dialog

> **Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

## Implementation Details

### Package Installation

The `@vercel/analytics` package (version 1.6.1) is already installed in this project. If you need to add it to another project, use:

```bash
npm install @vercel/analytics
```

### React/Vite Integration

Since this project uses React with Vite, the Analytics component is integrated following the React best practices:

**File: `src/App.jsx`**

```jsx
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      {/* Rest of your app */}
    </>
  );
}

export default App;
```

The `Analytics` component is placed at the root of the application, which ensures it can track all page views and interactions across your entire app.

### How It Works

- The Analytics component automatically tracks page views when using React Router
- It sends minimal data to Vercel's analytics service
- All tracking respects user privacy settings
- No additional configuration is required beyond adding the component

## Deployment to Vercel

Deploy your app using:

```bash
vercel deploy
```

Or, for recommended setup with Git:

1. Connect your project's Git repository to Vercel
2. Push your changes to your Git repository
3. Vercel will automatically deploy your latest commits

Once deployed, the analytics service will start tracking visitors and page views automatically.

## Verifying the Setup

After deployment, you can verify that analytics are working:

1. Visit your deployed site
2. Open your browser's Developer Tools (F12)
3. Go to the **Network** tab
4. Refresh the page
5. You should see a request to `/_vercel/insights/view`

If you see this request, Web Analytics is working correctly!

## Viewing Your Data

Once your app is deployed and users have visited your site, you can view your analytics:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. After a few days of traffic, you'll see data including:
   - Page views
   - Unique visitors
   - Top pages
   - Referrers
   - And more

## Advanced Features

### Custom Events (Pro and Enterprise Plans)

If you're on a Pro or Enterprise plan, you can track custom events like button clicks or form submissions. See the [custom events documentation](/docs/analytics/custom-events) for details.

### Data Filtering

You can filter and explore your analytics data. See the [filtering guide](/docs/analytics/filtering) for more information.

## Privacy and Compliance

Vercel Web Analytics complies with privacy regulations including GDPR, CCPA, and others. See the [privacy policy documentation](/docs/analytics/privacy-policy) for details.

## Next Steps

- [Learn about the @vercel/analytics package](/docs/analytics/package)
- [Set up custom events](/docs/analytics/custom-events)
- [Filter and explore your data](/docs/analytics/filtering)
- [Read about privacy and compliance](/docs/analytics/privacy-policy)
- [View pricing and limits](/docs/analytics/limits-and-pricing)
- [Troubleshooting guide](/docs/analytics/troubleshooting)

## Files Modified

- `src/App.jsx` - Analytics component already integrated

## Dependencies

- `@vercel/analytics`: ^1.6.1 (already installed)
- `react`: ^19.2.0 (required)
- `react-dom`: ^19.2.0 (required)
