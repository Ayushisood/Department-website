import React from "react";
import styles from "./Faculty.module.css";
import FacultyCard from "./faculty/faculty-card";
import Nav from "./Nav";
import Footer from "./Footer";

function Faculty() {
  const faculties = [
    {
      id: 1,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Dr. Anita Goel",
      designation: "Professor",
      profileLink: "http://people.du.ac.in/~agoel/index.html",
    },
    {
      id: 2,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Dr. Hema Banati",
      designation: "Professor",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/07/hb_Faculty_Proforma.pdf",
    },
    {
      id: 3,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Mrinali Yadav",
      designation: "Teacher",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/04/Computer-Science_Mrinali-Yadav.pdf",
    },
    {
      id: 4,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Shilpi Taneja",
      designation: "Teacher",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/04/Computer-Science_Shilpi-Taneja.pdf",
    },
    {
      id: 5,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Sheetal Taneja",
      designation: "Teacher",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/04/Computer-Science_Sheetal-Taneja.pdf",
    },
    {
      id: 6,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Sapna Grover",
      designation: "Teacher",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/04/Comp-Sc_Sapna-Grover.pdf",
    },
    {
      id: 7,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Rashmi Yadav",
      designation: "Teacher",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/04/CompSc_Rashmi-Yadav.pdf",
    },
    {
      id: 8,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Mehak",
      designation: "Teacher",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/04/Comp-Sc_Mehak.pdf",
    },
    {
      id: 9,
      imgSrc:
        "https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png",
      name: "Amit Kumar",
      designation: "Teacher",
      profileLink:
        "http://dsc.du.ac.in/wp-content/uploads/2021/04/Comp-Sc_Amit-Kumar.pdf",
    },
  ];

  return (
    <div>
      <Nav />

      <div className={`${styles["facultyContainer"]}`}>
        <div style={{
          background: `url("http://dsc.du.ac.in/wp-content/uploads/2021/07/Screenshot_2019-04-08-06-08-53-037_com.instagram.android.jpg")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "450px"
        }}>
          <div className={`${styles["facultyHead"]}`}>Faculty members</div>
          <div className={`${styles["facultyDescription"]}`}>
            Nisi commodo elit esse tempor pariatur sint. Nostrud est pariatur
            laboris consequat. Aliquip sunt consectetur occaecat in.
          </div>
        </div>
        <div className={`${styles["facultyCardContainer"]}`}>
          {faculties.map((faculty) => {
            return (
              <FacultyCard
                key={faculty.id}
                profImg={faculty.imgSrc}
                name={faculty.name}
                desg={faculty.designation}
                profLink={faculty.profileLink}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faculty;
