// curriculumTemplate.js

export const curriculum = {
  "Grade 3": {
    "ELA": {
      "Module 1": {
        "Unit 1": [
          {
            id: "g3-ela-m1-u1-l1",
            title: "Lesson 1: Sample Title",
            date: "2025-09-01",
            standards: ["RL.3.1", "W.3.2"],
            description: "Brief summary of what this lesson covers.",
            objectives: [
              "Students will be able to ...",
              "Students will understand ..."
            ],
            resources: [
              { type: "Handout", name: "Student Worksheet", link: "https://drive.google.com/..." },
              { type: "Slide Deck", name: "Lesson Slides", link: "https://drive.google.com/..." }
            ],
            materials: [
              "Pencils", "Notebooks"
            ],
            prepNotes: "Any special teacher notes for prep, differentiation, etc.",
            familyLetter: { name: "Family Letter", link: "https://drive.google.com/..." }
          }
        ],
        "Unit 2": [
          // ...lessons for Unit 2
        ]
      }
      // ...additional modules
    }
    // ...additional subjects
  },

  "Grade 6": {
    "ELA": {
      "Module 1": {
        "Unit 1": [
          {
            id: "g6-ela-m1-u1-l1",
            title: "Lesson 1: What is the Module About?",
            date: "2025-09-01",
            standards: ["RL.6.1", "RL.6.2"],
            description: "Students are introduced to the module topic and guiding questions. They begin building background knowledge on myths and the hero’s journey.",
            objectives: [
              "Introduce module guiding questions.",
              "Build background on Greek myths."
            ],
            resources: [
              { type: "Handout", name: "Module Guiding Questions", link: "https://drive.google.com/..." }
            ],
            materials: [
              "The Lightning Thief book",
              "Student journals"
            ],
            prepNotes: "",
            familyLetter: { name: "Family Letter", link: "https://drive.google.com/..." }
          }
        ],
        "Unit 2": [
          // ...lessons for Unit 2
        ]
      }
      // ...additional modules
    }
  }
  // ...more grades as needed
};