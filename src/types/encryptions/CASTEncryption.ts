import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

export interface CASTEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.CAST | Cipher.CAST_CBC
        | Cipher.CAST5_CBC | Cipher.CAST5_CFB
        | Cipher.CAST5_ECB | Cipher.CAST5_OFB
}

export type CASTEncryption = CASTEncryptionBasic;
