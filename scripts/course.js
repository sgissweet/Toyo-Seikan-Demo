const courses = [
    {
        title: "หลักสูตรการนำเสนออย่างมืออาชีพ",
        duration: "1 ชม. 30 นาที",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        link: "course-detail.html"
    },
    {
        title: "หลักสูตรการเขียนโปรแกรมเบื้องต้น",
        duration: "2 ชม.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        link: "course-detail.html"
    },
    {
        title: "หลักสูตร UI/UX Design",
        duration: "3 ชม.",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        link: "course-detail.html"
    }
];

const course_container = document.getElementById("tab-content");

courses.forEach(course => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
        <div class="card shadow-sm">
            <img src="${course.image}" class="rounded img-fluid" style="height: 300px; object-fit: cover;">
            
            <div class="card-body pb-0">
                <div class="badge-custom mb-1 d-flex gap-2">
                    <img src="../assets/icons/play.svg"/>
                    ประเภทหลักสูตร
                </div>

                <h4 class="card-title">${course.title}</h4>
            </div>
            
            <div class="border-top border-dark border-2"></div>

            <div class="d-flex justify-content-between align-items-center px-3 py-2">
                <small class="text-muted d-flex gap-2">
                    <img src="../assets/icons/clock.svg"/>
                    ${course.duration}
                </small>

                <button class="btn btn-primary btn-sm px-4 go-page" data-url="${course.link}">
                    เข้าเรียน
                </button>
            </div>
        </div>
    `;

    course_container.appendChild(col);
});


document.addEventListener("click", function(e) {
    if (e.target.classList.contains("go-page")) {
        const url = e.target.getAttribute("data-url");
        window.location.href = url;
    }
});