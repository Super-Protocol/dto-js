import { Encryption } from './Encryption';

export interface EncryptionWithIV extends Encryption {
    iv: string;
}
