# Architecture Decisions

1. **Modular monolith first:** To allow rapid iteration while preserving boundary separation for future microservices.
2. **React + TypeScript frontend:** Standard, robust SPA framework.
3. **Node.js + TypeScript backend:** Shared language with frontend.
4. **Firebase Auth for MVP OTP:** Offloads SMS complexity.
5. **Firestore for MVP persistence:** Realtime capable, scalable.
6. **Internal UUIDs:** We do not use national ID numbers as primary keys for privacy/security.
7. **Protected national ID uniqueness:** Hash lookup used.
8. **Rules-based severity in MVP:** AI is not used for dispatching.
9. **Dispatcher as human-in-the-loop:** No fully automated police dispatch.
10. **Routing provider abstraction:** Ready for Google Maps Route Matrix.
11. **Identity provider abstraction:** Ready for future gov integration.
12. **Notification provider abstraction:** Extensible.
13. **Real-time active request updates:** Provided via Firestore listeners.
14. **Synthetic police infrastructure in development:** Used for testing/demo.
15. **No public police-resource map:** Citizen map shows only assigned units.
16. **No payment/tipping:** Out of scope and anti-pattern for civic tech.
17. **Privacy and auditability:** Built into architecture fundamentally.
