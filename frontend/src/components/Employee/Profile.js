import React, { useEffect, useState } from "react";
import API from "../../utils/api";
import "./profile.css";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editProfile, setEditProfile] = useState({});

    useEffect(() => {
        const fetchProfile = async () => {
            const { data } = await API.get("/employee/profile");
            setProfile(data);
            setEditProfile(data); 
        };
        fetchProfile();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveProfile = async () => {
        try {
            const { data } = await API.put("/employee/profile", editProfile);
            setProfile(data.updatedProfile);
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to update profile:", error);
            alert("Failed to save profile. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>My Profile</h2>

            {isEditing ? (
                <>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={editProfile.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={editProfile.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Department:</label>
                        <input
                            type="text"
                            name="department"
                            value={editProfile.department}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="save-btn" onClick={saveProfile}>
                        Save
                    </button>
                    <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <p>Name: {profile.name}</p>
                    <p>Email: {profile.email}</p>
                    <p>Department: {profile.department}</p>
                    <button className="edit-btn" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </>
            )}
        </div>
    );
};

export default Profile;
