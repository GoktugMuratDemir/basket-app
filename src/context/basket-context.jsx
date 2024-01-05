/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useMemo, useState } from "react";
import _ from "lodash";
import { useRenderProductData } from "./product-context";

const RenderDataContext = createContext();

export function useRenderBasket() {
  return useContext(RenderDataContext);
}

export function BasketProvider({ children }) {
  const { resDataAllProduct } = useRenderProductData();
  const [basketItems, setBasketItems] = useState([]);

  const addItemToBasket = (itemId) => {
    // Check if the item with the given id exists in resDataAllProduct
    const isItemExists = resDataAllProduct.some((item) => item.id === itemId);
  
    if (isItemExists) {
      const existingItemIndex = _.findIndex(
        basketItems,
        (item) => item.id === itemId
      );
  
      if (existingItemIndex === -1) {
        // If the item is not already in the basket, add it with count: 1
        setBasketItems((prevBasketItems) => [
          ...prevBasketItems,
          { ...resDataAllProduct.find((item) => item.id === itemId), count: 1 },
        ]);
      } else {
        // If the item is already in the basket, increase its count
        const updatedBasketItems = _.cloneDeep(basketItems);
        updatedBasketItems[existingItemIndex].count += 1;
        setBasketItems(updatedBasketItems);
      }
    } else {
      // Item doesn't exist in resDataAllProduct, handle accordingly (e.g., show a message)
      console.log(`Item with id ${itemId} does not exist.`);
    }
  };

  const decrementItemToBasket = (itemId) => {
    const existingItemIndex = _.findIndex(basketItems, (item) => item.id === itemId);

    if (existingItemIndex !== -1) {
      const updatedBasketItems = _.cloneDeep(basketItems);
      
      if (updatedBasketItems[existingItemIndex].count === 1) {
        // If count is 1, remove the item from the basket
        updatedBasketItems.splice(existingItemIndex, 1);
      } else {
        // If count is greater than 1, decrement the count
        updatedBasketItems[existingItemIndex].count -= 1;
      }

      setBasketItems(updatedBasketItems);
    } else {
      // Item not found in the basket, handle accordingly (e.g., show a message)
      console.log(`Item with id ${itemId} not found in the basket.`);
    }
  };

  const totalBasketPrice = useMemo(() => {
    return _.sumBy(basketItems, (item) => item.price * item.count);
  }, [basketItems]);
  
  const value = {
    basketItems,
    setBasketItems,
    addItemToBasket,
    decrementItemToBasket,
    totalBasketPrice
  };

  return (
    <RenderDataContext.Provider value={value}>
      {children}
    </RenderDataContext.Provider>
  );
}
