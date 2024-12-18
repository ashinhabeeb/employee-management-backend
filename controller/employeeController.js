const users = require("../model/employeeModel")



exports.getAllEmployeeController= async(req,res)=>{
    try {

        const allemployees = await users.find()
        res.status(200).json(allemployees)
        
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.addEmployeeController = async(req,res)=>{

    const {firstName, email , age, status} = req.body
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status('employee already exist')
        }
        else{
            const newEmployee = new users({
                firstName,
                email,
                age,
                status
            })
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeEmployeeController = async(req,res)=>{

    const {id} = req.params

    try {
        await users.findOneAndDelete({_id:id})
        res.status(200).json('deleted')
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.updateEmployeeController =  async(req,res)=>{

    const {firstName,email,age,status} = req.body
    const {id} = req.params

    try {
        const updatedEmployee = await users.findByIdAndUpdate(id,
            {
              firstName: firstName,
              email: email,
              age: age,
              status: status
            },
            { new: true }
          );
          
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Send back the updated employee data or success message
        res.status(200).json({ message: 'Employee updated successfully', data: updatedEmployee });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating employee', error: error.message });
    }
    
}