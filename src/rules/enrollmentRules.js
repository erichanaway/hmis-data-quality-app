export const enrollmentRules = [
    {
        id: "ENROLL001",

        engine: "group",

        category: "Enrollment",

        description: "Missing Client Enters Project",

        severity: "Error",

        reference: "Bell Data",

        message:
            "No Client Enters Project record exists for this intake.",

        resolution:
            "Complete a Client Enters Project screen for at least one client in the household.",

        check(rows) {

            const flags = [];

            const intakeIDs = [
                ...new Set(
                    rows.map((row) => row.intakeID)
                )
            ];

            intakeIDs.forEach((intakeID) => {

                const intakeRows = rows.filter(
                    (row) => row.intakeID === intakeID
                );

                const cepCount = intakeRows.filter(
                    (row) =>
                        String(row.clientEntersProject).trim().toLowerCase() === "yes"
                ).length;

                if (cepCount === 0) {

                    flags.push({

                        intakeID,

                        clientID: intakeRows[0].clientID,

                        agency: intakeRows[0].agency,

                        user: intakeRows[0].user,

                        row: intakeRows[0],

                        ruleID: "ENROLL001",

                        category: "Enrollment",

                        severity: "Error",

                        description: "Missing Client Enters Project",

                        message:
                            "No Client Enters Project record exists for this intake.",

                        resolution:
                            "Complete a Client Enters Project screen for at least one client in the household.",

                        reference: "Bell Data",

                        status: "Open"

                    });

                }

            });

            return flags;

        }
    }
];