import { CryptoAlgorithm, Encoding, Cipher } from '../../enum';

export interface Encryption {
    algo: CryptoAlgorithm;
    encoding: Encoding;
    key: string;
    cipher?: Cipher;
    ciphertext?: string;
}
