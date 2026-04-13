import ArticleSection from "../ArticleSection.vue";
import { expect } from "storybook/test";

const mockItems = [
  {
    yoast_head_json: {
      og_image: [
        {
          url: "",
          src: ""
        }
      ],
      og_description: ""
    },
    title: {
      rendered: "Burke Has New Essay, Published in &lt;em>Panorama&lt;/em>"
    },
    ['post-meta-fields']: {
      primary_category: "",
      summary: [
        "Michael Burke, professor of English and creative writing, emeritus, has a new essay that appeared in <em>Panorama: The J..."
      ]
    },
    guid: {
      rendered: "https://panoramajournal.org/issues/issue-17-reflections/reflections-weapon-station/"
    }
  },
  {
    yoast_head_json: {
      og_image: [
        {
          url: "",
          src: ""
        }
      ],
      og_description: ""
    },
    title: {
      rendered: "Funahashi and Martínez Visit Music Conservatories in Italy"
    },
    ['post-meta-fields']: {
      primary_category: "",
      summary: [
        "In March, pianist and Associate Professor of Music Yuri &#8220;Lily&#8221; Funahashi and composer, percussionist, and As..."
      ]
    },
    guid: {
      rendered: "https://www.conservatoriovenezia.eu/blog/eventi/masterclass/lecture-j-martinez/"
    }
  },
  {
    yoast_head_json: {
      og_image: [
        {
          url: "",
          src: ""
        }
      ],
      og_description: ""
    },
    title: {
      rendered: "Falantin and Firkusny &#8217;25 Coauthor Article in &lt;em>The French Review&lt;/em>"
    },
    ['post-meta-fields']: {
      primary_category: "",
      summary: [
        "Assistant Professor of French Studies Flavien Falantin and Alex Firkusny &#8217;25 have coauthored a journal article rec..."
      ]
    },
    guid: {
      rendered: "https://muse.jhu.edu/pub/1/article/984103/pdf"
    }
  },
  {
    yoast_head_json: {
      og_image: [
        {
          url: "",
          src: ""
        }
      ],
      og_description: ""
    },
    title: {
      rendered: "Braunstein&#8217;s Upcoming Book Received Starred Review from Kirkus"
    },
    ['post-meta-fields']: {
      primary_category: "",
      summary: [
        "An upcoming book of short stories by Sarah Braunstein, associate professor of creative writing, received a starred revie..."
      ]
    },
    guid: {
      rendered: "https://www.kirkusreviews.com/book-reviews/sarah-braunstein/baby-in-a-box/"
    }
  },
  {
    yoast_head_json: {
      og_image: [
        {
          url: "",
          src: ""
        }
      ],
      og_description: ""
    },
    title: {
      rendered: "Plesch&#8217;s Contributes to the Spring 2026 &lt;em>Maine Arts Journal&lt;/em>"
    },
    ['post-meta-fields']: {
      primary_category: "",
      summary: [
        "James M. Gillespie Professor of Art Véronique Plesch edited the spring issue of <em>Maine Arts Journal</em>. As usual, s..."
      ]
    },
    guid: {
      rendered: "https://maineartsjournal.com/veronique-plesch-introduction-spring-2026-the-shape-of-time/"
    }
  }
];



// The default export metadata for your component
export default {
  title: "Blocks/Article Section",
  component: ArticleSection,
  tags: ["!autodocs"],
};

export const Primary = {
  name: "Article Section",
  args: {
    render_api: false,
    perView: 2,
    initial_items: mockItems,
    heading: "News",
    paragraph: "Get updates from the department",
    hydrated_from_server: false,
    display_posts_method: 'internal',
    carousel: true
  },
};
