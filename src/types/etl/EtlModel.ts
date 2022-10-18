import { EtlModelImageType, EtlModelStandardSubtype, EtlModelType } from "../../enum/EtlModel.enum";
import { Resource } from "../resources";
import { DataResource } from "../resources/DataResource";

export type EtlModel<T = null> = StandardEtlModel | ImageEtlModel | CustomEtlModel<T>;

interface BaseEtlModel {
    type: number;
    subtype: number | null;
    resource: Resource;
}

interface StandardEtlModel extends BaseEtlModel {
    type: EtlModelType.Standard;
    subtype: EtlModelStandardSubtype;
}

interface ImageEtlModel extends BaseEtlModel {
    type: EtlModelType.Image;
    subtype: EtlModelImageType;
}

interface CustomEtlModel<T> extends BaseEtlModel {
    type: EtlModelType.Custom;
    subtype: null;
    resource: DataResource<T>;
}
