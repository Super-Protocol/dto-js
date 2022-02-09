import { Cipher } from '../../enum';
import { EncryptionWithIV, EncryptionWithMacIV } from './common';

interface AESEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.AES128 | Cipher.AES192  | Cipher.AES256
        | Cipher.AES_192_CBC | Cipher.AES_128_CBC_HMAC_SHA1 | Cipher.AES_128_CBC_HMAC_SHA256
        | Cipher.AES_128_CFB | Cipher.AES_128_CFB1 | Cipher.AES_128_CFB8
        | Cipher.AES_128_CTR | Cipher.AES_128_ECB | Cipher.AES_128_OFB
        | Cipher.AES_192_CFB | Cipher.AES_192_CFB1  | Cipher.AES_192_CFB8
        | Cipher.AES_192_CTR | Cipher.AES_192_ECB  | Cipher.AES_192_OFB
        | Cipher.AES_256_CBC | Cipher.AES_256_CBC_HMAC_SHA1 | Cipher.AES_256_CBC_HMAC_SHA1
        | Cipher.AES_256_CFB | Cipher.AES_256_CFB1  | Cipher.AES_256_CFB8
        | Cipher.AES_256_CTR | Cipher.AES_256_ECB  | Cipher.AES_256_OFB
        | Cipher.ID_AES128_WRAP_PAD | Cipher.ID_AES192_WRAP_PAD  | Cipher.ID_AES256_WRAP_PAD
}

interface AESEncryptionWithMac extends EncryptionWithMacIV {
    cipher:
        | Cipher.AES_128_CCM | Cipher.AES_128_GCM
        | Cipher.AES_192_CCM | Cipher.AES_192_GCM
        | Cipher.AES_256_CCM | Cipher.AES_256_GCM
        | Cipher.ID_AES128_CCM | Cipher.ID_AES128_GCM
        | Cipher.ID_AES192_CCM | Cipher.ID_AES192_GCM
        | Cipher.ID_AES256_CCM | Cipher.ID_AES256_GCM
}

export type AESEncryption = AESEncryptionBasic | AESEncryptionWithMac;
