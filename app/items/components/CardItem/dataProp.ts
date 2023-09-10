export interface DataItem {
  site_id: string
  country_default_time_zone: string
  query: string
  paging: Paging
  results: Result[]
  sort: Sort
  available_sorts: AvailableSort[]
  filters: Filter[]
  available_filters: AvailableFilter[]
  pads_info: PadsInfo
}

export interface Paging {
  total: number
  primary_results: number
  offset: number
  limit: number
}

export interface Result {
  id: string
  title: string
  condition: string
  thumbnail_id: string
  catalog_product_id?: string
  listing_type_id: string
  permalink: string
  buying_mode: string
  site_id: string
  category_id: string
  domain_id: string
  thumbnail: string
  currency_id: string
  order_backend: number
  price: number
  original_price?: number
  sale_price: any
  sold_quantity: number
  available_quantity: number
  official_store_id?: number
  use_thumbnail_id: boolean
  accepts_mercadopago: boolean
  tags: string[]
  shipping: Shipping
  stop_time: string
  seller: Seller
  seller_address: SellerAddress
  address: Address
  attributes: Attribute[]
  installments: Installments
  winner_item_id: any
  catalog_listing: boolean
  discounts: any
  promotions: any[]
  inventory_id?: string
  variation_filters?: string[]
  variations_data?: VariationsData
  official_store_name?: string
  differential_pricing?: DifferentialPricing
}

export interface Shipping {
  store_pick_up: boolean
  free_shipping: boolean
  logistic_type: string
  mode: string
  tags: string[]
  benefits: any
  promise: any
}

export interface Seller {
  id: number
  nickname: string
  car_dealer: boolean
  real_estate_agency: boolean
  _: boolean
  registration_date: string
  tags: string[]
  car_dealer_logo: string
  permalink: string
  seller_reputation: SellerReputation
  eshop?: Eshop
}

export interface SellerReputation {
  level_id: string
  power_seller_status?: string
  transactions: Transactions
  metrics: Metrics
}

export interface Transactions {
  canceled: number
  completed: number
  period: string
  ratings: Ratings
  total: number
}

export interface Ratings {
  negative: number
  neutral: number
  positive: number
}

export interface Metrics {
  sales: Sales
  claims: Claims
  delayed_handling_time: DelayedHandlingTime
  cancellations: Cancellations
}

export interface Sales {
  period: string
  completed: number
}

export interface Claims {
  period: string
  rate: number
  value: number
}

export interface DelayedHandlingTime {
  period: string
  rate: number
  value: number
}

export interface Cancellations {
  period: string
  rate: number
  value: number
}

export interface Eshop {
  eshop_id: number
  seller: number
  nick_name: string
  eshop_status_id: number
  site_id: string
  eshop_experience: number
  eshop_rubro: any
  eshop_locations: any[]
  eshop_logo_url: string
}

export interface SellerAddress {
  comment: string
  address_line: string
  id: any
  latitude: any
  longitude: any
  country: Country
  state: State
  city: City
}

export interface Country {
  id: string
  name: string
}

export interface State {
  id: string
  name: string
}

export interface City {
  id?: string
  name: string
}

export interface Address {
  state_id: string
  state_name: string
  city_id?: string
  city_name: string
}

export interface Attribute {
  id: string
  name: string
  value_id?: string
  value_name?: string
  attribute_group_id: string
  attribute_group_name: string
  value_struct?: ValueStruct
  values: Value[]
  source: number
  value_type: string
}

export interface ValueStruct {
  number: number
  unit: string
}

export interface Value {
  id?: string
  name?: string
  struct?: Struct
  source: number
}

export interface Struct {
  unit: string
  number: number
}

export interface Installments {
  quantity: number
  amount: number
  rate: number
  currency_id: string
}

export interface VariationsData {
  "178400524609"?: N178400524609
  "175312428570"?: N175312428570
  "175312428567"?: N175312428567
  "175312428568"?: N175312428568
  "175312428569"?: N175312428569
  "178400524611"?: N178400524611
  "178400524613"?: N178400524613
  "178400524607"?: N178400524607
  "174699889982"?: N174699889982
  "174699889981"?: N174699889981
  "179435445229"?: N179435445229
  "173648758180"?: N173648758180
  "173648758181"?: N173648758181
  "177404084968"?: N177404084968
  "177404084970"?: N177404084970
  "62586644034"?: N62586644034
  "179773135501"?: N179773135501
  "174467543794"?: N174467543794
}

export interface N178400524609 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N175312428570 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N175312428567 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N175312428568 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N175312428569 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N178400524611 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N178400524613 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N178400524607 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N174699889982 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N174699889981 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N179435445229 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N173648758180 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N173648758181 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N177404084968 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N177404084970 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N62586644034 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface N179773135501 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
}

export interface N174467543794 {
  thumbnail: string
  ratio: string
  name: string
  pictures_qty: number
  inventory_id: string
}

export interface DifferentialPricing {
  id: number
}

export interface Sort {
  id: string
  name: string
}

export interface AvailableSort {
  id: string
  name: string
}

export interface Filter {
  id: string
  name: string
  type: string
  values: Value2[]
}

export interface Value2 {
  id: string
  name: string
  path_from_root: PathFromRoot[]
}

export interface PathFromRoot {
  id: string
  name: string
}

export interface AvailableFilter {
  id: string
  name: string
  type: string
  values: Value3[]
}

export interface Value3 {
  id: string
  name: string
  results: number
}

export interface PadsInfo {
  tracelog: string[]
}
