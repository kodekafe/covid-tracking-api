import { VisitModelType, VisitSchemaType } from "../models/Visit";

export interface BaseAPIReturn {
  success?: boolean;
  status: number;
}

export interface ReturnAPIError extends BaseAPIReturn {
  message: string;
}

export interface ReturnAPISuccess extends BaseAPIReturn {
  data: VisitSchemaType | VisitModelType;
}
