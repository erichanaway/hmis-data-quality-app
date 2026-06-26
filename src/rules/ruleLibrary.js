export const rules = [
    {
        id: "PROJECT001",

        category: "Project",

        description: "Invalid Project Type",

        severity: "Error",

        reference: "For Future Use",

        message:
            "Project Type must be a valid HMIS project type.",

        resolution:
            "Open the Project Information screen and select a valid Project Type.",

        check(row) {
            const validProjectTypes = [
                "ES",
                "TH",
                "RR",
                "HP",
                "Street Outreach",
                "Services Only"
            ];

            return !validProjectTypes.includes(row.projectType);
        }
    }
];