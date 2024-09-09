const db = require('../config/db');

const User = {
  FindAdminMembers: async () => {
    const query = 'SELECT * FROM authentications';
    try {
      // Using async/await for promise-based query
      const [result] = await db.query(query);
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
  }
};



module.exports = User;
