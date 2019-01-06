pragma solidity ^0.4.19;
//pragma experimental ABIEncoderV2;
 
 
contract All_In_One {
    
    // Paitent Structure here 
    
    struct paitent {           
        bytes32 name;
        bytes32 addres;
        uint phoneNo;
        bytes32 bloodGroup;
        uint insuranceCompanyId;
        uint emergencyContact;
        bytes32 Precautions;
        uint [] treatmentId;
    }
    
    mapping (uint => uint ) entitie;
    mapping (uint => paitent ) p_info;
    mapping (address => uint) addresstoId;
    mapping (uint => address) IdtoAdress;
    mapping(address => uint)balancesOfMoney;
 
    
    function addPatientInfo (uint _adharCardNumber, bytes32 _name, bytes32 _addres,uint _phoneNo ,bytes32 _bloodGroup , uint _insuranceCompany, uint _emergencyContact) public  {
        require(entitie[_adharCardNumber]==0 && addresstoId[msg.sender]==0); 
        p_info[_adharCardNumber].name = _name;
        p_info[_adharCardNumber].addres = _addres;
        p_info[_adharCardNumber].phoneNo = _phoneNo;
        p_info[_adharCardNumber].bloodGroup = _bloodGroup;
        p_info[_adharCardNumber].insuranceCompanyId = _insuranceCompany;
        p_info[_adharCardNumber].emergencyContact = _emergencyContact;
        entitie[_adharCardNumber] = 1; 
        addresstoId[msg.sender] = _adharCardNumber;
        IdtoAdress[_adharCardNumber] = msg.sender;
    }
    
    function getPatientInfo(uint  _adharCardNumber) public view returns(bytes32 name , bytes32 addres,uint phoneNo ,bytes32 bloodGroup , uint insuranceCompany, uint emergencyContacts, bytes32 Precautions){
        require(entitie[_adharCardNumber]==1 || entitie[_adharCardNumber]==2 );
        return(p_info[_adharCardNumber].name, p_info[_adharCardNumber].addres, p_info[_adharCardNumber].phoneNo, p_info[_adharCardNumber].bloodGroup, p_info[_adharCardNumber].insuranceCompanyId, p_info[_adharCardNumber].emergencyContact,p_info[_adharCardNumber].Precautions);
    }
    
    function UpdatePrecautions( uint _adharCardNumber,bytes32 _Precautions ) public {
        require(entitie[_adharCardNumber]==1);
        p_info[_adharCardNumber].Precautions = _Precautions;
    }
    
    //---------------------------------------------------------------------------------------------------------------------------------
    // Insurance is here 
    struct insuranceCompany {
        bytes32 name ;
        uint phoneNo;
        bytes32 [] notCovered;
    }
    
    mapping (uint => insuranceCompany)insu_info;
 
    function addInsurancecompany (uint _companyId, bytes32 _name, uint phone_no) public{
        require(entitie[_companyId]==0 && addresstoId[msg.sender]==0); 
        insu_info[_companyId].name = _name;
        insu_info[_companyId].phoneNo = phone_no;
        addresstoId[msg.sender] = _companyId;
        entitie[_companyId]=3;
        addresstoId[msg.sender] = _companyId;
        IdtoAdress[_companyId] = msg.sender;
    }
    
    function getInsuranceCompany (uint Insu_id) public view returns (bytes32 name, uint phoneNo){
        uint val = addresstoId[msg.sender];
        require(entitie[val]==1 || entitie[Insu_id]==3); 
        uint length = insu_info[Insu_id].notCovered.length;
        return(insu_info[Insu_id].name, insu_info[Insu_id].phoneNo);
    }
    
    function addNotCoverdMedicationInInsurance(bytes32 _Medication) public{
        uint val = addresstoId[msg.sender];
        require(entitie[val]==3); 
        insu_info[val].notCovered.push(_Medication);  
    }
    
    function applyForInsurance(uint64 _adharCardNumber) public view returns(bytes32 InsuranceStatus){
        uint val = addresstoId[msg.sender];
        require((entitie[_adharCardNumber]==1 || entitie[_adharCardNumber]==2) && (entitie[val]==1 || entitie[2]==2));
        uint insu_id = p_info[_adharCardNumber].insuranceCompanyId;
        uint latestTreatmentid = p_info[_adharCardNumber].treatmentId[p_info[_adharCardNumber].treatmentId.length-1];
        bool flag = true;
        for(uint j=0;j<insu_info[insu_id].notCovered.length;j++){
            if(flag!=true)
            break;
            else{
                for(uint i=0;i<tid[latestTreatmentid].InsuranceKeep.length;){
                    if(keccak256(insu_info[insu_id].notCovered[j])==keccak256(tid[latestTreatmentid].InsuranceKeep[i]))
                    {
                        flag = false;
                        break;
                    }
                }    
            }
        }
        if(flag)
        return("success");
        //return (0x496e737572616e6365205375636365737366756c6c7920436c61696d6564);
        else
        return("fail");
        //return (0x496e737572616e636520436c61696d696e67204661696c6564);
    }
    
    //---------------------------------------------------------------------------------------------------------------------------------
    // Treatment Structure here 
    struct treatment {
        uint patient_id;
        uint doctor_id;
        bytes32 diagnosis;
        bytes32 test_conducted;
        uint bill;
        bytes32 medicine;
        bytes32 [] InsuranceKeep;
    }
    
    mapping(uint=>treatment) tid;
            
    function createTreatmentID(uint patient_id) public returns (uint){
        uint treatment_id = (142317*patient_id)%1000003;
        return treatment_id;
    }
    
    function TreatPatient(uint patient_id,uint doctor_id,bytes32 diagnosis,bytes32 test_conducted,uint bill,bytes32 medicine) public  returns (uint){
        uint val = addresstoId[msg.sender];
        require(entitie[patient_id]==1 || entitie[val]==2 );
        uint _tid = createTreatmentID(patient_id);
        tid[_tid].patient_id = patient_id;
        tid[_tid].doctor_id = doctor_id;
        tid[_tid].diagnosis = diagnosis;
        tid[_tid].test_conducted = test_conducted;
        tid[_tid].bill = bill;
        tid[_tid].medicine = medicine;
        p_info[patient_id].treatmentId.push(_tid); // pushing treatmentId to array in treatmentId.
        return _tid;
    }
    
    function getTreatmentDetails(uint _tid) public view returns (uint p_id,uint d_id,bytes32 diagnosis,bytes32 test_conducted,uint bill,bytes32 medicine) {
        return (tid[_tid].patient_id,tid[_tid].doctor_id,tid[_tid].diagnosis,tid[_tid].test_conducted,tid[_tid].bill,tid[_tid].medicine);
    }
        
    function addInsuranceKeep(uint p_id, bytes32  _medication) public {
        uint val = addresstoId[msg.sender];
        require(entitie[val]==2); 
        uint _t_id = p_info[p_id].treatmentId[p_info[p_id].treatmentId.length-1];
        tid[_t_id].InsuranceKeep.push(_medication);   
    }
    
    //---------------------------------------------------------------------------------------------------------------------------------
    //Doctor starts here
    
     struct doctor{
        uint doc_id;
        bytes32 name;
        bytes32 practice_type;
        bytes32 area_of_expertize;
        uint phone_no;
        bytes32 Address;
    }
    
    mapping(uint=>doctor) did;
    mapping(uint => uint) Otp;
    
    function addDoctor(uint doc_id,bytes32 name,bytes32 practice_type,bytes32 area_of_expertize,uint phone_no,bytes32 Address) public {
        require(entitie[doc_id]==0 || addresstoId[msg.sender]==0); 
        did[doc_id] = doctor(doc_id,name,practice_type,area_of_expertize,phone_no,Address);
        entitie[doc_id]=2;
        addresstoId[msg.sender] = doc_id;
        IdtoAdress[doc_id] = msg.sender;
    }
 
    function getDoctorDetails(uint _d_id) public constant returns (uint doc_id,bytes32 name,bytes32 practice_type,bytes32 area_of_expertize,uint phone_no,bytes32 Address){
        uint val = addresstoId[msg.sender];
        require(entitie[val]==2 || entitie[val]==1 ); 
        return( did[_d_id].doc_id,did[_d_id].name,did[_d_id].practice_type,did[_d_id].area_of_expertize,did[_d_id].phone_no,did[_d_id].Address);
    }

    function requestAccessToPatient(uint _adharCardNumber) returns(uint){
           uint val = addresstoId[msg.sender];
           require(entitie[val]==2);
           uint otp = uint(keccak256(now*_adharCardNumber));
           Otp[_adharCardNumber] = otp;
       }
       
       function getDetailsOfAllTID(uint _adharCardNumber, uint OTP) public returns(uint []){
           uint val = addresstoId[msg.sender];
           require(entitie[val]==2 && Otp[_adharCardNumber]==OTP);
           return(p_info[_adharCardNumber].treatmentId);
           
       }

    
    //---------------------------------------------------------------------------------------------------------------------------------
    //Medical store
    
    struct chemist {
        uint chemist_id;
        bytes32 Address;
        bytes32 name;
        uint phoneNo;
        bytes32 [] medicines;
    }
    
    mapping(uint=>chemist) cid;
 
    function addChemist(uint chem_id, bytes32 Address, bytes32 name,uint phone_no) public {
        require(entitie[chem_id]==0 || addresstoId[msg.sender]==0); 
        cid[chem_id].chemist_id = chem_id;
        cid[chem_id].Address = Address;
        cid[chem_id].name = name;
        cid[chem_id].phoneNo = phone_no;
        entitie[chem_id]=4;
        addresstoId[msg.sender] = chem_id;
        IdtoAdress[chem_id] = msg.sender;
    }
    
    function getchemistinfo(uint chem_id) public returns(bytes32 Address, bytes32 name,uint phone_no){
        require(entitie[chem_id]==4 || entitie[chem_id]==1); 
        return( cid[chem_id].Address,cid[chem_id].name,cid[chem_id].phoneNo);
    }
    
    function giveMedicines(uint p_id) public constant returns(bytes32){
        uint val = addresstoId[msg.sender];
        bytes32 medicatines = tid[p_info[p_id].treatmentId[p_info[p_id].treatmentId.length-1]].medicine;
        return(medicatines);
    }
    
//--------------------------------------------------------------------------------------------------------------------------
//Identify
 
    function Identify() public returns (uint val) {
        uint No = addresstoId[msg.sender];
        if(entitie[No]==0){
            return(0);
        }
        else 
            return(entitie[No]);
    }
 
}
 
 
 
 
 
 
 
 
 
 
 
 
 
