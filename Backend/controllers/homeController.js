const User = require('../Models/User');

exports.adminData = async (req, res) => {
  try {
    // Now FindAdminMembers returns a promise, so use await
    const result = await User.FindAdminMembers();
    res.status(200).json({
      message: 'Admin members fetched successfully!',
      type: 'success',
      result
    });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({
      message: 'Error occurred while fetching data',
      type: 'error',
      error: error.message
    });
  }
};


exports.update_Job_Role = async (req, res) =>{
  try {
    const { userId , role} = req.body;
    let Job_role;
    const fixedJobRole = ['productManager', 'adminManager', 'customerManager', 'orderManager', 'customReportsManager']
    if(fixedJobRole.includes(role)){
      Job_role = role
    }else{
      Job_role = null;
      return res.status(409).json({
        message:'Unable to chnage the Job Role',
        type:'error'
      })
    }

    const findJobRole = await User.FindAdminById(userId);
    console.log(findJobRole)
     if(findJobRole.job_role === role){
      Job_role = null;
     }
    // Now FindAdminMembers returns a promise, so use await
    const result = await User.FindAdminByIdAndUpdateJob_Role(userId , Job_role);
    res.status(200).json({
      message: 'Admin members Job Role Updated successfully!',
      type: 'success',
      result
    });
  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({
      message: 'Error occurred while fetching data',
      type: 'error',
      error: error.message
    });
  }
}