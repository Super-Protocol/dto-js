import { CryptoAlgorithm, Encoding } from '../enum';
import { EncryptionDependencies } from './EncryptionDependencies';

export interface EncryptionInfo {
    algo: CryptoAlgorithm;
    encoding: Encoding;
    key: string;
    dependencies: EncryptionDependencies;
}
