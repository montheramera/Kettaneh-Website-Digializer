import { LocalizedStepsData } from "../types";

export const stepsData: LocalizedStepsData = {
  ar: {
    title: "اشتري مكيف مايديا الجداري",
    subtitle: "وادخل السحب لفرصة ربح الجوائز",
    stepsTitle: "خطوات دخول السحب",
    steps: [
      {
        icon: "shopping-cart",
        title: "اشتري مكيف مايديا",
      },
      {
        icon: "qr-code",
        title: "امسح رمز QR",
      },
      {
        icon: "camera-phone",
        title: "افتح الكاميرا صور الباركود",
      },
      {
        icon: "router-device",
        title: "صور جهازك راكب عالحيط من جهة الباركود",
      },
      {
        icon: "form-document",
        title: "إملأ النموذج",
      },
      {
        icon: "network-send",
        title: "احفظ ارسال لقد دخلت السحب",
      },
    ],
    timelineTitle: "فائزون كتانه",
    timeline: [
      {
        period: "الأسبوع 1",
        date: "11/06/2025",
        listItems: [
          { rank: 1, title: "الاسم الأول", subtitle: "تفاصيل إضافية" },
          { rank: 2, title: "الاسم الثاني", subtitle: "تفاصيل إضافية" },
          { rank: 3, title: "الاسم الثالث", subtitle: "تفاصيل إضافية" },
          // ... more items
        ],
      },
      { period: "الأسبوع 2", date: "11/07/2025" },
      {
        period: "الأسبوع 3",
        date: "11/08/2025",
        listItems: [
          { rank: 1, title: "الاسم الأول", subtitle: "تفاصيل إضافية" },
          { rank: 2, title: "الاسم الثاني", subtitle: "تفاصيل إضافية" },
          { rank: 3, title: "الاسم الثالث", subtitle: "تفاصيل إضافية" },
          // ... more items
        ],
      },
      { period: "الأسبوع 4", date: "11/09/2025" },
      { period: "الأسبوع 5", date: "11/10/2025" },
      { period: "الأسبوع 6", date: "11/11/2025" },
      { period: "الأسبوع 7", date: "31/12/2025" },
    ],
  },
  en: {
    title: "Buy Midea Wall-Mounted Air Conditioner",
    subtitle: "And Enter the Draw for a Chance to Win Prizes",
    stepsTitle: "Draw Entry Steps",
    steps: [
      {
        icon: "shopping-cart",
        title: "Buy Midea AC",
      },
      {
        icon: "qr-code",
        title: "Scan QR Code",
      },
      {
        icon: "camera-phone",
        title: "Open Camera Scan Barcode",
      },
      {
        icon: "router-device",
        title: "Photo Device Mounted on Wall",
      },
      {
        icon: "form-document",
        title: "Fill Form",
      },
      {
        icon: "network-send",
        title: "Save Send You Entered Draw",
      },
    ],
    timelineTitle: "Prize Calendar",
    timeline: [
      { period: "Week 1", date: "06/11/2025" },
      { period: "Week 2", date: "07/11/2025" },
      { period: "Week 3", date: "08/11/2025" },
      { period: "Week 4", date: "09/11/2025" },
      { period: "Week 5", date: "10/11/2025" },
      { period: "Week 6", date: "11/11/2025" },
      { period: "Week 7", date: "12/31/2025" },
    ],
  },
};
