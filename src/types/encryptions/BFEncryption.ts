import { Cipher } from '../../enum';
import { EncryptionWithIV } from './common';

interface BFEncryptionBasic extends EncryptionWithIV {
    cipher:
        | Cipher.BF | Cipher.BF_CBC  | Cipher.BF_CFB
        | Cipher.BF_ECB | Cipher.BF_OFB | Cipher.BLOWFISH
}

export type BFEncryption = BFEncryptionBasic;
