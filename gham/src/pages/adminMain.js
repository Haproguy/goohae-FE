import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function AdminMain() {
    let adminId = sessionStorage.getItem('admin');


    if (adminId) {
        console.log("Hello admin!");
        return (
            <>
                메인페이지
            </>
        );

    } else {
        return <Navigate to="/adLogin"></Navigate>;
    }
}