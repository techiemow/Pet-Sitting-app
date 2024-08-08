
const ContactModel = require("../../Model/ContactModel")


const contact = async(req,res) =>{

 
    
    const { name, email, subject, message } = req.body;
  
    

    try {
      // Create a new contact message
      const contactMessage = new ContactModel({
        name,
        email,
        subject,
        message
      });
  
      // Save the message to the database
     const response =  await contactMessage.save();
     console.log(response);
     
  
      // Send a success response
      res.json({ success: true, message: 'Message sent successfully!' });
    }catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({
            message: err.message || "Internal Server Error",
            success: false,
            error: true
        });
    }

}

module.exports = contact