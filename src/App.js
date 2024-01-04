import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  const [darkMode,setdarkMode]=useState(true)

  return (
    <div className={darkMode&&"dark"}>
      <Header darkMode={darkMode} setdarkMode={setdarkMode}/>
      <main className=" bg-white dark:bg-gray-900 dark:text-white text-gray-900">
      <Hero/>
      </main>
    </div>
  );
}

export default App;
