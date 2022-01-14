import { EncryptionWithMacIV } from './EncryptionWithTag';

export interface RSAHybridEncryption extends EncryptionWithMacIV {
    keys: string;
}
