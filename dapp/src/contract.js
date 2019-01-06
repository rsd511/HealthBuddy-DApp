import web3 from './web3';
const address = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
const abi = [
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "_adharCardNumber",
	      "type": "uint256"
	    },
	    {
	      "name": "_name",
	      "type": "bytes32"
	    },
	    {
	      "name": "_addres",
	      "type": "bytes32"
	    },
	    {
	      "name": "_phoneNo",
	      "type": "uint256"
	    },
	    {
	      "name": "_bloodGroup",
	      "type": "bytes32"
	    },
	    {
	      "name": "_insuranceCompany",
	      "type": "uint256"
	    },
	    {
	      "name": "_emergencyContact",
	      "type": "uint256"
	    }
	  ],
	  "name": "addPatientInfo",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
	    {
	      "name": "_adharCardNumber",
	      "type": "uint256"
	    }
	  ],
	  "name": "getPatientInfo",
	  "outputs": [
	    {
	      "name": "name",
	      "type": "bytes32"
	    },
	    {
	      "name": "addres",
	      "type": "bytes32"
	    },
	    {
	      "name": "phoneNo",
	      "type": "uint256"
	    },
	    {
	      "name": "bloodGroup",
	      "type": "bytes32"
	    },
	    {
	      "name": "insuranceCompany",
	      "type": "uint256"
	    },
	    {
	      "name": "emergencyContacts",
	      "type": "uint256"
	    },
	    {
	      "name": "Precautions",
	      "type": "bytes32"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "_adharCardNumber",
	      "type": "uint256"
	    },
	    {
	      "name": "_Precautions",
	      "type": "bytes32"
	    }
	  ],
	  "name": "UpdatePrecautions",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "_companyId",
	      "type": "uint256"
	    },
	    {
	      "name": "_name",
	      "type": "bytes32"
	    },
	    {
	      "name": "phone_no",
	      "type": "uint256"
	    }
	  ],
	  "name": "addInsurancecompany",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
	    {
	      "name": "Insu_id",
	      "type": "uint256"
	    }
	  ],
	  "name": "getInsuranceCompany",
	  "outputs": [
	    {
	      "name": "name",
	      "type": "bytes32"
	    },
	    {
	      "name": "phoneNo",
	      "type": "uint256"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "_Medication",
	      "type": "bytes32"
	    }
	  ],
	  "name": "addNotCoverdMedicationInInsurance",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
	    {
	      "name": "_adharCardNumber",
	      "type": "uint64"
	    }
	  ],
	  "name": "applyForInsurance",
	  "outputs": [
	    {
	      "name": "InsuranceStatus",
	      "type": "bytes32"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "patient_id",
	      "type": "uint256"
	    }
	  ],
	  "name": "createTreatmentID",
	  "outputs": [
	    {
	      "name": "",
	      "type": "uint256"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "patient_id",
	      "type": "uint256"
	    },
	    {
	      "name": "doctor_id",
	      "type": "uint256"
	    },
	    {
	      "name": "diagnosis",
	      "type": "bytes32"
	    },
	    {
	      "name": "test_conducted",
	      "type": "bytes32"
	    },
	    {
	      "name": "bill",
	      "type": "uint256"
	    },
	    {
	      "name": "medicine",
	      "type": "bytes32"
	    }
	  ],
	  "name": "TreatPatient",
	  "outputs": [
	    {
	      "name": "",
	      "type": "uint256"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
	    {
	      "name": "_tid",
	      "type": "uint256"
	    }
	  ],
	  "name": "getTreatmentDetails",
	  "outputs": [
	    {
	      "name": "p_id",
	      "type": "uint256"
	    },
	    {
	      "name": "d_id",
	      "type": "uint256"
	    },
	    {
	      "name": "diagnosis",
	      "type": "bytes32"
	    },
	    {
	      "name": "test_conducted",
	      "type": "bytes32"
	    },
	    {
	      "name": "bill",
	      "type": "uint256"
	    },
	    {
	      "name": "medicine",
	      "type": "bytes32"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "p_id",
	      "type": "uint256"
	    },
	    {
	      "name": "_medication",
	      "type": "bytes32"
	    }
	  ],
	  "name": "addInsuranceKeep",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "doc_id",
	      "type": "uint256"
	    },
	    {
	      "name": "name",
	      "type": "bytes32"
	    },
	    {
	      "name": "practice_type",
	      "type": "bytes32"
	    },
	    {
	      "name": "area_of_expertize",
	      "type": "bytes32"
	    },
	    {
	      "name": "phone_no",
	      "type": "uint256"
	    },
	    {
	      "name": "Address",
	      "type": "bytes32"
	    }
	  ],
	  "name": "addDoctor",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
	    {
	      "name": "_d_id",
	      "type": "uint256"
	    }
	  ],
	  "name": "getDoctorDetails",
	  "outputs": [
	    {
	      "name": "doc_id",
	      "type": "uint256"
	    },
	    {
	      "name": "name",
	      "type": "bytes32"
	    },
	    {
	      "name": "practice_type",
	      "type": "bytes32"
	    },
	    {
	      "name": "area_of_expertize",
	      "type": "bytes32"
	    },
	    {
	      "name": "phone_no",
	      "type": "uint256"
	    },
	    {
	      "name": "Address",
	      "type": "bytes32"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "chem_id",
	      "type": "uint256"
	    },
	    {
	      "name": "Address",
	      "type": "bytes32"
	    },
	    {
	      "name": "name",
	      "type": "bytes32"
	    },
	    {
	      "name": "phone_no",
	      "type": "uint256"
	    }
	  ],
	  "name": "addChemist",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
	    {
	      "name": "chem_id",
	      "type": "uint256"
	    }
	  ],
	  "name": "getchemistinfo",
	  "outputs": [
	    {
	      "name": "Address",
	      "type": "bytes32"
	    },
	    {
	      "name": "name",
	      "type": "bytes32"
	    },
	    {
	      "name": "phone_no",
	      "type": "uint256"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
	    {
	      "name": "p_id",
	      "type": "uint256"
	    }
	  ],
	  "name": "giveMedicines",
	  "outputs": [
	    {
	      "name": "",
	      "type": "bytes32"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [],
	  "name": "Identify",
	  "outputs": [
	    {
	      "name": "val",
	      "type": "uint256"
	    }
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
];
export default new web3.eth.Contract(abi, address);