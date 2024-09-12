const db = require('../config/db');
const jwt = require('jsonwebtoken')
const User = {
  FindAdminMembers: async (id) => {
    const query = `
      SELECT * 
      FROM authentications 
      WHERE id != ? 
      AND job_role != (SELECT job_role FROM authentications WHERE id = ?)`;

    try {
      // Using async/await for promise-based query
      const [result] = await db.query(query, [id, id]);
      return result;
    } catch (err) {
      console.error('Error occurred while fetching admin members:', err);
      throw new Error('Error fetching admin members'); // This will be caught in the controller
    }
  },


  FindAdminById: async (id) =>{
    const query = 'SELECT * FROM AUTHENTICATIONS WHERE id = ?';
      try{
        const [result]= await db.query(query, [id]);
        return result[0];
       }catch(error){
        console.error('Error occurred while fetching admin member:', error);
        throw new Error('Error occurred while fetching admin member')
       }
  },
  FindAdminByIdAndUpdateJob_Role: async (id , role)=>{


   const query = 'Update authentications SET job_role = ? where id = ?';

   try{
    const result = await db.query(query, [role , id]);
    return result;
   }catch(error){
    console.error('Error occurred while fetching admin members:', error);
    throw new Error('Error chnaging the Admin Role!')
   }
  },  
  VerifyAdminMembers: async (token)=>{
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      if(!verified){
        return res.status(201).json({ valid: false , message: 'Invalid Token' });
      }
      return verified.id
    } catch (err) {
      console.error('Token verification error:', err);
      return new Error('Error veryfying the admin member!')
    }
  }
};



module.exports = User;
