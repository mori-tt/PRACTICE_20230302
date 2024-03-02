"use client";
import { Provider, useAtom } from "jotai";
import { countAtom } from "@/components/atoms/counterAtom";
import Button from "@mui/material/Button";

export default function Home() {
  const [count, setCount] = useAtom(countAtom);

  const handlePlus = () => setCount((value) => value + 1);
  const handleMinus = () => setCount((value) => value - 1);

  return (
    <>
      <h1>{count} </h1>
      <div>
        <Button onClick={handlePlus}>one up</Button>
        <Button onClick={handleMinus}>one down</Button>
      </div>
    </>
  );
}
