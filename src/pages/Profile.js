// import '../styles/oran.css';
const Profile = () => {

    // const showFriends = () => {
    //     alert("Showing friends...");
    // }
    // const addingFriends = () => {
    //     alert("Adding friends...");
    // }

    return (
        <>
        <div className="app">
        <h3>Edit Your Profile</h3>
            <div class="edit-profile-form">
                
                    <h1 class="review-title">Your details: </h1>
                    <div class="review-content">
                        <p><strong>Username:</strong> <span id="username">JohnDoe</span></p>
                        <p><strong>First Name:</strong> <span id="firstName">John</span></p>
                        <p><strong>Surname:</strong> <span id="surname">Doe</span></p>
                        <p><strong>Email:</strong> <span id="email">johndoe@example.com</span></p>
                    </div>
                    <br /><br />

                    <h1 class="review-title">Friends: </h1>
                    <div class="review-content">
                        <button onclick="showFriends()">Show Friends</button> <p></p>
                        <button onclick="addFriend()">Add Friend</button>
                    </div>
                    
                    <div class="review-content">
                    <form action="/updateUser" method="post">
                            <label for="newFirstname">New First Name:</label>
                            <input type="text" id="newFirstname" name="newFirstname" required />
                            <p></p>
                            <label for="newSurname">New Surname:</label>
                            <input type="text" id="newSurname" name="newSurname" required />
                            <p></p>
                            <label for="newEmail">New Email:</label>
                            <input type="text" id="newEmail" name="newEmail" required />
                            <p></p>
                            <label for="newEmail">New Password:</label>
                            <input type="text" id="newPassword" name="newPassword" required />
                            <p></p>
                            <button type="submit">Update Profile</button>
                        </form>
                    </div>
            </div>
        </div>
        </>
    );
};
 
export default Profile;