import { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { CartContextData, CartProviderProps, Product } from './types'

const CartContext = createContext({} as CartContextData)

export function CartProvider(props: CartProviderProps) {
  const { children } = props

  const [cart, setCart] = useState<Product[]>([])

  const removeProductFromCart = useCallback((cartId: string) => {
    setCart((prev) => prev.filter((product) => product.cartId !== cartId))
  }, [])

  const updateProductAmount = useCallback((updatedProduct: Product, amount: number) => {
    const newQuantity =
      Number(updatedProduct.quantity) + amount <= 0
        ? 1
        : Number(updatedProduct.quantity) + amount ?? 1 + amount

    setCart((prev) =>
      prev.map((product) =>
        product.cartId === updatedProduct.cartId
          ? { ...product, quantity: newQuantity }
          : product,
      ),
    )
  }, [])

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const addProductToCart = useCallback(
    (newProduct: Product) => {
      const cartId = `${newProduct.id}-${newProduct.size}`

      const productAlreadyExists = cart.find((c) => c.cartId === cartId)

      if (productAlreadyExists) {
        updateProductAmount({ ...newProduct, cartId }, productAlreadyExists.quantity!)
      } else {
        setCart((prev) => [...prev, { ...newProduct, cartId }])
      }
    },
    [cart, updateProductAmount],
  )

  // useEffect(() => {
  //   updateCartState(JSON.stringify(cart))
  // }, [cart])

  // useEffect(() => {
  //   const getLocalCartState = async () => {
  //     const localCartState = await getCartState()
  //     setCart(localCartState)
  //   }
  //   getLocalCartState()
  // }, [])

  const provideValues = useMemo(
    () => ({
      cart,
      addProductToCart,
      removeProductFromCart,
      updateProductAmount,
      clearCart,
    }),
    [cart, addProductToCart, removeProductFromCart, updateProductAmount, clearCart],
  )

  return <CartContext.Provider value={provideValues}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
