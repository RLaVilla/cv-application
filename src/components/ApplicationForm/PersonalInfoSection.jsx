export function PersonalInfoSection({ personalInfo, handleInputChange }) {
  return (
    <section>
      <h1>
        <i>Personal Information</i>
      </h1>
      <div className="formDiv">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={personalInfo.name}
          onChange={(e) => handleInputChange("personalInfo", null, e)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={personalInfo.email}
          onChange={(e) => handleInputChange("personalInfo", null, e)}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={personalInfo.phone}
          onChange={(e) => handleInputChange("personalInfo", null, e)}
        />
      </div>
    </section>
  );
}
