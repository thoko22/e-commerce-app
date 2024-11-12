"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailer = void 0;
const nodeMailer = require("nodemailer");
const SendGrid = require("nodemailer-sendgrid-transport");
const environment_1 = require("../environments/environment");
class NodeMailer {
    static initiateTransport() {
        return nodeMailer.createTransport(SendGrid({
            auth: {
                api_key: (0, environment_1.getEnvironmentVariables)().sendgrid.api_key
            }
        })
        // {
        //     service: 'gmail',
        //     auth: {
        //         user: getEnvironmentVariables().gmail_auth.user,
        //         pass: getEnvironmentVariables().gmail_auth.pass 
        //     }
        // }
        // Note: https://myaccount.google.com/lesssecureapps
        );
    }
    static sendMail(data) {
        return NodeMailer.initiateTransport().sendMail({
            from: (0, environment_1.getEnvironmentVariables)().sendgrid.email_from,
            // from: getEnvironmentVariables() .gmail_auth.user,
            to: data.to,
            subject: data.subject,
            html: data.html
        });
    }
}
exports.NodeMailer = NodeMailer;
