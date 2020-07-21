interface SegmentData {
  campaigns?: any
  channel: number
  priceTables?: any
  utm_campaign: string
  regionId?: string
  utm_source: string
  utmi_campaign: string
  currencyCode: string
  currencySymbol: string
  countryCode: string
  cultureInfo: string
  [key: string]: any
}

interface ElasticImage {
  name: string
  value: string
}

type IndexingType = 'API' | 'XML'

interface SearchResultArgs {
  attributePath: string
  query?: string
  page?: number
  count?: number
  sort?: string
  operator?: string
  fuzzy?: string
  leap?: boolean
  tradePolicy?: number
  segment?: SegmentData
  indexingType?: IndexingType
  fullText: string
  searchState?: string
}

interface SuggestionProductsArgs {
  term: string
  attributeKey?: string
  attributeValue?: string
  tradePolicy?: string
  segment?: SegmentData
  indexingType?: IndexingType
}

interface SuggestionSearchesArgs {
  term: string
}

interface SelectedFacet {
  value: string
  key: string
}

interface FacetsInput {
  selectedFacets: SelectedFacet[]
  fullText: string
  query: string
  searchState?: string
}

interface ProductSearchInput {
  query: string
  from: number
  to: number
  selectedFacets: SelectedFacet[]
  fullText: string
  fuzzy: string
  operator: string
  orderBy: string
  productOriginVtex: boolean
  searchState?: string
}

type ElasticAttribute = (ElasticNumericalAttribute | ElasticTextAttribute) & {
  key: string
  label: string
  type: 'text' | 'number' | 'location'
  visible: boolean
  active: boolean
}

interface ElasticAttributeValue {
  count: number
  active: boolean
}

interface ElasticNumericalAttributeValue extends ElasticAttributeValue {
  from: string
  to: string
}

interface ElasticTextAttributeValue extends ElasticAttributeValue {
  key: string
  label: string
  id?: string
}

interface ElasticNumericalAttribute {
  type: 'number' | 'location'
  maxValue: number
  minValue: number
  active: boolean
  activeFrom?: string
  activeTo?: string
  values: ElasticNumericalAttributeValue[]
}

interface ElasticTextAttribute {
  type: 'text'
  values: ElasticTextAttributeValue[]
}

interface Breadcrumb {
  href: string
  name: string
}

interface BiggySearchProduct {
  name: string
  id: string
  timestamp: number
  product: string
  description: string
  reference: string
  url: string
  link: string
  oldPrice: number
  price: number
  brand: string
  brandId: string
  installment: BiggyInstallment
  measurementUnit: string
  unitMultiplier: number
  tax: number
  images: BiggyProductImage[]
  skus: BiggySearchSKU[]
  categories: string[]
  categoryIds: string[]
  extraData: BiggyProductExtraData[]
  productSpecifications?: string[]
  specificationGroups: string
  textAttributes: BiggyTextAttribute[]
  split: BiggySplit
}

interface BiggySplit {
  labelKey: string
  labelValue: string
}

interface BiggyProductImage {
  name: string
  value: string
}

interface BiggyProductExtraData {
  key: string
  value: string
}

interface BiggySearchSKU {
  name: string
  id: string
  reference: string
  image: string
  stock: number
  oldPrice: number
  price: number
  measurementUnit: string
  unitMultiplier: number
  link: string
  attributes: BiggySKUAttribute[]
  sellers: BiggySeller[]
  policies: BiggyPolicy[]
}

interface BiggySKUAttribute {
  key: string
  value: string
}

interface BiggySeller {
  id: string
  name: string
  oldPrice: number
  price: number
  stock: number
  tax: number
  installment: BiggyInstallment
}

interface BiggyInstallment {
  value: number
  count: number
  interest: boolean
}

interface BiggyPolicy {
  id: string
  sellers: BiggySeller[]
}

interface BiggyTextAttribute {
  labelKey: string
  labelValue: string
  key: string
  value: string
}