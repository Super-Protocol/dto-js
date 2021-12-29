import { CryptoAlgorithm, Encoding } from '../enum';

export interface EncryptionInfo {
    algo: CryptoAlgorithm;
    encoding: Encoding;
    key: string;
    dependencies?: string;
}
