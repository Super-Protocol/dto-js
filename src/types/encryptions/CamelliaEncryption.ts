import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

export interface CAMELLIAEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.CAMELLIA128 | Cipher.CAMELLIA192  | Cipher.CAMELLIA256
        | Cipher.CAMELLIA_128_CBC
        | Cipher.CAMELLIA_128_CFB | Cipher.CAMELLIA_128_CFB1 | Cipher.CAMELLIA_128_CFB8
        | Cipher.CAMELLIA_128_CTR | Cipher.CAMELLIA_128_ECB | Cipher.CAMELLIA_128_OFB
        | Cipher.CAMELLIA_192_CBC
        | Cipher.CAMELLIA_192_CFB | Cipher.CAMELLIA_192_CFB1  | Cipher.CAMELLIA_192_CFB8
        | Cipher.CAMELLIA_192_CTR | Cipher.CAMELLIA_192_ECB  | Cipher.CAMELLIA_192_OFB
        | Cipher.CAMELLIA_256_CBC
        | Cipher.CAMELLIA_256_CFB | Cipher.CAMELLIA_256_CFB1  | Cipher.CAMELLIA_256_CFB8
        | Cipher.CAMELLIA_256_CTR | Cipher.CAMELLIA_256_ECB  | Cipher.CAMELLIA_256_OFB
}

export type CAMELLIAEncryption = CAMELLIAEncryptionBasic;
