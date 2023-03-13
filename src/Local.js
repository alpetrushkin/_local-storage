import React from 'react';

export const Local = () => {
   const [count, setCount] = React.useState(0)

   const onClickIncHandler = () => {
      setCount(count + 1)
   }

   const onClickSetIncHandler = () => {
      localStorage.setItem('counterValue', JSON.stringify(count))
      localStorage.setItem('counterValue + 2', JSON.stringify(count + 2))
   }

   const onClickGetIncHandler = () => {
     let newAsToString = localStorage.getItem('counterValue')
      let newText = JSON.parse(newAsToString)
      setCount(newText)
   }

   const onClickClearIncHandler = () => {
      localStorage.clear()
      setCount(0)
   }

   const onClickResetIncHandler = () => {
     localStorage.removeItem('counterValue + 2')
   }

   return (
      <div>
         <h1>{count}</h1>
         <button onClick={onClickIncHandler}>inc</button>
         <button onClick={onClickSetIncHandler}>setINC</button>
         <button onClick={onClickGetIncHandler}>getINC</button>
         <button onClick={onClickClearIncHandler}>clearINC</button>
         <button onClick={onClickResetIncHandler}>resetINC</button>
      </div>
   );
};
