import React from "react";
import { generateBlockClass } from '@vtex/css-handles';
import styles from './styles.css'

const ButtonGroup = ({blockClass}:any) => {
  const button = generateBlockClass(styles.button, blockClass);
  const link__buy = generateBlockClass(styles.link__buy, blockClass);
  const container__buy = generateBlockClass(styles.container__buy, blockClass);
  const link__home = generateBlockClass(styles.link__home, blockClass);

  return (
    <>
      <div className={container__buy}>
        <a href="/checkout/#/cart" className={link__buy}>Ir a pagar</a>
        {" "}
        <a href="/checkout/#/cart" className={link__buy}>Ver carrito</a>
      </div>
      <div>
        <button className={button}>
          <a href="/" className={link__home}>Continúa comprando</a>
        </button>
      </div>
    </>
  )
}

export default ButtonGroup
