import crypto from 'crypto';

// createHash() - generally used for hashing passwords
const hash = crypto.createHash('sha256');
hash.update('password1234');
// console.log(hash.digest('hex'));

// randomBytes() - can be used for creating a unique id
crypto.randomBytes(12, (err, buf) => {
    if (err) 
        throw err;
    // console.log(buf.toString('hex'));
})

const algo = 'aes-128-cbc'; // It is a string-type value that dependent on OpenSSL. The examples are aes192, aes256, etc.
const key = crypto.randomBytes(16); // It is the raw key that is used by the algorithm and iv.
const iv = crypto.randomBytes(16); // initialization vector that must be uncertain and very unique. 
// However, an ideal iv will be cryptographically random. It don’t need to be secret.
// An iv is similar to a salt used for password hashing, and makes it difficult for hackers to decrypt the content.

const cipher = crypto.createCipheriv(algo, key, iv);
let encrypted = cipher.update('This is a secret mesg', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('encrypted', encrypted);

const decipher = crypto.createDecipheriv(algo, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('decrypted', decrypted);