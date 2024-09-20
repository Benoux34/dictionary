import React from "react";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5">
      <div>
        <p className="text-xl">Dictionary</p>
      </div>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export { Header };
