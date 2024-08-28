// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract HealthFile {
    uint public recordId;
    mapping(uint => Record) records;
    mapping(uint => bool) public isDeleted;
    uint public recordCount; // Counter to track the number of records

    struct Record {
        uint recordId;
        uint timestamp;
        string name;
        uint age;
        string gender;
        string bloodGroup;
        string allergies;
        string diagnosis;
        string treatment;
    }

    event HealthFile__AddRecord(
        uint recorId,
        uint256 timestamp,
        string name,
        uint age,
        string gender,
        string bloodGroup,
        string allergies,
        string diagnosis,
        string treatment
    );

    event HealthFile__DeleteRecord(
        uint recorId,
        uint256 timestamp,
        string name,
        uint age,
        string gender,
        string bloodGroup,
        string allergies,
        string diagnosis,
        string treatment
    );

    function addRecord(
        string memory _name,
        uint _age,
        string memory _gender,
        string memory _bloodGroup,
        string memory _allergies,
        string memory _diagnosis,
        string memory _treatment
    ) public {
        recordId++;
        records[recordId] = Record(
            recordId,
            block.timestamp,
            _name,
            _age,
            _gender,
            _bloodGroup,
            _allergies,
            _diagnosis,
            _treatment
        );
        recordCount++;
        emit HealthFile__AddRecord(
            recordId,
            block.timestamp,
            _name,
            _age,
            _gender,
            _bloodGroup,
            _allergies,
            _diagnosis,
            _treatment
        );
    }

    function deleteRecord(uint _recordId) public {
        require(!isDeleted[_recordId], "The record is already deleted");
        Record storage tempRecord = records[_recordId];
        emit HealthFile__DeleteRecord(
            tempRecord.recordId,
            block.timestamp,
            tempRecord.name,
            tempRecord.age,
            tempRecord.gender,
            tempRecord.bloodGroup,
            tempRecord.allergies,
            tempRecord.diagnosis,
            tempRecord.treatment
        );
        isDeleted[_recordId] = true;
    }

    function getRecord(
        uint _recordId
    )
        public
        view
        returns (
            uint,
            string memory,
            uint,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Record storage tempRecord = records[_recordId];
        return (
            tempRecord.timestamp,
            tempRecord.name,
            tempRecord.age,
            tempRecord.gender,
            tempRecord.bloodGroup,
            tempRecord.allergies,
            tempRecord.diagnosis,
            tempRecord.treatment
        );
    }

    function getAllRecords() public view returns (Record[] memory) {
        Record[] memory tempRecords = new Record[](recordId);
        uint counter = 0;

        for (uint i = 1; i <= recordId; i++) {
            if (!isDeleted[i]) {
                tempRecords[counter] = records[i];
                counter++;
            }
        }

        Record[] memory allRecords = new Record[](counter); // Create an array with the correct size

        for (uint j = 0; j < counter; j++) {
            allRecords[j] = tempRecords[j];
        }

        return allRecords;
    }

    function getRecordId() public view returns (uint) {
        return recordId;
    }

    function getTimestamp(uint _recordId) public view returns (uint) {
        return records[_recordId].timestamp;
    }

    function getName(uint _recordId) public view returns (string memory) {
        return records[_recordId].name;
    }

    function getAge(uint _recordId) public view returns (uint) {
        return records[_recordId].age;
    }

    function getGender(uint _recordId) public view returns (string memory) {
        return records[_recordId].gender;
    }

    function getBloodGroup(uint _recordId) public view returns (string memory) {
        return records[_recordId].bloodGroup;
    }

    function getAllergies(uint _recordId) public view returns (string memory) {
        return records[_recordId].allergies;
    }

    function getDiagnosis(uint _recordId) public view returns (string memory) {
        return records[_recordId].diagnosis;
    }

    function getTreatment(uint _recordId) public view returns (string memory) {
        return records[_recordId].treatment;
    }

    function getDeleted(uint _recordId) public view returns (bool) {
        return isDeleted[_recordId];
    }
}
