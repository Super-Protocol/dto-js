import { CryptoAlgorithm, Cipher } from '../../../enum';
import { DataEncoding } from '../../common/DataEncoding';

export interface Encryption extends DataEncoding {
    algo: CryptoAlgorithm;
    key?: string;
    cipher?: Cipher;
    ciphertext?: string;
}
