import React from "react";
import "./Faculty.css";
import FacultyCard from "./faculty/faculty-card";
import Nav from "./Nav";

function Faculty() {

  const faculties = [
    {
      id: 1,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Dr. Anita Goel",
      designation: "Professor",
      profileLink: ""
    },
    {
      id: 2,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Dr. Hema Banati",
      designation: "Professor",
      profileLink: ""
    },
    {
      id: 3,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Mrinali Yadav",
      designation: "Teacher",
      profileLink: ""
    },
    {
      id: 4,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Shilpi Taneja",
      designation: "Teacher",
      profileLink: ""
    },
    {
      id: 5,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Sheetal Taneja",
      designation: "Teacher",
      profileLink: ""
    },
    {
      id: 6,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Sapna Grover",
      designation: "Teacher",
      profileLink: ""
    },
    {
      id: 7,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Rashmi Yadav",
      designation: "Teacher",
      profileLink: ""
    },
    {
      id: 8,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Mehak",
      designation: "Teacher",
      profileLink: ""
    },
    {
      id: 9,
      imgSrc: "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Amit Kumar",
      designation: "Teacher",
      profileLink: ""
    }
  ]

  return (
    <div>
      <Nav />

      <div class="faculty__container">
        <div class="faculty__head">
          Faculty members
        </div>
        <div class="faculty__description">
          Nisi commodo elit esse tempor pariatur sint. Nostrud est pariatur laboris consequat. 
          Aliquip sunt consectetur occaecat in.
        </div>

        <div class="faculty__card_container">
        {
          faculties.map(faculty => {
            return (
              <FacultyCard key={faculty.id} profImg={faculty.imgSrc} name={faculty.name} desg={faculty.designation} profLink={faculty.profileLink} />
            )
          })
        }

        </div>

      </div>
    </div>
  );
}

export default Faculty;
