import { useState } from "react";

export default function AdminLogin() {

    const[adminId , setAdminId] = useState(sessionStorage.getItem(''));

    return(
        <>
            로그인하세요
        </>
    );
}