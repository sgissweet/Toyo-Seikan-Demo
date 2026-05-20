import { courses } from "../data/courses.js";
import { createCourseCard } from "../components/course/courseCard.js";

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function renderCarousel() {
  const container = document.getElementById("course-carousel-inner");
  if (!container) return;

  const groups = chunkArray(courses, 3);

  container.innerHTML = groups
    .map(
      (group, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <div class="row g-4 px-5">
            ${group
              .map(course =>
                createCourseCard(course, { showButton: false })
              )
              .join("")}
          </div>
        </div>
      `
    )
    .join("");
 toggleCarouselControls();
}

function toggleCarouselControls() {
  const prev = document.getElementById("course-prev");
  const next = document.getElementById("course-next");

  const shouldShow = courses.length > 3;

  if (!prev || !next) return;

  prev.classList.toggle("d-none", !shouldShow);
  next.classList.toggle("d-none", !shouldShow);
}
renderCarousel();