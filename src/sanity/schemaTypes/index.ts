import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import {orders} from './orders'
// import shippingForm from './shippingForm'
import {conatct} from "./contact"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,conatct,orders],
}