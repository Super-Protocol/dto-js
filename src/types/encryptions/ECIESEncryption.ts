import { EncryptionWithMacIV } from './common';

export interface ECIESEncryption extends EncryptionWithMacIV {
    ephemPublicKey: string;
}
