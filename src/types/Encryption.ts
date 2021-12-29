import { EncryptionInfo } from './encryptions/EncryptionInfo';

export interface Encryption extends EncryptionInfo {
    cipher: string;
}
