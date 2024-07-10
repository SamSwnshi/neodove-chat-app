import Message from "../models/message.models.js";
import Conversation from "../models/conversation.models.js"
import User from "../models/user.models.js";

export const getMessage = async (req, res) => {
    try{
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;


    
        const conversation = await Conversation.findOne({
          participants: { $all: [senderId, userToChatId] },
        }).populate({path:"message",
          populate: [
            { path: "senderId", select: "username" },
            { path: "receiverId", select: "username" }
        ] 
        })
    
        if(!conversation){
          return res.status(200).json([])
        }
        const message = conversation.message
        res.status(201).json(conversation.message)
      }catch(error){
        console.log("Error in getMessages controller", error.message);
        res.status(500).json({message: "Internal Server Error"})
      }
};

export const sendMessage = async(req,res)=>{
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
    
      const senderName = await User.findById(senderId);
      if(!senderName){
        return res.status(404).json({ message: "Sender not found" });
      }

        let conversation = await Conversation.findOne({
          participants: { $all: [senderId, receiverId] },
        });
    
        if (!conversation) {
            conversation = await Conversation.create({
            participants: [senderId, receiverId],
          });
        }
    
        const newMessage = new Message({
          username: senderName.username,
            senderId,
            receiverId,
            message,
        })
    
        if(newMessage){
            conversation.message.push(newMessage._id)
        }
    
        // await conversation.save();
        // await newMessage.save()
    
        // this will run parallel
        await Promise.all([conversation.save(), newMessage.save()]);
    
       
        res.status(201).json(newMessage)
      } catch (error) {
        console.log("Error in SendMessage controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
      }
}
