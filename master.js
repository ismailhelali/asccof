const courses = [
  {
    master: "Master 1",
    title: "Title 1",
    shortDesc: "Short description 1",
    fullDesc: "Full description 1"
  },
  {
    master: "Master 2",
    title: "Title 2",
    shortDesc: "Short description 2",
    fullDesc: "Full description 2"
  },
  {
    master: "Master 3",
    title: "Title 3",
    shortDesc: "Short description 3",
    fullDesc: "Full description 3"
  }
];

const coursesSection = document.getElementById("courses");

for (let i = 0; i < courses.length; i++) {
  const course = courses[i];

  const courseDiv = document.createElement("div");
  courseDiv.className = "course";

  const courseTitle = document.createElement("h3");
  courseTitle.innerText = `${course.master}: ${course.title}`;

  const courseShortDesc = document.createElement("p");
  courseShortDesc.innerText = course.shortDesc;

  const courseFullDesc = document.createElement("p");
  courseFullDesc.innerText = course.fullDesc;
  courseFullDesc.style.display = "none";

  const viewMoreButton = document.createElement("button");
  viewMoreButton.innerText = "View More";
  viewMoreButton.addEventListener("click", () => {
    courseFullDesc.style.display = "block";
    viewMoreButton.style.display = "none";
  });

  courseDiv.appendChild(courseTitle);
  courseDiv.appendChild(courseShortDesc);
  courseDiv.appendChild(courseFullDesc);
  courseDiv.appendChild(viewMoreButton);

  coursesSection.appendChild(courseDiv);
}
