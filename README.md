# Landing Page Maker

A modern, full-featured landing page builder that allows users to create professional and beautiful landing pages without writing code. This project is built with the T3 Stack for maximum performance and developer experience.

## Overview

**Landing Page Maker** is a web application that empowers users to design, customize, and deploy landing pages quickly and efficiently. With an intuitive block-based editor, pre-designed components, and Tailwind CSS styling, users can create stunning landing pages in minutes.

### Key Features

- **Block-Based Editor**: Drag-and-drop interface to compose landing pages from pre-built blocks
- **Pre-Designed Components**: A comprehensive library of ready-to-use landing page sections including:
  - Hero sections
  - Call-to-action blocks
  - Feature showcases
  - Pricing tables
  - Testimonials
  - Contact forms
  - Headers and footers
  - And many more...
- **Real-Time Preview**: See changes instantly as you build
- **Fully Responsive**: All landing pages are mobile-first and responsive by default
- **Tailwind CSS Integration**: Professional styling with the power of Tailwind CSS
- **Easy Deployment**: One-click deployment to production

## Tech Stack

This project is built on the [T3 Stack](https://create.t3.gg/), which combines:

- **[Next.js](https://nextjs.org)** - React framework for production with server-side rendering
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS for rapid UI development
- **[tRPC](https://trpc.io)** - End-to-end typesafe APIs
- **[Prisma](https://prisma.io)** - Modern database ORM
- **[NextAuth.js](https://next-auth.js.org)** - Authentication for Next.js
- **[Shadcn/ui](https://ui.shadcn.com/)** - High-quality React components

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- A modern web browser

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start development server with Turbo mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Fix linting issues
- `npm run format:check` - Check code formatting
- `npm run format:write` - Format code with Prettier
- `npm run check` - Run ESLint, Prettier check, and TypeScript type checking
- `npm run fix` - Run ESLint fix and Prettier format
- `npm run typecheck` - Run TypeScript type checker

## Project Structure

- `/src/app` - Next.js app directory with pages and layouts
- `/src/app/blocks` - Pre-designed landing page block components
- `/src/components` - Reusable UI components
- `/src/components/ui` - Shadcn/ui component library
- `/src/server` - Backend API routes and server logic
- `/src/trpc` - tRPC configuration

## How It Works

1. **Browse Blocks**: Users can explore a library of pre-designed landing page components
2. **Customize**: Edit block content, colors, and layout using the editor
3. **Preview**: See real-time updates as changes are made
4. **Deploy**: Publish the landing page with a single click

## Deployment

The application is optimized for deployment on:

- **[Vercel](https://vercel.com)** - Recommended for optimal Next.js performance
- **[Netlify](https://netlify.com)** - Alternative deployment platform
- **Docker** - For self-hosted deployments

See the [T3 Stack deployment documentation](https://create.t3.gg/en/deployment) for detailed instructions.

## Development

### Code Quality

This project maintains high code quality standards:

- **ESLint** - Enforces code style and best practices
- **Prettier** - Automatic code formatting
- **TypeScript** - Type safety across the entire codebase

Run the quality checks before committing:

```bash
npm run check  # Verify all quality standards
npm run fix    # Automatically fix issues
```

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please refer to:

- [T3 Stack Documentation](https://create.t3.gg/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ using the T3 Stack**
