import Otp from '../model/otp.model';
import userService from '../service/user.service'
import mailService from '../service/mail.service'
import otp_template from '../email_template/otp';
import mail from "../mailer/mailer";

class OtpController{

   async create(req: any, res: any){
        try {
            const regCode = userService.generateRegCode();
    
                const form = {
                    name : req.body.email,
                    otp: regCode
                }
                //create template
                const template = <any> otp_template.otp_template(form);
                const mail_options = mailService.mail_options(req.body.email, template, "Active Account");
                const transporter = mail.connect()
                //send mail
                mailService.send_mail(transporter, mail_options);
                //luu db
                await Otp.create({email: req.body.email, otp: regCode});
                res.json({status: 200})
        } catch (error) {
                res.sendStatus(400);
        }
    }

    async update(req: any, res: any){
        try {
            if(await Otp.findOne({email: req.body.email, otp: req.body.otp})){
                res.json({status: 200})
            }
            else{
                res.json({status:400, error: "invalid otp"});
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }
}

export default new OtpController;