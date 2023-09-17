import { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'

export type CartProviderProps = {
  children: ReactNode
}

export type CartContextData = {
  cart: Product[]
  addProductToCart: (product: Product) => void
  removeProductFromCart: (cartId: string) => void
  updateProductAmount: (product: Product, amount: number) => void
  clearCart: () => void
}

export type Product = {
  id: string
  name: string
  description: string
  image: ImageSourcePropType
  tags: string[]
  price: number
  cartId?: string
  quantity?: number
  size?: string
}

export type CartState = {
  cart: Product[]
}
