document.addEventListener("DOMContentLoaded", () => {
    const findScholarshipButton = document.getElementById("findScholarshipButton");
  
    findScholarshipButton?.addEventListener("click", () => {
      const educationLevel = document.getElementById("educationLevel").value;
      const income = document.getElementById("income").value;
      const category = document.getElementById("category").value;
  
      if (!educationLevel || !income || !category) {
        alert("Please, select all the fields");
        return;
      }
  
      const filteredScholarships = scholarships.filter((scholarship) => {
        return scholarship.eligibility.includes(educationLevel) &&
               scholarship.eligibility.includes(income);
      });
  
      localStorage.setItem("filteredScholarships", JSON.stringify(filteredScholarships));
      window.location.href = "results.html";
    });
  
    const resultsContainer = document.getElementById("resultsContainer");
    if (resultsContainer) {
      const filteredScholarships = JSON.parse(localStorage.getItem("filteredScholarships"));
      if (!filteredScholarships || filteredScholarships.length === 0) {
        resultsContainer.innerHTML = "<p>No scholarship was received</p>";
      } else {
        filteredScholarships.forEach((scholarship) => {
          const scholarshipDiv = document.createElement("div");
          scholarshipDiv.classList.add("scholarship");
          scholarshipDiv.innerHTML = `
            <h3>${scholarship.name}</h3>
            <p><strong>Eligibility -- </strong> ${scholarship.eligibility}</p>
            <p><strong>Profits -- </strong> ${scholarship.benefits}</p>
            <a href="${scholarship.website}" target="_blank">Apply now.</a>
          `;
          resultsContainer.appendChild(scholarshipDiv);
        });
      }
    }
  });
  