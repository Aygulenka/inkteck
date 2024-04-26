import React, { useState } from 'react';
// import './TextEditor.css';

function TextEditor() {
  const [content, setContent] = useState('');
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontColor, setFontColor] = useState('#000000');
  const [tableRows, setTableRows] = useState(3);
  const [tableColumns, setTableColumns] = useState(3);
  const [tableBorder, setTableBorder] = useState(1);

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const handleTableRowsChange = (event) => {
    setTableRows(event.target.value);
  };

  const handleTableColumnsChange = (event) => {
    setTableColumns(event.target.value);
  };

  const handleTableBorderChange = (event) => {
    setTableBorder(event.target.value);
  };

  return (
    <div className="text-editor">

      <div className="editor-options">
        <label>
          Размер шрифта:
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </label>
        <label>
          Шрифт:
          <select value={fontFamily} onChange={handleFontFamilyChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
          </select>
        </label>
        <label>
          Цвет текста:
          <input
            type="color"
            value={fontColor}
            onChange={handleFontColorChange}
          />
        </label>
        <label>
          Строки таблицы:
          <input
            type="number"
            value={tableRows}
            onChange={handleTableRowsChange}
          />
        </label>
        <label>
          Колонки таблицы:
          <input
            type="number"
            value={tableColumns}
            onChange={handleTableColumnsChange}
          />
        </label>
        <label>
          Границы таблицы:
          <input
            type="number"
            value={tableBorder}
            onChange={handleTableBorderChange}
          />
        </label>
      </div>
      <button>Добавить таблицу</button>

      <textarea
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
          color: fontColor,
        }}
        value={content}
        onChange={handleInputChange}
        placeholder="Введите текст..."
      ></textarea>
    </div>
  );
}

export default TextEditor;
