/**
 * Prints a bcrypt hash for an administrator passphrase:
 *   node scripts/hash-password.js "your passphrase"
 * Put the result in ADMIN_PASSWORD_HASH so no plaintext password is stored
 * in your environment variables.
 */
import bcrypt from 'bcryptjs';

const password = process.argv[2];

if (!password) {
  console.error('Usage: node scripts/hash-password.js "your passphrase"');
  process.exit(1);
}

if (password.length < 10) {
  console.warn('[warn] Use at least 10 characters for a production passphrase.\n');
}

console.log(`ADMIN_PASSWORD_HASH=${await bcrypt.hash(password, 12)}`);
