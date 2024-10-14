import { useState } from "react";
import Button from "./components/Button";
import './App.css'

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");

  const handleTabClick = (editorName) => {
    // Prevent unnecessary state updates
    if (openedEditor !== editorName) {
      setOpenedEditor(editorName);
    }
  };

  return (
    <div>
      <p>Welcome to the editor!</p>
      <div className="tab-button-container">
        <Button title="HTML" onClick={() => handleTabClick("html")} />
        <Button title="CSS" onClick={() => handleTabClick("css")} />
        <Button title="JavaScript" onClick={() => handleTabClick("js")} />
      </div>
      <div className="editor-container">
        {openedEditor === "html" && <p>HTML editor is open</p>}
        {openedEditor === "css" && <p>CSS editor is open</p>}
        {openedEditor === "js" && <p>JavaScript editor is open</p>}
      </div>
    </div>
  );
}

export default App;
