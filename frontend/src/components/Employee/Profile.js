import React, { useEffect, useState } from "react";
import API from "../../utils/api";
import "./profile.css";
const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const { data } = await API.get("/employee/profile");
            setProfile(data);
        };
        fetchProfile();
    }, []);

    return (
        <div className="container">
            <h2>My Profile</h2>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Department: {profile.department}</p>
        </div>
    );
};

export default Profile;
