const tableRows = document.querySelectorAll("tr");

const exportBtn = document.querySelector("#btnPrint");

const getCellsText = ({ textContent }) => textContent;

const getStringWithCommas = ({ cells }) =>
  Array.from(cells).map(getCellsText).join(",");

const createCSVString = () =>
  Array.from(tableRows).map(getStringWithCommas).join("\n");

const setCSVDownload = (CSVString) => {
  const CSVURI = `data:text/csvcharset=utf-8, ${encodeURIComponent(CSVString)}`;
  exportBtn.setAttribute("href", CSVURI);

  exportBtn.setAttribute("download", "table.csv");
};

const exportTable = () => {
  const CSVString = createCSVString();

  setCSVDownload(CSVString);
};

exportBtn.addEventListener("click", exportTable);

//CSV - coma separate values. Para gerar o csv da table é preciso capturar os tr. Cada tr tem uma propriedade cell, que armazena as célilas da linha, td. Lembrando q nodeList não é um array, mas um array like.
