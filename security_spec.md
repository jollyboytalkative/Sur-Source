# Security Specification — Sur & Source Live Archive & Admin Approval Queue

## 1. Data Invariants
1. **Default Deny**: Any unmatched Firestore path denies all reads and writes.
2. **Verified Single-Admin RBAC**: Only an authenticated Google user with `request.auth.token.email_verified == true` AND `request.auth.token.email == 'jollyboytalkative@gmail.com'` can read/write `discovery_queue` and `discovery_settings`, or create/update/delete `song_overrides`.
3. **Public Read Isolation**: `song_overrides` contains zero PII (no emails, phones, addresses) and is publicly readable (`get` and `list`) so visitors see approved classifications immediately. Private review items in `discovery_queue` and `discovery_settings` are strictly blocked from public or non-admin reads and list queries.
4. **Query Enforcer (No Blanket List)**: Private `allow list` rules explicitly require `isVerifiedAdmin()` AND `resource.data.ownerUid == request.auth.uid` with zero `get()`/`exists()` calls.
5. **Strict Schema & Bounds**: Every string field checks `is string` and `.size() <= maxLength` matching `firebase-blueprint.json`. Document IDs match `^[a-zA-Z0-9_\-]+$` (`<= 128` chars).
6. **Immutable Ownership & Timestamps**: `createdAt`, `approvedBy`/`ownerUid`, and primary IDs (`songId`, `discoveryId`, `settingId`) are immutable after creation; `createdAt` and `updatedAt` must equal `request.time`.
7. **Atomic Approval Transition**: Approving a candidate requires valid `DiscoveryCandidate` state transitions (`pending -> approved` or `pending -> rejected`) and valid `SongOverride` creation in a Firestore batch.

## 2. The "Dirty Dozen" Adversarial Payloads (Expected: `PERMISSION_DENIED`)
1. **Unauthenticated Override Write**: Anonymous user attempts `setDoc('/song_overrides/ns-aashiqui-1990-1', ...)`.
2. **Non-Admin Signed-In Override Write**: Signed-in user (`other@gmail.com`) attempts to publish to `song_overrides`.
3. **Unverified Admin Email Spoof**: User with `email == 'jollyboytalkative@gmail.com'` and `email_verified == false` attempts to read `discovery_queue`.
4. **Public Read on Private Queue**: Unauthenticated or non-admin user attempts `getDocs(collection(db, 'discovery_queue'))`.
5. **Shadow / Ghost Field Injection**: Admin attempts to create a `DiscoveryCandidate` with an extra undeclared field `isAutoApproved: true`.
6. **UID Spoofing on Create**: Admin attempts to create a `DiscoveryCandidate` with `ownerUid: 'someone_else_uid'`.
7. **Oversized String DoS**: Admin attempts to write `adaptationNotes` with 5,000 characters (exceeds `1200` limit).
8. **ID Poisoning**: Attempt to write `/song_overrides/../../bad$id` failing `isValidId()`.
9. **Client Timestamp Forgery**: Attempt to create `song_overrides` with `createdAt` backdated instead of `request.time`.
10. **Immutable Field Mutation**: Attempt to update `song_overrides/{songId}` while altering `createdAt` or `approvedBy`.
11. **Terminal State Bypass**: Non-admin or malformed update trying to flip `discovery_queue` status directly to an invalid enum `'published'`.
12. **Blanket List Without Owner Filter**: Querying `discovery_queue` without `where('ownerUid', '==', auth.currentUser.uid)`.
