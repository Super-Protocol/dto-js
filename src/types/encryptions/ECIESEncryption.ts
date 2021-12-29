import { CryptoAlgorithm } from '../..';
import { EncryptionInfo } from './EncryptionInfo';

export interface ECIESEncryption extends EncryptionInfo {
    algo: CryptoAlgorithm.ECIES;
    iv: string;
    ephemPublicKey: string;
    mac: string;
}
