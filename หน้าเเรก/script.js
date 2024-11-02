/// ลงทะเบียนปลั๊กอิน GSAP สำหรับ ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation for sections
const sections = gsap.utils.toArray("section");
sections.forEach((section) => {
    gsap.from(section, {
        y: 50, // เคลื่อนที่ขึ้น
        opacity: 0, // เริ่มต้นด้วยความโปร่งใส 0
        duration: 1, // ระยะเวลา 1 วินาที
        scrollTrigger: {
            trigger: section,
            start: "top 80%", // เริ่มต้นที่ส่วน 80% ของหน้าจอ
            toggleActions: "play none none reverse", // เล่นอนิเมชั่นเมื่อเลื่อนเข้ามา
            onEnter: () => {
                section.style.visibility = "visible"; // แสดง section
            }
        }
    });
});

// รีเซ็ตตำแหน่งสกอลล์บาร์หลังจากรีเฟรช
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

// อนิเมชั่นสำหรับข้อความทักทาย
document.addEventListener("DOMContentLoaded", function() {
    const intro = document.getElementById("intro");
    intro.style.opacity = "0"; // เริ่มต้นด้วยความโปร่งใส 0

    // แสดงข้อความทักทายด้วยอนิเมชั่น
    setTimeout(() => {
        intro.style.transition = "opacity 1s ease";
        intro.style.opacity = "1"; // ทำให้ความโปร่งใสเป็น 1

        // เพิ่มการอนิเมชั่นด้วย GSAP เมื่อข้อความทักทายแสดง
        gsap.from(intro, {
            duration: 1,
            y: -20,
            opacity: 0,
            ease: "power2.out"
        });
    }, 500); // หน่วงเวลา 500ms
});
