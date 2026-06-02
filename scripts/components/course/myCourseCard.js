// components/cards/MyCourseCard.js

import { formatDuration } from "./courseCard.js";

function getStatusBadge(status) {
    switch (status) {

        case "completed":
            return `
        <span class="badge bg-success">
          Completed
        </span>
      `;

        case "inprogress":
            return `
        <span class="badge bg-warning text-dark">
          In Progress
        </span>
      `;

        case "expired":
            return `
        <span class="badge bg-danger">
          Expired
        </span>
      `;

        default:
            return "";
    }
}

function getProgress(status) {
    switch (status) {

        case "completed":
            return 100;

        case "inprogress":
            return 50;

        case "expired":
            return 0;

        default:
            return 0;
    }
}

export function myCourseCard(course) {

    const progress = getProgress(course.status);

    return `
    <div class="col-lg-4 col-md-6">

      <div class="card course-card h-100 border-0 shadow-sm">

        <img 
          src="${course.image}" 
          class="card-img-top course-image"
        >

        <div class="card-body">

            <!-- Top -->
            <div class="d-flex justify-content-between mb-2">

                <small 
                class="text-muted d-flex align-items-center gap-1"
                >
                <img 
                    src="../assets/icons/type_couse.png" 
                    class="type-icon"
                >

                ${course.type}
                </small>

                ${getStatusBadge(course.status)}

            </div>

            <!-- Title -->
            <h6 class="fw text-truncate">${course.title}</h6>

          

            <!-- Footer (with divider) -->
            <div class="course-footer">

            <!-- Progress  -->
            <div class="d-flex align-items-center gap-2 mb-2">

                <div class="progress progress-course flex-grow-1">
                    <div 
                        class="progress-bar"
                        style="width:${progress}%"
                    ></div>
                </div>

                <small class="text-muted" style="min-width:40px; text-align:right;">
                    ${progress}%
                </small>

            </div>
            
            <!-- Start / End -->
            <div class="d-flex justify-content-between text-center mt-2">

                <div>
                    <small class="text-muted d-block">Start</small>
                    <small>${course.startDate}</small>
                </div>

                <div>
                    <small class="text-muted d-block">End</small>
                    <small>${course.endDate}</small>
                </div>

            </div>
            </div>
            

        </div>

      </div>

    </div>
  `;
}