import { EncryptionWithIV } from './EncryptionWithIV';

export interface EncryptionWithMacIV extends EncryptionWithIV {
    mac: string;
}
