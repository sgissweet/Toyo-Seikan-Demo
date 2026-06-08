export function formatDuration(minutes) {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;

    if (hrs && mins) return `${hrs} ชม. ${mins} นาที`;
    if (hrs) return `${hrs} ชม.`;
    return `${mins} นาที`;
}

export function createCourseCard(course, options = {}) {
    const { showButton = false } = options;

    return `
        <div class="col-md-4">
            <a href="../pages/Coursecontent.html" class="course-card-link">
                <div class="card course-card mb-4">
                    <img src="${course.image}" class="card-img-top">
                    <div class="card-body">
                        <small class="text-muted d-flex align-items-center">
                            <img src="../assets/icons/type_couse.png" class="type-icon">
                            ${course.type}
                        </small>
                        <h6 class="fw text-truncate">${course.title}</h6>

                        <!-- Footer (with divider) -->
                        <div class="course-footer">
                            <small class="text-muted d-flex align-items-center">
                                <img src="../assets/icons/time.png" class="type-icon">
                                ${formatDuration(course.duration)}
                                ${
                                    showButton
                                    ? `
                                        <button class="btn btn-primary btn-sm px-3 ms-auto">
                                            เข้าเรียน
                                        </button>
                                    `
                                    : ""
                                }
                            </small>
                        </div>

            
                    </div>
                </div>
            </a>
        </div>
    `;
}