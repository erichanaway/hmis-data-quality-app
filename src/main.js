import './style.css';
import * as XLSX from 'xlsx';
import { mapBellDataRow } from "./mappers/bellDataMapper.js";
import { runRules } from "./engine/runRules.js";
import { rules } from "./rules/ruleLibrary.js";

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

            const flags = runRules(mappedRows);

            document.querySelector("#rows-checked").textContent =
                mappedRows.length;
            
            document.querySelector("#flags-found").textContent =
                flags.length;

            document.querySelector("#errors-found").textContent =
                flags.filter((flag) => flag.severity === "Error").length;

            document.querySelector("#warnings-found").textContent =
                flags.filter((flag) => flag.severity === "Warning").length;
            
            document.querySelector("#rules-loaded").textContent =
                rules.length;

            // Flag Details

            const tableBody = document.querySelector("#flags-table-body");

                tableBody.innerHTML = "";

                flags.forEach((flag) => {
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${flag.excelRow}</td>
                        <td>${flag.clientID}</td>
                        <td>${flag.intakeID}</td>
                        <td>${flag.agency}</td>
                        <td>${flag.user}</td>
                        <td>${flag.ruleID}</td>
                        <td>${flag.severity}</td>
                        <td>${flag.description}</td>
                        <td>${flag.status}</td>
                    `;

                    tableBody.appendChild(row);
                });

            console.log(
                "Blank project types:",
                mappedRows.filter((row) => row.projectType === "")
            );

            console.log("Flags:");
            console.table(flags);

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

