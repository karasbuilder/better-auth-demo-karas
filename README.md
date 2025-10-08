# Better-Auth Demo

A comprehensive demonstration of better-auth authentication system built with Next.js 15, showcasing social providers, email/password authentication, and protected routes.

## Overview

This demo application showcases the power and flexibility of better-auth, a modern authentication library for Next.js applications. The project demonstrates various authentication methods including social OAuth providers (Google, GitHub) and traditional email/password authentication, all wrapped in a beautiful, responsive UI.

## Features

- 🔐 **Multiple Authentication Methods**
  - Google OAuth integration
  - GitHub OAuth integration  
  - Email/password authentication
- 🛡️ **Security Features**
  - JWT token management
  - Session management
  - Protected routes
  - Secure password hashing
- 🎨 **Modern UI**
  - Responsive design with Tailwind CSS
  - Beautiful gradient backgrounds
  - Interactive components
  - Mobile-friendly interface
- 🚀 **Next.js 15 Features**
  - App Router
  - Server Components
  - Turbopack for fast development

## Tech Stack

- **Framework**: Next.js 15.5.2
- **Authentication**: better-auth 1.3.25
- **Database**: PostgreSQL with Prisma
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Package Manager**: Yarn

## Project Structure

```
better-auth-demo-karas/
├── app/
│   ├── api/auth/[...all]/          # Authentication API routes
│   ├── auth/                       # Authentication pages
│   ├── dashboard/                  # Protected dashboard
│   ├── components/                 # Reusable UI components
│   └── page.tsx                    # Landing page
├── lib/
│   ├── auth.ts                     # Better-auth configuration
│   └── actions/                    # Server actions
├── better-auth_migrations/         # Database migrations
└── public/                         # Static assets
```

### Key Files

- **`lib/auth.ts`** - Main authentication configuration with social providers and database setup
- **`app/api/auth/[...all]/route.ts`** - API route handler for authentication requests
- **`app/auth/page.tsx`** - Authentication page with sign-in/sign-up forms
- **`app/dashboard/page.tsx`** - Protected dashboard page
- **`app/page.tsx`** - Landing page with feature showcase

## Installation

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/karasbuilder/better-auth-demo-karas
   cd better-auth-demo-karas
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   POSTGRESS_URL="url_to_your_postgresql_database"
   
   # GitHub OAuth
   GITHUB_CLIENT_ID="your_github_client_id"
   GITHUB_CLIENT_SECRET="your_github_client_secret"
   
   # Google OAuth
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   ```

4. **Database Setup**
   The database tables will be automatically created when you first run the application. The migration file includes:
   - `user` table for user data
   - `session` table for session management
   - `account` table for OAuth accounts
   - `verification` table for email verification

5. **OAuth Provider Setup IN Localhost**
   
   **GitHub OAuth:**
   - Go to GitHub Settings > Developer settings > OAuth Apps
   - Create a new OAuth App
   - Set Authorization callback URL to: `http://localhost:3000/api/auth/callback/github`
   - Copy Client ID and Client Secret to your `.env.local`

   **Google OAuth:**
   - Go to Google Cloud Console
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Set Authorized redirect URIs to: `http://localhost:3000/api/auth/callback/google`
   - Copy Client ID and Client Secret to your `.env.local`

6. **Run the application**
   ```bash
   yarn dev
   ```

7. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Authentication Flow

1. **Visit the Homepage** - Navigate to the root URL to see the feature overview
2. **Access Authentication** - Click "Try Authentication" or visit `/auth`
3. **Choose Sign-in Method**:
   - **Social Login**: Click Google or GitHub buttons for OAuth
   - **Email/Password**: Use the form for traditional authentication
4. **Access Dashboard** - After successful authentication, you'll be redirected to the protected dashboard

### Available Routes

- `/` - Landing page with feature showcase
- `/auth` - Authentication page (redirects to dashboard if already logged in)
- `/dashboard` - Protected dashboard (redirects to auth if not logged in)
- `/api/auth/*` - Authentication API endpoints

## Development

### Scripts

```bash
# Development server with Turbopack
yarn dev

# Production build
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

### Key Features Demonstrated

1. **Server-Side Authentication**
   - Session validation on server components
   - Automatic redirects based on authentication state
   - Protected route implementation

2. **Client-Side Integration**
   - Authentication state management
   - Sign-in/sign-out functionality
   - User session display

3. **Database Integration**
   - User data persistence
   - Session management
   - OAuth account linking

## Customization

### Adding New OAuth Providers

To add additional OAuth providers, modify `lib/auth.ts`:

```typescript
socialProviders: {
  // Existing providers...
  discord: {
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
  },
}
```

### Styling Customization

The application uses Tailwind CSS for styling. Key customization points:
- Color scheme in `app/globals.css`
- Component styles in individual page files
- Responsive design breakpoints

## Security Considerations

- Environment variables are used for sensitive data
- Database connection uses connection pooling
- Sessions are properly managed and expired
- OAuth redirects are validated
- Protected routes require authentication

## Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Verify PostgreSQL is running
   - Check `POSTGRESS_URL` in `.env.local`
   - Ensure database exists

2. **OAuth Provider Errors**
   - Verify client IDs and secrets
   - Check redirect URLs match exactly
   - Ensure OAuth apps are properly configured

3. **Session Issues**
   - Clear browser cookies
   - Check session table in database
   - Verify session expiration settings

## Contributing

This is a demo project showcasing better-auth capabilities. Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Use as a starting point for your own projects

## License

This project is for demonstration purposes. Please check the better-auth library license for production use.

---

**Built with ❤️ by Karas**  
*Demonstrating the power of better-auth for modern web applications*