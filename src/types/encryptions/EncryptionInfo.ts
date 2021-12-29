import { CryptoAlgorithm, Encoding } from '../../enum';

export interface EncryptionInfo {
    encoding: Encoding;
    key: string;
}
