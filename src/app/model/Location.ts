export interface Local {
  name?:string
  url?:string
}

export interface Location {
  id?:string,
  name?:string,
  type?:string,
  dimension?:string,
  residents?: Array<string>
}
