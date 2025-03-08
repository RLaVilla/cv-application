import { PersonalInfoSection } from "./ApplicationForm/PersonalInfoSection";
import { EducationSection } from "./ApplicationForm/EducationSection";
import { WorkExperienceSection } from "./ApplicationForm/WorkExperienceSection";
import { useState } from "react";
import "../styles/Form.css";
import { v4 as uuidv4 } from "uuid";

export function ApplicationForm() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    study: "",
    endMonth: "",
    endYear: "",
  });

  const [workExperience, setWorkExperience] = useState([
    {
      id: uuidv4(),
      company: "",
      jobTitle: "",
      responsibility: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      isPresent: false,
    },
  ]);

  const handleInputChange = (section, id, e) => {
    const { name, value, checked, type } = e.target;

    if (section === "personalInfo") {
      setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    } else if (section === "education") {
      setEducation((prev) => ({ ...prev, [name]: value }));
    } else if (section === "workExperience") {
      setWorkExperience((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, [name]: type === "checkbox" ? checked : value }
            : item
        )
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Personal Info:", personalInfo);
    console.log("Work Experience:", workExperience);
    console.log("Education:", education);
  };

  return (
    <>
      <header>CV Application</header>
      <form onSubmit={handleSubmit}>
        <PersonalInfoSection
          personalInfo={personalInfo}
          handleInputChange={handleInputChange}
        />
        <EducationSection
          education={education}
          handleInputChange={handleInputChange}
        />
        <WorkExperienceSection
          workExperience={workExperience}
          handleInputChange={handleInputChange}
        />
        <div className="buttonContainer">
          <button className="submitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
