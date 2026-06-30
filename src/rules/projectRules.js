const validProjectTypes = [
    "ES",
    "TH",
    "RR",
    "HP",
    "Street Outreach",
    "Services Only"
];

export const projectRules = [
    {
        id: "PROJECT001",

        engine: "row",

        category: "Project",

        description: "Invalid Project Type",

        severity: "Error",

        reference: "For Future Use",

        message:
            "Project Type must be a valid HMIS project type.",

        resolution:
            "Open the Project Information screen and select a valid Project Type.",

        check(row) {
            return !validProjectTypes.includes(
                String(row.projectType).trim()
            );
        }
    }
];