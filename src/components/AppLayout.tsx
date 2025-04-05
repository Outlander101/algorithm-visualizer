import React from "react";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";
import MainArea from "./Layout/MainArea";

export default function AppLayout() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <MainArea />
            </div>
        </div>
    );
}
