# Adonai's Eye (e-SAPS)

A full-stack law enforcement support system built using Atomic Design principles and React Native.

## Project Structure

- **apps/citizen-app**: Mobile app for citizens to request help and track responses.
- **apps/officer-app**: Mobile app for officers to receive and respond to requests.
- **apps/admin-dashboard**: Admin panel for dispatchers and monitoring.
- **backend**: REST API built with Node.js/Express.
- **shared**: Shared code across all apps.

## Getting Started

### Prerequisites

- Node.js >= 18.x
- Yarn or npm
- Expo CLI (for React Native apps)
- PostgreSQL (for backend)
- Firebase or Supabase (for auth and real-time features)

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/adonais-eye.git
cd adonais-eye

# Install dependencies for the backend
cd backend
npm install

# Install dependencies for the citizen app
cd ../apps/citizen-app
yarn install
expo start
```

## Development Notes

- Uses Atomic Design principles in frontend architecture.
- Components organized into atoms, molecules, organisms, templates, and pages.
- Modular services and REST APIs in the backend.
