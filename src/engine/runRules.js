import { rules } from "../rules/ruleLibrary.js";

export function runRules(rows) {
    const flags =[];

    rows.forEach((row) => {
        rules.forEach((rule) => {
            if (rule.check(row)) {
                flags.push({
                    clientID:row.clientID,
                    intakeID: row.intakeID,
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