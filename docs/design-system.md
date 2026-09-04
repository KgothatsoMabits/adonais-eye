# Adonais Eye (e-SAPS) Design System

## Overview
This design system ensures a scalable, reusable, and accessible interface structure for the Adonai's Eye ecosystem (Citizen, Officer, and Dispatcher apps). We use the Atomic Design methodology to organize UI components into a predictable hierarchy.

## Core Principles
1. **Design Once, Build Once, Reuse Everywhere.**
2. **Mobile-First Responsive Composition.**
3. **Strict Separation of Concerns:** UI (how it looks) is decoupled from Business Logic (how it works).
4. **Safety-Oriented UX:** The UI must convey Trust, Safety, and Professionalism. Destructive or critical colors (e.g., red) are reserved for emergency actions or errors.

## Design Tokens (Tailwind)

### Colors
- `brand.dark`: `#0A243D` (Deep, authoritative navy)
- `brand.blue`: `#1570EF` (Vibrant action color)
- `brand.light`: `#EFF8FF` (Soft blue-tinted white)
- `brand.coral`: `#FF475A` (SOS and critical warnings)

### Typography
- **Font Family:** `Plus Jakarta Sans`
- **Scale:** Tailwind default spacing/sizing configured for fluid mobile adaptation. 
- **Forms/Inputs:** Maintained at `16px` to prevent iOS auto-zoom. Labels are `14px` sentence case.

### Spacing & Layout
- The `MainLayout` utilizes a constrained mobile-first boundary (`max-w-md mx-auto`) to ensure fluidity on mobile while gracefully degrading into a centered phone-sized interface on desktop views. 

## Component Hierarchy (Atomic Design)

### Atoms
The smallest indivisible UI components. They do not manage business logic or external state.
- **Button:** Primary, secondary, outline, ghost, danger states with loading & disabled variants.
- **Input:** Standard HTML text input primitive.
- **Label:** Standard form label primitive.
- **FormError:** Primitive for rendering validation strings.

### Molecules
Simple groups of UI elements functioning together as a unit.
- **FormField:** Composes `Label`, `Input`, and `FormError` into a reusable field.
- **PasswordInput:** Composes `Label`, `Input` (with toggle state), and `FormError`.
- *(Future)* OTPInput, PhoneField, ProfileField.

### Organisms
Complex sections combining molecules and atoms, representing distinct interface blocks.
- *(Future)* ProfileInformationSection, AppHeader, EmergencyActionCard.

### Templates
Page-level layout structures defining where organisms and molecules are placed (without hardcoded content).
- *(Future)* AuthenticationTemplate, MainAppTemplate.

### Pages
Concrete implementations binding Templates, Organisms, Molecules, and Atoms with real state, data, and context.
- Examples: `Login.tsx`, `Registration.tsx`, `Home.tsx`.

## Contribution Rules
1. **Never Duplicate UI:** Always check `packages/ui` before building a new UI component.
2. **Extend via Props:** If a button needs to be slightly different, extend the `<Button>` component via variants (e.g., `variant="danger"`) rather than creating an isolated component.
3. **No Direct Page-Level Overrides:** Prevent "CSS hacks" in page components. Component states must be intentional and registered in the core design system.
