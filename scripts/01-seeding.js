const hre = require("hardhat");
const config = require("../src/config.json");

async function main() {
  const { chainId } = await hre.ethers.provider.getNetwork();
  console.log(`Using chainId ${chainId}`);
  const accounts = await hre.ethers.getSigners();
  const healthFile = await hre.ethers.getContractAt(
    "HealthFile",
    config[chainId].medical.address
  );

  console.log(
    `HealthFile SmartContract is fetched at address: ${healthFile.address}`
  );

  let transactionResponse;
  const user1 = accounts[0];
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Clark",
      29,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Khalifa",
      25,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Clark",
      29,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Khalifa",
      25,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Clark",
      29,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Khalifa",
      25,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Clark",
      29,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Aman Gupta",
      44,
      "Male",
      "B +",
      "Allergic rhinitis",
      "Hypertension ",
      "Medications"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Michael Miller",
      34,
      "Male",
      "A -",
      "Pollen allergy ",
      "Type 2 diabetes ",
      "Psychotherapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "David Wright",
      45,
      "Male",
      "B +",
      "Insect sting allergy ",
      "Asthma ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ethan Clark",
      23,
      "Male",
      "O -",
      "Drug allergy",
      "Bronchitis ",
      "Radiation therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Ryan GupMillerta",
      34,
      "Male",
      "AB +",
      "Latex allergy",
      "Pneumonia ",
      "Physical therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Olivia Robinson",
      77,
      "Female",
      "A -",
      "Animal dander allergy ",
      "Acute appendicitis ",
      "Occupational therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Emma Gupta",
      23,
      "Female",
      "B +",
      "Dust mite allergy ",
      "Osteoporosis ",
      "Speech therapy"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Mia Khalifa",
      25,
      "Female",
      "B -",
      "Chemical allergy ",
      "Rheumatoid arthritis ",
      "Alternative therapies"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Sofia Wright",
      83,
      "Female",
      "O +",
      "Sun allergy ",
      "Coronary artery disease ",
      "Behavioral interventions"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  transactionResponse = await healthFile
    .connect(user1)
    .addRecord(
      "Victoria Robinson",
      93,
      "Female",
      "O -",
      "Food allergy",
      "Congestive heart failure ",
      "Surgery"
    );
  await transactionResponse.wait();
  console.log(`Record added with id ${await healthFile.getRecordId()}`);
  await transactionResponse.wait();
  console.log(`Record added with ID: ${await healthFile.getRecordId()}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exitCode = 1;
  });
