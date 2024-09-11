const User = require('../Models/User');
const jwt = require('jsonwebtoken')
exports.adminData = async (req, res) => {
  try {
    // Define role hierarchy
    const roleHierarchy = ['SuperAdmin', 'adminManager', 'productManager', 'customerManager', 'orderManager', 'customReportsManager', 'facility'];

    const { token } = req.params;
    const verifiedID = await User.VerifyAdminMembers(token);

    // Find the role of the requesting admin
    const CheckID_role = await User.FindAdminById(verifiedID);
    const requesterRole = CheckID_role.job_role; 

    // Get the index of the requester role in the hierarchy
    const requesterRoleIndex = roleHierarchy.indexOf(requesterRole);

    // Filter members who have a lower role than the requester
    const result = await User.FindAdminMembers(verifiedID);
    const filteredResult = result.filter(member => {
      const memberRoleIndex = roleHierarchy.indexOf(member.job_role);
      return memberRoleIndex > requesterRoleIndex; // Only show lower roles
    });

    // Get only the lower roles in the hierarchy for the requester
    const lowerRoles = roleHierarchy.slice(requesterRoleIndex + 1); // Get roles lower than the requester's role

    res.status(200).json({
      message: 'Admin members fetched successfully!',
      type: 'success',
      result: filteredResult,
      job_roles:lowerRoles // Pass the lower roles in the hierarchy
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




exports.update_Job_Role = async (req, res) => {
  try {
    const { userId, prevRole, role } = req.body;
    // Define fixed roles
    const fixedJobRole = ['SuperAdmin', 'adminManager', 'productManager', 'customerManager', 'orderManager', 'customReportsManager', 'facility'];

    let Job_role;

    // Check if the requested role is in the fixedJobRole list
    if (fixedJobRole.includes(role)) {
      
      // If previous role and new role are the same, change role to 'facility'
      if (prevRole === role) {
        Job_role = 'facility';
      } else {
        Job_role = role; // Assign the new role
      }
    } else {
      // If the role is not valid, return an error
      return res.status(409).json({
        message: 'Unable to change the Job Role',
        type: 'error'
      });
    }

    // Update the user's job role in the database
    const result = await User.FindAdminByIdAndUpdateJob_Role(userId, Job_role);

    // Respond with success
    res.status(200).json({
      message: 'Admin member\'s Job Role updated successfully!',
      type: 'success',
      result
    });

  } catch (error) {
    console.error('Error occurred:', error);
    res.status(500).json({
      message: 'Error occurred while updating the job role',
      type: 'error',
      error: error.message
    });
  }
};
