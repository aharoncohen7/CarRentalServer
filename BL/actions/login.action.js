"use server"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET
const EMAIL = process.env.EMAIL_ADMIN
const PASSWORD = process.env.PASSWORD_ADMIN
const cookieStore = cookies()

export async function generate(admin) {
    let token = jwt.sign(admin, SECRET, { expiresIn: "200m" });
    return `Bearer ${token}`
}

export const loginAction = async (fd) => {
    "use server"
    let body = Object.fromEntries(fd)
    const admin = { email: body.email.toLowerCase(), password: body.password }
    let token;
    try {
        if (admin.email == EMAIL.toLowerCase() && admin.password == PASSWORD) {
            token = await generate(admin);
            cookies().set('token', token)
            console.log("❤️❤️❤️❤️❤️❤️");
            
        }
        else {
            // redirect('/')
        }
    } catch (error) {
        console.log({ error })
    }
    token && redirect('/admin/dashboard')

}


export async function authAction() {
    "use server"
    try {
        let token = cookies().get('token');
        if (!token) throw "no token provided"
        if (!token.value) return false;
        token = token.value.split('Bearer ')[1] || "null";
        const adminFromToken = jwt.verify(token, SECRET);
        if (!adminFromToken) throw "not correct"
        if (adminFromToken.email == EMAIL && adminFromToken.password == PASSWORD) {
            console.log({ adminFromToken })
            return true;
        }
        else {
            cookies().delete('token')
            // redirect('/admin/');
            return false;
        }
    }
    catch (e) {
        console.log(e);

    }
}