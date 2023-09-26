// Write your solution in this file!
// Define an employee Object with name and streetAddress keys.
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update an employee's key with a new value (non-destructive).
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update an employee's key with a new value (destructive).
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from an employee Object (non-destructive).
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from an employee Object (destructive).
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log(employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Alice");
  console.log(updatedEmployee);
  
  const destructiveUpdate = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log(destructiveUpdate);
  
  const deletedEmployee = deleteFromEmployeeByKey(employee, "name");
  console.log(deletedEmployee);
  
  const destructiveDelete = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(destructiveDelete);
  
