import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  const [darkMode,setdarkMode]=useState(true)

  return (
    <div className={darkMode&&"dark"}>
      <Header darkMode={darkMode} setdarkMode={setdarkMode}/>
      <main className=" bg-white dark:bg-gray-900 dark:text-white text-gray-900">
      <Hero/>
      <Services/>
      <Portfolio/>
      </main>
    </div>
  );
}

export default App;
