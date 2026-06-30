import { rules } from "../rules/ruleLibrary.js";

export function runGroupRules(rows) {

    const flags = [];

    rules.forEach((rule) => {

        if (rule.engine !== "group") return;

        const newFlags = rule.check(rows);

        flags.push(...newFlags);

    });

    return flags;

}