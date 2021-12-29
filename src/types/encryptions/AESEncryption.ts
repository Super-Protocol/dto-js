import { CryptoAlgorithm } from '../..';
import { EncryptionInfo } from './EncryptionInfo';

export interface AESEncryption extends EncryptionInfo {
    algo: CryptoAlgorithm.AES;
    iv: string;
    authTag: string;
}
