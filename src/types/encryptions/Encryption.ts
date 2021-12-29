import { CryptoAlgorithm, Encoding } from '../../enum';

export interface Encryption {
    algo: CryptoAlgorithm;
    encoding: Encoding;
    key: string;
    cipher?: string;
}
