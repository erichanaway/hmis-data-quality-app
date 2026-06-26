import './style.css';
import * as XLSX from 'xlsx';
import { mapBellDataRow } from "./mappers/bellDataMapper.js";

const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', handleFile);

function handleFile(event) {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload =(e) => {
        const data = new Uint8Array(e.target.result);

        const workbook = XLSX.read(data, {
            type: 'array'
        });

        const sheet =
            workbook.Sheets[
                workbook.SheetNames[0]
            ];
        
            const rows =
                XLSX.utils.sheet_to_json(sheet);

            const mappedRows = rows.map(mapBellDataRow);

            console.log("Original Bell Data:");
            console.table(rows);
            
            console.log("Mapped Rows:");
            console.table(mappedRows);

            console.log(
                `Loaded ${mappedRows.length} rows`
            );
    };

    reader.readAsArrayBuffer(file);
}

