import React, {useState} from 'react';
import Card from '../shared/card/Card';
import InfoInput from './InfoInput';
export default function InfoInputCont({handleSubmitModalByUpper, handleSubmitDataByUpper}) {
  const [nameVal, setNameVal] = useState("");
  const [ageVal, setAgeVal] = useState("");

  const handleNameChange = (changedValue) => {
    setNameVal(changedValue);
  };

  const handleAgeChange = (changedValue) => {
    setAgeVal(changedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nameVal.trim().length === 0 || ageVal.trim().length === 0) {
      handleSubmitModalByUpper[0](true);
    } else if (+ageVal <= 0) {
      handleSubmitModalByUpper[1](true);
    } else {
      const newData = {name: nameVal, age: ageVal};
      handleSubmitDataByUpper(newData);
      setNameVal("");
      setAgeVal("");
    }
  };

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <InfoInput 
                label={"Username"}
                inputAttr={{
                    type: "text",
                    value: nameVal
                }}
                handleChangeByUpper={handleNameChange}
            />
            <InfoInput 
                label={"Age (Years)"}
                inputAttr={{
                    type: "number",
                    value: ageVal
                }}
                handleChangeByUpper={handleAgeChange}
            />
            <button type="submit">Add User</button>
        </form>
    </Card>
  )
}
