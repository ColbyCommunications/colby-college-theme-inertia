/**
 * Shared mock data factories for Storybook tests.
 * Used by components that fetch from external APIs (news.colby.edu, events.colby.edu).
 */

// --- WordPress REST API Post ---

export function createMockWpPost(overrides = {}) {
  return {
    id: 1,
    date: "2024-06-15T10:00:00",
    title: { rendered: "Test Post Title" },
    excerpt: {
      rendered:
        "<p>A brief excerpt describing the post content for testing purposes.</p>",
    },
    content: {
      rendered: "<p>Full content of the test post for display.</p>",
    },
    link: "https://news.colby.edu/story/test-post/",
    featured_img: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg',
    guid: { rendered: "https://news.colby.edu/?p=1" },
    acf_blocks: [],
    yoast_head_json: {
      og_image: [{ url: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg' }],
      og_description: "OG description for test post",
    },
    "post-meta-fields": {
      primary_category: "Academics",
      summary: ["A summary of the test post for display purposes."],
    },
    _embedded: {
      "wp:featuredmedia": [
        {
          media_details: {
            sizes: {
              Rectangle: { source_url: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg' },
              Rectangle_mobile: { source_url: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg' },
            },
          },
          alt_text: "Featured image alt text",
        },
      ],
      "wp:term": [[{ name: "Academics" }]],
    },
    ...overrides,
  };
}

export function createMockWpPosts(count = 3) {
  const categories = ["Academics", "Arts", "Alumni", "Athletics", "Science"];
  const titles = [
    "Innovative Research in Marine Biology",
    "New Gallery Exhibition Opens This Fall",
    "Alumni Weekend Celebrates Milestones",
    "Student Athletes Break Records",
    "Faculty Receives National Science Award",
  ];
  const summaries = [
    "Students and faculty collaborate on groundbreaking marine research.",
    "The museum presents a bold new collection of contemporary works.",
    "Hundreds of alumni return for a weekend of celebration and reconnection.",
    "Colby athletes achieve new personal bests at the regional championship.",
    "Professor recognized for contributions to environmental science.",
  ];

  return Array.from({ length: count }, (_, i) =>
    createMockWpPost({
      id: i + 1,
      date: `2024-0${(i % 9) + 1}-${String(15 + i).padStart(2, "0")}T10:00:00`,
      title: { rendered: titles[i % titles.length] },
      excerpt: {
        rendered: `<p>${summaries[i % summaries.length]}</p>`,
      },
      guid: { rendered: `https://news.colby.edu/?p=${i + 1}` },
      featured_img: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg',
      "post-meta-fields": {
        primary_category: categories[i % categories.length],
        summary: [summaries[i % summaries.length]],
      },
      yoast_head_json: {
        og_image: [{ url: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg' }],
        og_description: summaries[i % summaries.length],
      },
    }),
  );
}

// --- Colby Events API ---

export function createMockEvent(overrides = {}) {
  return {
    date: "January 15, 2025",
    title: "Mock Event Title",
    date_time: "3:00 PM - 5:00 PM",
    url: "https://events.colby.edu/event/mock-event",
    date_utc: "2025-01-15",
    ...overrides,
  };
}

export function createMockEvents(count = 3) {
  const events = [
    {
      title: "Spring Concert Series",
      date: "January 15, 2025",
      date_time: "7:00 PM",
    },
    {
      title: "Faculty Lecture: Climate Change",
      date: "January 22, 2025",
      date_time: "4:00 PM",
    },
    {
      title: "Museum Exhibition Opening",
      date: "February 1, 2025",
      date_time: "5:30 PM",
    },
    {
      title: "Student Art Showcase",
      date: "February 10, 2025",
      date_time: "6:00 PM",
    },
    {
      title: "Alumni Networking Reception",
      date: "February 20, 2025",
      date_time: "3:00 PM",
    },
    {
      title: "Poetry Reading Night",
      date: "March 5, 2025",
      date_time: "7:30 PM",
    },
  ];

  return Array.from({ length: count }, (_, i) =>
    createMockEvent({
      title: events[i % events.length].title,
      date: events[i % events.length].date,
      date_time: events[i % events.length].date_time,
      url: `https://events.colby.edu/event/mock-event-${i + 1}`,
    }),
  );
}

// --- External News API (used by ArticleGrid "api" mode) ---

export function createMockExternalPost(overrides = {}) {
  return {
    title: { rendered: "External Article Title" },
    content: {
      rendered:
        "<p>Professor Smith's groundbreaking research on renewable energy has been featured in a national publication highlighting academic innovation.</p>",
    },
    external_url: "https://example.com/article",
    image: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg',
    story_type: [{ slug: "media-coverage" }],
    tags: [{ name: "editors-pick" }],
    taxonomy: [{ name: "News" }],
    ...overrides,
  };
}

export function createMockExternalPosts(count = 3) {
  const titles = [
    "Colby Research Featured in National Press",
    "Student Startup Wins Innovation Award",
    "Professor Honored for Climate Work",
  ];
  const contents = [
    "<p>Groundbreaking research from Colby College has garnered attention in a major national publication for its innovative approach.</p>",
    "<p>A student-led startup from Colby's entrepreneurship program has won a prestigious innovation award at a national conference.</p>",
    "<p>A Colby professor has been recognized nationally for outstanding contributions to climate science and environmental policy.</p>",
  ];

  return Array.from({ length: count }, (_, i) =>
    createMockExternalPost({
      title: { rendered: titles[i % titles.length] },
      content: { rendered: contents[i % contents.length] },
      external_url: `https://example.com/article-${i + 1}`,
      image: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg',
    }),
  );
}

// --- Table API Data ---

export function createMockTableCourses(count = 30) {
  const specials = [
    {
      dept: "BIOL",
      longTitle: "Cell Biology",
      secTitle: "",
      sessOffered: "FA,SP",
      crsno: "BI101",
      abstr: "<p>Introduction to cellular systems.</p>",
      prereq: "",
      area: "S",
      labsci: "L",
      writing: "W1",
      diversity: "US",
      minhrs: 1,
      maxhrs: 1,
      sections: [
        {
          faculty: [
            { faculty_name: "Smith, Jane" },
            { faculty_name: "Smith, Jane" },
            { faculty_name: "Jones, Alex" },
          ],
        },
      ],
    },
    {
      dept: "BIOL",
      longTitle: "Marine Ecology",
      secTitle: "Marine Ecology Seminar",
      sessOffered: "SP",
      crsno: "BI210",
      abstr: "<p>Field methods in marine science.</p>",
      prereq: "BI101",
      area: "S",
      labsci: "D",
      writing: "W2",
      diversity: "",
      minhrs: 1,
      maxhrs: 2,
      sections: [{ faculty: [{ faculty_name: "Parker, Sam" }] }],
    },
    {
      dept: "CHEM",
      longTitle: "Organic Chemistry",
      secTitle: "See Chemistry",
      sessOffered: "FA",
      crsno: "CH222",
      abstr: "<p>Organic structures and reactions.</p>",
      prereq: "CH141",
      area: "N",
      labsci: "",
      writing: "",
      diversity: "EU",
      minhrs: 1,
      maxhrs: 3,
      sections: [{ faculty: [{ faculty_name: "Taylor, Pat" }] }],
    },
    {
      dept: "MUSI",
      longTitle: "Performance Lab",
      secTitle: "",
      sessOffered: "JP",
      crsno: "MU193",
      abstr: "<p>Applied performance practice.</p>",
      prereq: "",
      area: "A",
      labsci: "",
      writing: "",
      diversity: "",
      minhrs: 1,
      maxhrs: 1,
      sections: [{ faculty: [{ faculty_name: "Lee, Max" }] }],
    },
    {
      dept: "ENGL",
      longTitle: "Creative Writing Workshop",
      secTitle: "",
      sessOffered: "SP",
      crsno: "EN225",
      abstr: "<p>Advanced writing workshop.</p>",
      prereq: "EN120",
      area: "H",
      labsci: "",
      writing: "W3",
      diversity: "",
      minhrs: 0,
      maxhrs: 0,
      sections: [{ faculty: [{ faculty_name: "Adams, Ruth" }] }],
    },
    {
      dept: "INTD",
      longTitle: "Interdisciplinary Inquiry",
      secTitle: "",
      sessOffered: "FA,JP",
      crsno: "IS199",
      abstr: "<p>Cross-disciplinary approaches.</p>",
      prereq: "",
      area: "",
      labsci: "",
      writing: "",
      diversity: "",
      minhrs: 3,
      maxhrs: 1,
      sections: [{ faculty: [{ faculty_name: "Nguyen, Kim" }] }],
    },
    {
      dept: "STAT",
      longTitle: "Applied Statistics",
      secTitle: "",
      sessOffered: "SU",
      crsno: "ST217",
      abstr: "<p>Probability and data modeling.</p>",
      prereq: "MATH125",
      area: "",
      labsci: "",
      writing: "",
      diversity: "",
      minhrs: 2,
      maxhrs: 3,
      sections: [{ faculty: [{ faculty_name: "Perez, Dana" }] }],
    },
  ];

  const departments = [
    "AFAM",
    "AMER",
    "ANTH",
    "ART",
    "BIOL",
    "CHEM",
    "COMP",
    "EAST",
    "ECON",
    "EDUC",
    "ENGL",
    "ENVS",
    "FRIT",
    "GEOL",
    "GLST",
    "GMRU",
    "GOVT",
    "HIST",
    "INTD",
    "LTAM",
    "MATH",
    "MUSI",
    "PHIL",
    "PHYS",
    "PSYC",
    "RELG",
    "SCIT",
    "SOCY",
    "SPAN",
    "STAT",
    "THEA",
    "WGST",
    "WRTG",
  ];
  const sessions = ["FA,SP", "SP", "JP", "FA", "SP,JP", "SU"];

  const generated = Array.from(
    { length: Math.max(0, count - specials.length) },
    (_, i) => {
      const dept = departments[i % departments.length];
      const sessOffered = sessions[i % sessions.length];
      return {
        dept,
        longTitle: `${dept} Topics ${i + 1}`,
        secTitle: i % 3 === 0 ? `${dept} Seminar ${i + 1}` : "",
        sessOffered,
        crsno: `${dept.slice(0, 2)}${100 + i}`,
        abstr: i % 4 === 0 ? "<p>Course <strong>overview</strong>.</p>" : "",
        prereq: i % 5 === 0 ? `${dept.slice(0, 2)}100` : "",
        area: i % 2 === 0 ? "S" : "",
        labsci: i % 3 === 0 ? "L" : "",
        writing: i % 4 === 0 ? "W1" : "",
        diversity: i % 6 === 0 ? "US" : "",
        minhrs: 1,
        maxhrs: i % 7 === 0 ? 2 : 1,
        sections: [
          {
            faculty:
              i % 2 === 0
                ? [{ faculty_name: `Faculty${i}, Test` }]
                : [],
          },
        ],
      };
    },
  );

  return [...specials, ...generated];
}

export function createMockMajorsMinorsPrograms() {
  const deptLabels = [
    ["AFAM", "African American Studies"],
    ["AMER", "American Studies"],
    ["ANTH", "Anthropology"],
    ["ART", "Art"],
    ["BIOL", "Biology"],
    ["CHEM", "Chemistry"],
    ["CLAS", "Classics"],
    ["COMP", "Computer Science"],
    ["EAST", "East Asian Studies"],
    ["ECON", "Economics"],
    ["EDUC", "Education"],
    ["ENGL", "English"],
    ["ENVS", "Environmental Studies"],
    ["FRIT", "French and Italian"],
    ["GEOL", "Geology"],
    ["GLST", "Global Studies"],
    ["GMRU", "German and Russian"],
    ["GOVT", "Government"],
    ["HIST", "History"],
    ["LTAM", "Latin American Studies"],
    ["MATH", "Mathematics"],
    ["MUSI", "Music"],
    ["PHIL", "Philosophy"],
    ["PHYS", "Physics and Astronomy"],
    ["PSYC", "Psychology"],
    ["RELG", "Religious Studies"],
    ["SCIT", "Science, Technology, and Society"],
    ["SOCY", "Sociology"],
    ["SPAN", "Spanish"],
    ["STAT", "Statistics"],
    ["THEA", "Performance, Theater, and Dance"],
    ["WGST", "Women's, Gender, and Sexuality Studies"],
    ["WRTG", "Writing Department"],
  ];

  const mapped = deptLabels.flatMap(([Dept, Text]) => [
    { Dept, Text, Type: "Major" },
    { Dept, Text, Type: "Minor" },
  ]);

  return [
    ...mapped,
    { Dept: "INTD", Text: "Jewish Studies", Type: "Major" },
    { Dept: "INTD", Text: "Cinema Studies", Type: "Minor" },
    { Dept: "INTD", Text: "Interdisciplinary Track", Type: "Minor" },
    { Dept: "XXXX", Text: "Unmapped Program", Type: "Major" },
  ];
}
