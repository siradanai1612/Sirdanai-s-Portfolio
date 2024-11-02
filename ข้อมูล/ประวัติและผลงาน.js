// ลงทะเบียนปลั๊กอิน GSAP สำหรับ ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation for sections
const sections = gsap.utils.toArray(".scrollElement");
sections.forEach((section) => {
    gsap.from(section, {
        y: 20,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
            onEnter: () => {
                section.style.visibility = "visible";
            }
        }
    });
});

// รีเซ็ตตำแหน่งสกอลล์บาร์หลังจากรีเฟรช
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}
