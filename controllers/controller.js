const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
exports.sendMessage=async(req,res)=>{
    try {
       const message= await client.messages
      .create({
         body: req.body.message,
         from: 'whatsapp:+14155238886',
         to: `whatsapp:${req.body.toNumber}`
       });
       res.status(200).json({
        success:true,
        message:message
    });
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
// Image msg
exports.sendImgMessage=async(req,res)=>{
    try {
       const message= await client.messages
      .create({
         body: req.body.message,
         from: 'whatsapp:+14155238886',
         mediaUrl: ['https://demo.twilio.com/owl.png'],
         to: `whatsapp:${req.body.toNumber}`
       });
       res.status(200).json({
        success:true,
        message:message
    });
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
// Video msg
exports.sendVidMessage=async(req,res)=>{
    try {
       const message= await client.messages
      .create({
         from: 'whatsapp:+14155238886',
         mediaUrl: ['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'],
         to: `whatsapp:${req.body.toNumber}`
       });
       res.status(200).json({
        success:true,
        message:message
    });
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
// Document msg
exports.sendDocMessage=async(req,res)=>{
    try {
       const message= await client.messages
      .create({
         
         from: 'whatsapp:+14155238886',
         mediaUrl: ['https://www.clickdimensions.com/links/TestPDFfile.pdf'],
         to: `whatsapp:${req.body.toNumber}`
       });
       res.status(200).json({
        success:true,
        message:message
    });
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}

