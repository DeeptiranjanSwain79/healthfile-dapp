import { createContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import healthfile from "./HealthFile.json";
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const ContractABI = healthfile.abi;

export const HealthFileContext = createContext();
// FETCHING the Smart Contract
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(contractAddress, ContractABI, signerOrProvider);

const HealthFileContextProvider = ({ children }) => {
  const DappName = "HealthFile Dapp";
  const [currentUser, setCurrentUser] = useState("");
  const [balance, setBalance] = useState(0);

  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dateTime;
  };

  const submitRecord = async (
    name,
    age,
    gender,
    bloodGroup,
    allergies,
    diagnosis,
    treatment
  ) => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const createRecord = await contract.addRecord(
        name,
        age * 1,
        gender,
        bloodGroup,
        allergies,
        diagnosis,
        treatment
      );

      await createRecord.wait();
      console.log("Record Created", createRecord);
      // window.location.reload();
    } catch (error) {
      console.log("Error in submitRecord", error);
    }
  };

  const getAllRecords = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const records = await contract.getAllRecords();

      const allRecords = records
        .filter((r) => r.recordId.toNumber() !== 0)
        .map((record) => ({
          recordId: record.recordId.toNumber(),
          timestamp: convertTime(record.timestamp.toNumber()),
          name: record.name,
          age: record.age.toNumber(),
          gender: record.gender,
          bloodGroup: record.bloodGroup,
          allergies: record.allergies,
          diagnosis: record.diagnosis,
          treatment: record.treatment,
        }));

      return allRecords;
    } catch (error) {
      console.log("Error while getAllRecords", error);
    }
  };

  // Check wallet connection
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return "Install Metamask";

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentUser(accounts[0]);
      } else {
        return "No account";
      }
    } catch (error) {
      console.log("Error in checkIfWalletConnected", error);
    }
  };

  // Connect with wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) window.alert("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentUser(accounts[0]);

      const provider = new ethers.providers.JsonRpcProvider();
      const balanceWei = await provider.getBalance(accounts[0]);
      const balanceEther = ethers.utils.formatEther(balanceWei);

      setBalance(balanceEther);
    } catch (error) {
      console.log("Error in connectWallet", error);
      return "Error while connecting to wallet";
    }
  };

  const deleteRecord = async (recordId) => {
    try {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const deleteRecord = await contract.deleteRecord(recordId * 1);

      await deleteRecord.wait();
      console.log("Record Deleted", deleteRecord);
      window.location.reload();
    } catch (error) {
      console.log("Error in deleteRecord", error);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <HealthFileContext.Provider
      value={{
        DappName,
        currentUser,
        balance,
        connectWallet,
        submitRecord,
        getAllRecords,
        deleteRecord,
      }}
    >
      {children}
    </HealthFileContext.Provider>
  );
};

export default HealthFileContextProvider;
