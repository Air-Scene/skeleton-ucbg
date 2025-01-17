export enum AccountStatus {
    PENDING = 'PENDING',    // Just registered, email not verified
    ACTIVE = 'ACTIVE',      // Email verified, account active
    INACTIVE = 'INACTIVE',  // User deactivated their account
    LOCKED = 'LOCKED',      // Account locked due to security concerns
    SUSPENDED = 'SUSPENDED' // Account suspended by admin
}
  