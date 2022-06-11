import React from "react";

function Header() {
  return (
    <header className="flex py-6 px-3 border-b-2 justify-between items-center shadow-md shadow-slate-300">
      <div className="text-xs font-semibold">Where in the world?</div>
      <div className="text-xs">Dark mode</div>
    </header>
  );
}

export default Header;
