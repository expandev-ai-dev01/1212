# Quiz Naruto - Backend API

Backend API for Quiz Naruto application - A quiz about Naruto universe with images.

## Features

- RESTful API with Express.js
- TypeScript for type safety
- In-memory data storage (no database)
- CORS enabled for frontend integration
- Comprehensive error handling
- Request validation with Zod

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Validation**: Zod
- **Testing**: Jest

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

4. Configure environment variables in `.env`

### Development

Run the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Build

Build for production:

```bash
npm run build
```

### Production

Start production server:

```bash
npm start
```

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

### Linting

Run ESLint:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check

```
GET /health
```

Returns server health status.

### API Endpoints

All API endpoints are versioned and prefixed with `/api/v1`.

## Project Structure

```
src/
├── api/              # API controllers
│   └── v1/           # API version 1
│       ├── external/ # Public endpoints
│       └── internal/ # Authenticated endpoints
├── routes/           # Route definitions
├── middleware/       # Express middleware
├── services/         # Business logic
├── utils/            # Utility functions
├── constants/        # Application constants
├── instances/        # Service instances
├── tests/            # Global test utilities
└── server.ts         # Application entry point
```

## Environment Variables

- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 3000)
- `API_VERSION`: API version (default: v1)
- `CORS_ORIGINS`: Allowed CORS origins (comma-separated)
- `CACHE_TTL`: Cache time-to-live in seconds
- `CACHE_CHECK_PERIOD`: Cache check period in seconds

## License

ISC