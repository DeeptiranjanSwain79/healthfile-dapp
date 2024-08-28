/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("HealthFile", () => {
  // eslint-disable-next-line no-unused-vars
  let healthFile, user1, transactionResponse, transactionReceipt;

  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    user1 = accounts[1];
    const HealthFile = await ethers.getContractFactory("HealthFile");
    healthFile = await HealthFile.connect(user1).deploy();
    transactionReceipt = await healthFile.deploymentTransaction().wait();
  });

  describe("Deployed", () => {
    it("The contract is deployed successfully", async () => {
      expect(await healthFile.getAddress()).to.not.equal(0);
    });
  });

  describe("AddRecord", () => {
    it("Emits AddRecord event with correct details", async () => {
      const startTime = Date.now();

      await expect(
        healthFile
          .connect(user1)
          .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids")
      )
        .to.emit(healthFile, "HealthFile__AddRecord")
        .withArgs(
          1, // recordId (should be 1)
          (emittedTimestamp) => {
            const difference = Math.abs(
              parseInt(emittedTimestamp + "000") - parseInt(startTime)
            );
            return difference < 10000;
          },
          "Alice",
          30,
          "Female",
          "A+",
          "Flu",
          "Bed rest",
          "Fluids"
        );
    });
  });

  describe("DeleteRecord", () => {
    it("Marks the record as deleted", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const recordId = await healthFile.getRecordId();
      await healthFile.deleteRecord(recordId);
      const isDeleted = await healthFile.getDeleted(recordId);
      expect(isDeleted).to.be.true;
    });
  });

  describe("Getters", () => {
    describe("getRecord", () => {
      it("Retrieves the correct record details for a valid ID", async () => {
        const name = "Alice";
        const age = 25;
        const gender = "Female";
        const bloodGroup = "A+";
        const allergies = "Flu";
        const diagnosis = "Bed rest";
        const treatment = "Fluids";
        await healthFile
          .connect(user1)
          .addRecord(
            name,
            age,
            gender,
            bloodGroup,
            allergies,
            diagnosis,
            treatment
          );
        const recordId = await healthFile.getRecordId();

        const [
          // eslint-disable-next-line no-unused-vars
          retrievedtimestamp,
          retrievedName,
          retrievedAge,
          retrievedgender,
          retrievedbloodGroup,
          retrievedallergies,
          retrieveddiagnosis,
          retrievedtreatment,
        ] = await healthFile.getRecord(recordId);

        expect(retrievedName).to.equal(name);
        expect(retrievedAge).to.equal(age);
        expect(retrievedgender).to.equal(gender);
        expect(retrievedbloodGroup).to.equal(bloodGroup);
        expect(retrievedallergies).to.equal(allergies);
        expect(retrieveddiagnosis).to.equal(diagnosis);
        expect(retrievedtreatment).to.equal(treatment);
      });
    });

    describe("getAllRecords", () => {
      it("Retrieves all records", async () => {
        await healthFile
          .connect(user1)
          .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
        await healthFile
          .connect(user1)
          .addRecord("Adam", 20, "Male", "o+", "Flu", "Sleep", "Food");

        const allRecords = await healthFile.getAllRecords();
        expect(allRecords.length).to.equal(2);
      });
    });

    it("Retrieves the correct record ID", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const recordId = await healthFile.getRecordId();
      expect(recordId).to.equal(1);
    });

    it("Retrieves the correct name for a record", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const name = await healthFile.getName(1);
      expect(name).to.equal("Alice");
    });

    it("Retrieves the correct age for a record", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const age = await healthFile.getAge(1);
      expect(age).to.equal(30);
    });

    it("Retrieves the correct gender for a record", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const gender = await healthFile.getGender(1);
      expect(gender).to.equal("Female");
    });

    it("Retrieves the correct Blood group for a record", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const bloodgroup = await healthFile.getBloodGroup(1);
      expect(bloodgroup).to.equal("A+");
    });

    it("Retrieves the correct Allergies for a record", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const allergies = await healthFile.getAllergies(1);
      expect(allergies).to.equal("Flu");
    });

    it("Retrieves the correct Diagnosis for a record", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const diagnosis = await healthFile.getDiagnosis(1);
      expect(diagnosis).to.equal("Bed rest");
    });

    it("Retrieves the correct Treatment for a record", async () => {
      await healthFile
        .connect(user1)
        .addRecord("Alice", 30, "Female", "A+", "Flu", "Bed rest", "Fluids");
      const fluids = await healthFile.getTreatment(1);
      expect(fluids).to.equal("Fluids");
    });
  });
});
