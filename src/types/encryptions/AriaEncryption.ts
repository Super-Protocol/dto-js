import { Cipher } from '../../enum';
import { EncryptionWithIV, EncryptionWithMacIV } from './common';

export interface ARIAEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.ARIA128 | Cipher.ARIA192  | Cipher.ARIA256
        | Cipher.ARIA_128_CFB | Cipher.ARIA_128_CFB1 | Cipher.ARIA_128_CFB8
        | Cipher.ARIA_128_CTR | Cipher.ARIA_128_ECB | Cipher.ARIA_128_OFB
        | Cipher.ARIA_192_CBC
        | Cipher.ARIA_192_CFB | Cipher.ARIA_192_CFB1  | Cipher.ARIA_192_CFB8
        | Cipher.ARIA_192_CTR | Cipher.ARIA_192_ECB  | Cipher.ARIA_192_OFB
        | Cipher.ARIA_256_CBC
        | Cipher.ARIA_256_CFB | Cipher.ARIA_256_CFB1  | Cipher.ARIA_256_CFB8
        | Cipher.ARIA_256_CTR | Cipher.ARIA_256_ECB  | Cipher.ARIA_256_OFB
}

export interface ARIAEncryptionWithMac extends EncryptionWithMacIV {
    cipher:
        | Cipher.ARIA_128_CCM | Cipher.ARIA_128_GCM
        | Cipher.ARIA_192_CCM | Cipher.ARIA_192_GCM
        | Cipher.ARIA_256_CCM | Cipher.ARIA_256_GCM
}

export type ARIAEncryption = ARIAEncryptionBasic | ARIAEncryptionWithMac;
