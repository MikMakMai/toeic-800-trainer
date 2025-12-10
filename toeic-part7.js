// Part 7 阅读理解示例
const PART7_SETS = [
  {
    id: "7-001",
    part: 7,
    title: "E-mail from a supplier",
    passage:
"Dear Ms. Lee,\n\nThank you for your order of 50 office chairs. We expect to ship your order by June 12.\nDelivery usually takes three to five business days, depending on your location.\n\nIf you need to change the delivery address, please contact us before June 10.\n\nBest regards,\nKato Furniture",
    questions: [
      {
        id: "7-001-1",
        question: "When will the chairs most likely ARRIVE?",
        options: {
          A: "On the same day they are shipped.",
          B: "Within three to five business days after June 12.",
          C: "Exactly five days after June 10.",
          D: "Anytime before June 10."
        },
        answer: "B",
        explanation: "ship by June 12 + delivery takes 3–5 business days ⇒ 6月12日之后的3–5个工作日内。"
      },
      {
        id: "7-001-2",
        question: "What is Ms. Lee asked to do by June 10?",
        options: {
          A: "Confirm the payment.",
          B: "Change the product quantity.",
          C: "Notify the company if the delivery address is different.",
          D: "Cancel the order if necessary."
        },
        answer: "C",
        explanation: "If you need to change the delivery address, ... before June 10。"
      }
    ]
  },
  {
    id: "7-002",
    part: 7,
    title: "Website announcement",
    passage:
"Company Announcement:\n\nWe are launching a new online support chat service on our website starting August 1.\nCustomers will be able to talk with a support agent in real time between 9:00 a.m. and 6:00 p.m., Monday through Friday.\n\nOutside of these hours, customers can still send us an e-mail, and we will reply within one business day.",
    questions: [
      {
        id: "7-002-1",
        question: "When can customers use the live chat?",
        options: {
          A: "Only on weekends",
          B: "Every day, 24 hours",
          C: "Weekdays from 9:00 a.m. to 6:00 p.m.",
          D: "Only before August 1"
        },
        answer: "C",
        explanation: "文中明确 Monday through Friday, 9:00 a.m.–6:00 p.m."
      },
      {
        id: "7-002-2",
        question: "What can customers do OUTSIDE the live chat hours?",
        options: {
          A: "Visit the office in person.",
          B: "Call a special phone line.",
          C: "Send an e-mail and receive a reply later.",
          D: "Chat with an agent in another country."
        },
        answer: "C",
        explanation: "Outside of these hours, customers can still send us an e-mail, and we will reply within one business day。"
      }
    ]
  }
];
