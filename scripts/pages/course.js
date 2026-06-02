import { courses } from "../data/courses.js";
import { createCourseCard } from "../components/course/courseCard.js";
import { getPage } from "../core/layout.js";
import { myCourseCard } from "../components/course/MyCourseCard.js";

// ======================
// UTILS
// ======================

function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

function renderGrid(container, items, options = {}) {
  if (!container) return;

  container.innerHTML = `
    <div class="row g-4">
      ${items
        .map(item => createCourseCard(item, options))
        .join("")}
    </div>
  `;
}

// ======================
// HOME PAGE (CAROUSEL)
// ======================

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

// ======================
// COURSE PAGE FILTER
// ======================

function getFilteredCourses(filter) {
  switch (filter) {
    case "my":
      return courses.filter(course =>
        ["inprogress", "completed", "expired"].includes(course.status)
      );

    case "completed":
      return courses.filter(
        course => course.status === "completed"
      );

    default:
      return courses;
  }
}

const viewConfig = {
  all: {
    renderer: createCourseCard,
    options: { showButton: true }
  },

  my: {
    renderer: myCourseCard,
    options: {}
  },

  completed: {
    renderer: myCourseCard,
    options: {}
  }
};

function renderCourses(filter = "all") {
  const container = document.getElementById("course-list");

  const filteredCourses = getFilteredCourses(filter);

  const config = viewConfig[filter] || viewConfig.all;

  container.innerHTML = `
    <div class="row g-2">
      ${filteredCourses
        .map(course =>
          config.renderer(course, config.options)
        )
        .join("")}
    </div>
  `;
}

// ======================
// TABS
// ======================

function setupTabs() {
  const tabs = document.querySelectorAll("#courseTabs .nav-link");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      renderCourses(tab.dataset.filter);
    });
  });
}

// ======================
// INIT PAGE
// ======================

function initCoursePage() {
  setupTabs();
  renderCourses();
}

// ======================
// ROUTER
// ======================

const page = getPage();

const pageActions = {
  course: initCoursePage,
  default: renderCarousel
};

(pageActions[page] || pageActions.default)();