import { EncryptionWithMacIV } from './common';

export interface RSAHybridEncryption extends EncryptionWithMacIV {
    keys: string;
}
