const User = require('../models/user');
async function handleUserSignUp(req,res){
    
        const { Name, email, password } = req.body;
    
        try {
            const user = await User.create({
                Name,
                email,
                password,
            });
    
            return res.status(200).json(user);
        } catch (error) {
            
            return res.status(500).json({ error: error.message });
        }

}
async function handleUserSignIn(req, res) {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    if (token) {
      return res.status(200).json({ status: "user found successfully", token: token });
    } else {
      return res.status(401).json({ status: "Unauthorized" }); // Consider using a 401 for authentication failure
    }
  } catch (error) {
    console.error("Error in user sign-in:", error);
    return res.status(500).json({ status: "Server error" }); // Consider using a 500 for server errors
  }
}





  
module.exports={
    handleUserSignIn,
    handleUserSignUp,
}