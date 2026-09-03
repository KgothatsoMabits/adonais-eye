export class MockIdentityProvider {
  verifyIdentity() { return Promise.resolve(true); }
}
