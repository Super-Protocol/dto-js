import { Cipher } from '../../enum';
import { EncryptionWithIV, EncryptionWithMacIV } from './common';

export interface CHACHA20EncryptionBasic extends EncryptionWithIV {
    cipher: Cipher.CHACHA20
}

export interface CHACHA20EncryptionWithMac extends EncryptionWithMacIV {
    cipher: Cipher.CHACHA20_POLY1305
}

export type CHACHA20Encryption = CHACHA20EncryptionBasic | CHACHA20EncryptionWithMac;
