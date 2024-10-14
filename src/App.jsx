import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import Editor from "./components/Editor";

function App() {
  const [openedEditor, setOpenedEditor] = useState("html");
  const [activeButton, setActiveButton] = useState("html");

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
    setActiveButton(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome to the Code Editor</h1>
      
      {/* Button Section */}
      <div className="flex space-x-4 mb-6">
        <Button
          backgroundColor={activeButton === "html" ? "blue" : ""}
          title="HTML"
          onClick={() => {
            onTabClick("html");
          }}
        />
        <Button
          backgroundColor={activeButton === "css" ? "blue" : ""}
          title="CSS"
          onClick={() => {
            onTabClick("css");
          }}
        />
        <Button
          backgroundColor={activeButton === "js" ? "blue" : ""}
          title="JavaScript"
          onClick={() => {
            onTabClick("js");
          }}
        />
      </div>
      
      {/* Editor Section */}
      <div className="mb-6 border rounded-lg overflow-hidden shadow-lg">
        {openedEditor === "html" ? (
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            setEditorState={setHtml}
          />
        ) : openedEditor === "css" ? (
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            setEditorState={setCss}
          />
        ) : (
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            setEditorState={setJs}
          />
        )}
      </div>

      {/* Output Section */}
      <div className="border rounded-lg shadow-lg">
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          className="w-full h-96"
        />
      </div>
    </div>
  );
}

export default App;
