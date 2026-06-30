import { rules } from "../rules/ruleLibrary.js";

export function runRowRules(rows) {
    const flags = [];

    rows.forEach((row, index) => {
        rules.forEach((rule) => {
            if (rule.engine !== "row") return;
            if (rule.check(row)) {
                flags.push({
                    excelRow: index + 2,

                    clientID: row.clientID,
                    intakeID: row.intakeID,
                    agency: row.agency,
                    user: row.user,

                    row,
                    rule,

                    ruleID: rule.id,
                    category: rule.category,
                    severity: rule.severity,
                    description: rule.description,
                    message: rule.message,
                    resolution: rule.resolution,
                    reference: rule.reference,

                    status: "Open"
                });
            }
        });
    });

    return flags;
}