import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

interface RC2EncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.RC2 | Cipher.RC2_128
        | Cipher.RC2_40 | Cipher.RC2_40_CBC
        | Cipher.RC2_64 | Cipher.RC2_64_CBC
        | Cipher.RC2_CBC | Cipher.RC2_CFB
        | Cipher.RC2_ECB | Cipher.RC2_OFB
}

interface RC4EncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.RC4 | Cipher.RC4_40 | Cipher.RC4_HMAC_MD5
}

export type RCEncryption = RC2EncryptionBasic | RC4EncryptionBasic;
