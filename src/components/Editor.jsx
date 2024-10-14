/* eslint-disable react/prop-types */
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/material.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/night.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";

import { Controlled as ControlledEditorComponent } from "react-codemirror2";

const Editor = ({ language, value, setEditorState }) => {
  const [theme, setTheme] = useState("dracula");

  const handleChange = (editor, data, value) => {
    setEditorState(value);
  };

  const themeArray = ["dracula", "material", "mdn-like", "the-matrix", "night"];

  return (
    <div className="editor-container bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <label htmlFor="themes" className="text-lg font-semibold text-gray-700">
          Choose a theme:
        </label>
        <select
          className="block w-1/2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          name="theme"
          onChange={(el) => {
            setTheme(el.target.value);
          }}
        >
          {themeArray.map((theme) => (
            <option className="text-gray-700" key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
      <ControlledEditorComponent
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper rounded-lg overflow-hidden"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: theme,
          autoCloseTags: true,
          autoCloseBrackets: true,
        }}
      />
    </div>
  );
};

export default Editor;
