import { HashAlgorithm } from '../../enum';
import { DataEncoding } from '../common/DataEncoding';

export interface Hash extends DataEncoding {
    algo: HashAlgorithm;
    hash: string;
}
