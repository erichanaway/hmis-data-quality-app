import { projectRules } from "./projectRules.js";
import { enrollmentRules } from "./enrollmentRules.js";

export const rules = [
    ...projectRules,
    ...enrollmentRules
];