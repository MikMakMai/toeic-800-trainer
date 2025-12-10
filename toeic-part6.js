// Part 6 段落填空示例
const PART6_SETS = [
  {
    id: "6-001",
    part: 6,
    title: "Internal e-mail about meeting",
    passage:
"To: All staff\nSubject: Weekly Meeting\n\nStarting next week, our weekly meeting will move from Monday to Wednesday.\n(1) _____. This change should give everyone more time to prepare reports after the weekend.\n\nIf you have any questions, please contact the HR office.",
    questions: [
      {
        id: "6-001-1",
        question: "What best completes (1)?",
        options: {
          A: "The meeting will be canceled completely.",
          B: "The starting time will remain at 9:00 a.m.",
          C: "All employees are asked to arrive late.",
          D: "The meeting will be held online only."
        },
        answer: "B",
        explanation: "结合上下文，改的是星期几而不是取消会议或改为线上，所以最自然是说明时间不变。"
      },
      {
        id: "6-001-2",
        question: "Why is the schedule changing?",
        options: {
          A: "To make meetings shorter.",
          B: "To avoid public holidays.",
          C: "To allow more time for preparing reports.",
          D: "To reduce the number of meetings."
        },
        answer: "C",
        explanation: "文中句子：give everyone more time to prepare reports。"
      }
    ]
  },
  {
    id: "6-002",
    part: 6,
    title: "Notice about office renovation",
    passage:
"Notice:\nThe third floor will be under renovation for two weeks starting May 3.\n(1) _____. During this time, please use the temporary workspace on the second floor.\n\nWe apologize for the inconvenience and appreciate your cooperation.",
    questions: [
      {
        id: "6-002-1",
        question: "What best completes (1)?",
        options: {
          A: "Employees may continue to use the third floor as usual.",
          B: "The elevator will not stop on the third floor.",
          C: "All meetings will be held outside the building.",
          D: "No one is allowed to enter the second floor."
        },
        answer: "B",
        explanation: "施工期间，电梯不停该楼层最合理；同时下文提到使用二层临时空间。"
      },
      {
        id: "6-002-2",
        question: "What are employees asked to do?",
        options: {
          A: "Work from home for two weeks.",
          B: "Move to the temporary workspace.",
          C: "Cancel all scheduled meetings.",
          D: "Use the stairs instead of the elevator."
        },
        answer: "B",
        explanation: "文中明确说 please use the temporary workspace on the second floor。"
      }
    ]
  }
];
