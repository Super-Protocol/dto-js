import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

export interface DESEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.DES | Cipher.DES3 | Cipher.DESX
        | Cipher.DES_CFB | Cipher.DES_CFB1 | Cipher.DES_CFB8
        | Cipher.DES_CBC | Cipher.DES_ECB | Cipher.DESX_CBC
        | Cipher.DES_EDE | Cipher.DES_EDE_CBC | Cipher.DES_EDE_CFB
        | Cipher.DES_EDE_ECB  | Cipher.DES_EDE_OFB
        | Cipher.DES_EDE_CFB  | Cipher.DES_EDE_ECB  | Cipher.DES_EDE_OFB
        | Cipher.DES_EDE3 | Cipher.DES_EDE3_CBC
        | Cipher.DES_EDE3_CFB | Cipher.DES_EDE3_CFB1 | Cipher.DES_EDE3_CFB8
        | Cipher.DES_EDE3_ECB | Cipher.DES_EDE3_OFB
}

export type DESEncryption = DESEncryptionBasic;
