import { EtlModelImageSubtype, EtlModelStandardSubtype, EtlModelType } from "../../enum/EtlModel.enum";
import { ResourceContentType } from "../../enum/ResourceContentType.enum";
import { Resource } from "../resources";

export interface EtlModel {
    type: EtlModelType;
    subtype: EtlModelStandardSubtype | EtlModelImageSubtype | null;
    metadata?: EtlModelMetadata;
}

export interface EtlModelMetadata {
    resourceContentType: ResourceContentType;
    resource?: Resource;
}
