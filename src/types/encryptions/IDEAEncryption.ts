import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

export interface IDEAEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.IDEA
        | Cipher.IDEA_CBC | Cipher.IDEA_CFB
        | Cipher.IDEA_ECB | Cipher.IDEA_OFB
}

export type IDEAEncryption = IDEAEncryptionBasic;
