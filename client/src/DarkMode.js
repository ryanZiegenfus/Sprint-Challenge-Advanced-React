import React, { useEffect } from 'react';
import { Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import useDarkMode from "./useDarkMode";



function DarkMode(props) {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    const theBody = document.querySelector("body")
    useEffect(() => {
      theBody.classList.contains("dark-mode") ? (theBody.classList.remove("dark-mode")): theBody.classList.add("dark-mode");
    }, [darkMode])

    return (
        <Card
            onClick={toggleMode}
            header="Click for Dark Mode"
        />
    )
}

export default DarkMode