import React from "react";
import BrainDump from "../parts/BrainDump";
import Header from "../parts/Header";
import Navigation from "../parts/Navigation";
import Priorities from "../parts/Priorities";

export default function BoxPage() {
  return (
    <>
        <Header />
        <Priorities />
        <BrainDump />
        <Navigation />
    </>
  );
}
