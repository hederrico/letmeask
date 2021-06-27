import { useState } from "react";

type ButtonProps = {
  text?: string,
  children?: string,
}

export function Button(props: ButtonProps) {
  //let it change
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button onClick={increment}>{props.text || props.children || counter}</button>
  )
}
