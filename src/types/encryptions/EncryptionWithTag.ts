import { Encryption } from './Encryption';

export interface EncryptionWithMacIV extends Encryption {
    iv: string;
    mac: string;
}
