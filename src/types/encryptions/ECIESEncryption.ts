import { EncryptionWithMacIV } from './EncryptionWithTag';

export interface ECIESEncryption extends EncryptionWithMacIV {
    ephemPublicKey: string;
}
