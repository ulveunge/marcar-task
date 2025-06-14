export interface Car {
  markId: string;
  folderId: string;
  modificationId: string;
  complectationName: string;
  bodyType: string;
  wheel: string;
  color: string;
  metallic: string;
  availability: string;
  custom: string;
  state: string;
  ownersNumber: string;
  run: number;
  year: number;
  registryYear: number;
  currency: string;
  vin: string;
  price: number;
  creditDiscount?: number;
  insuranceDiscount?: number;
  tradeinDiscount?: number;
  maxDiscount?: number;
  extras: string;
  images: {
    image: string[];
  };
  video?: string;
  bookingAllowed: boolean;
  pts: string;
  uniqueId: number;
  exchange: string;
  techParamId: number;
  engineVolume: number;
  enginePower: string;
  engineType: string;
  gearbox: string;
  drive?: string;
  modelName: string;
  generationName: string;
  markCyrillicName: string;
  modelCyrillicName: string;
  offerType: string;
  updatedAt: string;
  generationRel: {
    slug: string;
    count: number;
    name: string;
  };
  brandRel: {
    slug: string;
    count: number;
    name: string;
  };
  modelRel: {
    slug: string;
    count: number;
    name: string;
  };
  imagesAmount: number;
  engineTypeEng: string;
  enginePowerNum: number;
  bodyTypeEng: string;
  ownersNumberNum: number;
  colorEng: string;
  gearboxEng: string;
}

export interface CarMeta {
  limit: number;
  page: number;
  totalNoFilters: number;
  count: number;
  total: number;
  lastPage: number;
  firstPageLink: string;
  nextPageLink: string;
  lastPageLink: string;
  from: number;
  to: number;
}

export interface CarResponse {
  data: Car[];
  meta: CarMeta;
}
