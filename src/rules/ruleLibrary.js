export const rules = [
    {
        id: "PROJECT001",

        category: "Project",

        description: "Missing project type",

        severity: "Error",

        check(row) {
            return (
                row.projectType === null ||
                row.projectType === undefined ||
                row.projectType === ""
            );
        }
    }
];