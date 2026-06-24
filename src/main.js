import './style.css';
import * as XLSX from 'xlsx';

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

            console.table(rows);
            
            console.table(rows[0]);

            console.log(rows[0].Severity);

            console.log(
                `Loaded ${rows.length} rows`
            );
    };

    reader.readAsArrayBuffer(file);
}

