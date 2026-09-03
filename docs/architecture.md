# Architecture

Adonai's Eye is built as a Modular Monolith with clear boundaries.

- **apps/web**: The single React SPA serving Citizen, Officer, Dispatcher, and Admin via role-based routing.
- **apps/server**: The backend Express API handling logic and integration.
- **packages/shared**: Shared types and schemas.
- **packages/domain**: Business domain models (e.g. State machine, Severity Engine).
- **packages/ui**: Reusable Tailwind design system components.
- **packages/integrations**: External API abstractions (Mock Identity, Mock SAPS).
