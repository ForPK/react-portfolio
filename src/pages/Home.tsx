import { useState } from "react";
import { Button } from "@/components/ui/button"

function Home() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex w-full h-[calc(100vh-6rem)] justify-center items-center">
        <Button variant="outline" onClick={increase}>{count}</Button>
    </div>
  );
}

export default Home;
