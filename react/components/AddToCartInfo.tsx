import React from "react";
import { useProduct } from 'vtex.product-context';
import { useOrderForm } from 'vtex.order-manager/OrderForm';
import ButtonGroup from "./ButtonGroup";
import Totalizers from "./Totalizers";
import ProductGroup from "./ProductGroup";
import { generateBlockClass } from '@vtex/css-handles'
import styles from './styles.css'

const AddToCartInfo = ({blockClass}: {blockClass: string} ) => {
  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm();
  const container = generateBlockClass(styles.container, blockClass);

  console.log("Este producto tiene esta info", productInfo);
  console.log("Esta es mi info de mi orden", totalizers[0]);
  return (
    <div className={container}>
      <ProductGroup products={items} blockClass={blockClass}/>
      <Totalizers total={totalizers[0]} items={items}/>
      <ButtonGroup />
    </div>
  )
}

export default AddToCartInfo
