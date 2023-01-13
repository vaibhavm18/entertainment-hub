import React from "react";
import Logo from "./Logo";

const Loader = () => {
    return (
        <div className="flex flex-col h-full gap-8 items-center justify-between">
            <Logo />
            <div className="border p-10 loader"></div>
            <div className=""></div>
        </div>
    );
};

export default Loader;
