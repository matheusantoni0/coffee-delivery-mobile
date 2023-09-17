import AsyncStorage from '@react-native-async-storage/async-storage'

import { Product } from '@contexts/CartProvider/types'

import { CART_KEY_STORAGE } from './keys'

export async function getCartState(): Promise<Product[]> {
  try {
    const data = await AsyncStorage.getItem(CART_KEY_STORAGE)
    console.log(data)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function updateCartState(updatedCart: string): Promise<void> {
  try {
    await AsyncStorage.setItem(CART_KEY_STORAGE, updatedCart)
  } catch (error) {
    console.error(error)
    throw error
  }
}
