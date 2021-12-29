import { CryptoAlgorithm } from '../..';
import { Encryption } from './Encryption';

export interface ECIESEncryption extends Encryption {
    iv: string;
    ephemPublicKey: string;
    mac: string;
}
