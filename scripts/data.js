// ========================================
// SITE DATA - แก้ไขข้อมูลได้ที่นี่
// ========================================

const DATA = {
    // ข้อมูลเว็บไซต์
    site: {
        companyName: "Toyo Seikan (Thailand) Co.,Ltd.",
        heroTitle: "E-Learning",
        heroSubtitle: "ระบบเรียนรู้ออนไลน์",
        footer: "สงวนลิขสิทธิ์ © 2021 Toyo Seikan (Thailand) Co., Ltd."
    },

    // ข้อมูลผู้ใช้
    user: {
        name: "Username",
        position: "Position",
        avatar: "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff&size=40"
    },

    // เมนูนำทาง
    navItems: [
        { label: "หน้าแรก", href: "../pages/index.html", icon: "bi-house-door-fill", isHome: true },
        { label: "หลักสูตร", href: "../course-online.html" },
        { label: "ข่าวประชาสัมพันธ์", href: "../pages/news.html" },
        { label: "คำถามที่พบบ่อย", href: "../pages/faq.html" },
        { label: "วิธีการใช้งาน", href: "../pages/how-to-use.html" },
        { label: "ติดต่อเรา", href: "../pages/contact.html" }
    ],

    // ลิงก์ Footer
    contactLinks: [
        { label: "หน้าแรก", href: "../pages/index.html" },
        { label: "เกี่ยวกับเรา", href: "#" },
        { label: "ผลิตภัณฑ์ของเรา", href: "#" },
        { label: "รายงานกับเรา", href: "#" },
        { label: "ติดต่อเรา", href: "../pages/contact.html#contact" }
    ],

    // ข้อมูลติดต่อ
    contact: {
        title: "ติดต่อเรา",
        office: "สำนักงานใหญ่",
        address: [
            "95 หมู่ 3, สวนอุตสาหกรรมโรจนะ 2,",
            "ตำบล บ้านช้าง, อำเภอ อุทัย,",
            "จังหวัด พระนครศรีอยุธยา 13210 ประเทศไทย"
        ],
        tel: "+66-35-746-655",
        email: "info@toyoseikan.co.th",
        mapsrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.687!2d100.6737323!3d14.3230979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d8966aaaaaaab%3A0x84604855c1631415!2sToyo%20Seikan%20(Thailand)%20Co.,%20Ltd.!5e0!3m2!1sth!2sth!4v1700000000000!5m2!1sth!2sth"
    }
};