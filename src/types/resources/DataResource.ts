import { ResourceContentType } from "../../enum/ResourceContentType.enum";
import { Resource } from "./Resource";

export interface DataResource<T> extends Resource {
    contentType: ResourceContentType;
    data: T;
}
