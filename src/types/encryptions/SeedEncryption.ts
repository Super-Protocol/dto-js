import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

export interface SEEDEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.SEED | Cipher.SEED_CFB
        | Cipher.SEED_CBC | Cipher.SEED_ECB
        | Cipher.SEED_OFB
}

export type SEEDEncryption = SEEDEncryptionBasic;
