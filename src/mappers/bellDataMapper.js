export function mapBellDataRow(row) {
  return {
    clientID: row["Client ID"],
    intakeID: row["Intake ID"],
    nameDQ: row["Name Data Quality"],
    dobDQ: row["DOB Data Quality"],
    ssDQ: row["SS Data Quality"],
    genderDQ: row["Gender DQ"],
    raceDQ: row["Race Data Quality"],
    addressDQ: row["Address DQ"],
    projectInformation: row["Project Information"],
    clientEntersProject: row["Client Enters Project"],
    incomeInsurance: row["Income/Insurance"],
    specialNeeds: row["Special Needs"],
    projectType: row["Project Type"],
    agency: row["Agency"],
    projectInfoStartDate: row["Project Information Start Date"],
    projectInfoStopDate: row["Project Information Stop Date"],
    clientEntersStartDate: row["Client Enters Project Start Date"],
    clientExitsStopDate: row["Client Exits Project Stop Date"],
    headOfHousehold: row["Head of Household"]
  };
}