import { CryptoAlgorithm } from '../..';
import { Encryption } from './Encryption';

export interface AESEncryption extends Encryption {
    iv: string;
    authTag: string;
}
