import { StorageType } from '../../enum';
import { Resource } from './Resource';

export interface StorageProviderResource extends Resource {
    access: {
        storageType: StorageType;
        filepath: string;
        credentials: any;
    };
}
