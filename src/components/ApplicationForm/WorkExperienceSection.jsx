import plusIcon from "../../assets/images/plusIcon.svg";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = Array.from(
  { length: 50 },
  (_, i) => new Date().getFullYear() - i
);

export function WorkExperienceSection({ workExperience, handleInputChange }) {
  const [isPresent, setIsPresent] = useState(false);
  const [company, setCompany] = useState("");

  const addWorkExperience = () => {
    const newWorkItem = {
      id: uuidv4(),
      company: "",
      jobTitle: "",
      responsibility: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      isPresent: false,
    };
    handleInputChange(["workExperience", newWorkItem]);
  };

  const handleCompanyInputChange = (e) => {
    setCompany(e.target.value);
  };

  return (
    <section>
      <div className="headerFlexDiv">
        <h1>
          <i>Work Experience</i>
        </h1>
        <img src={plusIcon} alt="" onClick={addWorkExperience} />
      </div>
      {workExperience.map((workItem) => (
        <div className="formDiv" key={workItem.id}>
          <label htmlFor={`company-${workItem.id}`}>Company Name:</label>
          <input
            type="text"
            name="company"
            id={`company-${workItem.id}`}
            value={workItem.company}
            onChange={(e) => {
              handleInputChange("workExperience", workItem.id, e);
              handleCompanyInputChange(e);
            }}
          />

          <label htmlFor={`jobTitle-${workItem.id}`}>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            id={`jobTitle-${workItem.id}`}
            value={workItem.jobTitle}
            onChange={(e) => {
              handleInputChange("workExperience", workItem.id, e);
            }}
          />

          <div className="textAreaDiv">
            <label htmlFor={`responsibility-${workItem.id}`}>
              Job Responsibilities:
            </label>
            <textarea
              id={`responsibility-${workItem.id}`}
              rows="6"
              value={workItem.responsibility}
              onChange={(e) => {
                handleInputChange("workExperience", workItem.id, e);
              }}
            ></textarea>
          </div>

          <div className="employmentPeriodDiv">
            <div className="dateDiv">
              <label>Start Date:</label>
              <select
                name="startMonth"
                id={`startMonth-${workItem.id}`}
                value={workItem.startMonth}
                onChange={(e) => {
                  handleInputChange("workExperience", workItem.id, e);
                }}
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="startYear"
                id={`startYear-${workItem.id}`}
                value={workItem.startYear}
                onChange={(e) => {
                  handleInputChange("workExperience", workItem.id, e);
                }}
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="dateDiv end">
              <label style={{ color: isPresent ? "gray" : "black" }}>
                End Date:
              </label>
              <select
                name="endMonth"
                id={`endMonth-${workItem.id}`}
                disabled={isPresent}
                value={workItem.endMonth}
                onChange={(e) => {
                  handleInputChange("workExperience", workItem.id, e);
                }}
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="endYear"
                id={`endYear-${workItem.id}`}
                disabled={isPresent}
                value={workItem.endYear}
                onChange={(e) => {
                  handleInputChange("workExperience", workItem.id, e);
                }}
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <span>
                <b>OR</b>
              </span>
              <label className="checkbox">
                <div>
                  <input
                    name="isPresent"
                    id={`isPresent-${workItem.id}`}
                    type="checkbox"
                    checked={workItem.isPresent}
                    onChange={(e) => {
                        console.log("Checkbox value changed:", e.target.checked);
                      handleInputChange("workExperience", workItem.id, e);
                    }}
                  />
                  <p>I'm currently employed by {company || "this company"}.</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
