import { Local } from './Location';
export interface Chatacter {
  id?: number,
  name?: string,
  status?: string,
  species?: string,
  type?: string,
  origin?: Local,
  location?: Local,
  image?:string,
  gender?:string,
  episode: Array<string>
}

