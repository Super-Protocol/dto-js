import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

interface SM4EncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.SM4 | Cipher.SM4_CTR
        | Cipher.SM4_CBC | Cipher.SM4_CFB
        | Cipher.SM4_ECB | Cipher.SM4_OFB
}

export type SM4Encryption = SM4EncryptionBasic;
