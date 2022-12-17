import React from "react";
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const ProductGroup = ({products, blockClass}:any) => {
  const container__item = generateBlockClass(styles.container__item, blockClass);

  return (
    <>
      {
        products.map((item: any, index: number) => {
          return (
            <div key={index} className={container__item}>
              <div>
                <img src={item.imageUrls.at1x} alt="productImage" />
              </div>
              <div>
                <p>{item.name}</p>
                <p>ID: {item.id}</p>
                <p>${item.price / 100}</p>
                <p>Cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ProductGroup
