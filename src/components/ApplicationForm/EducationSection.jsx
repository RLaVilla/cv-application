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

export function EducationSection({ education, handleInputChange }) {
  return (
    <section>
      <h1>
        <i>Education</i>
      </h1>
      <div className="formDiv">
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          id="school"
          value={education.school}
          onChange={(e) => handleInputChange("education", null, e)}
        />

        <label htmlFor="study">Subject of Study:</label>
        <input
          type="text"
          name="study"
          id="study"
          value={education.study}
          onChange={(e) => handleInputChange("education", null, e)}
        />

        <label>Graduation Date:</label>
        <div className="dateDiv gradDate">
          <select name="endMonth" id="endMonth">
            {months.map((month, index) => (
              <option
                key={index}
                value={education.endMonth}
                onChange={(e) => handleInputChange("education", null, e)}
              >
                {month}
              </option>
            ))}
          </select>
          <select name="endYear" id="endYear">
            {years.map((year, index) => (
              <option
                key={index}
                value={education.endYear}
                onChange={(e) => handleInputChange("education", null, e)}
              >
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
