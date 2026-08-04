import PageShow from "../../pages/Page/Show.vue";
import PageWithSidebar from "../../pages/PageWithSidebar/Show.vue";

const siteData = {
    url: "https://www.colby.edu",
    address: {
      text: "4000 Mayflower Hill<br>Waterville, ME 04901",
    },
    phone: "207-859-4000",
    alert: null,
    utility_menu_style: 'colby.edu',
    utility_button_text: '',
    utility_button_url: ''

};
  
  const menus = {
    utility: [
      { title: "Directory", url: "#" },
      { title: "Libraries", url: "#" },
      { title: "Resources", url: "#" },
      { title: "Colby Arts", url: "#" },
      { title: "Visit", url: "#" },
    ],
    main: [
      { title: "Admissions", url: "#" },
      { title: "Academics", url: "#" },
      { title: "People", url: "#" },
      { title: "Student Life", url: "#" },
      { title: "Athletics and Recreation", url: "#" },
      { title: "Alumni and Families", url: "#" },
      { title: "News", url: "#" },
      { title: "Events", url: "#" },
    ],
    footer: [
      { title: "Academics", url: "#" },
      { title: "Campus Life", url: "#" },
    ],
    action: [{ title: "Contact Colby", url: "#" }],
    social: [{ title: "Instagram", url: "#", icon: "instagram" }],
  };

const heroImage = {
    url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
    alt: "Students on campus",
    sizes: {
      Rectangle: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
    }
};

export default {
    title: "Templates/Centers, Labs, and Institutes",
    component: PageWithSidebar,
    tags: ["!autodocs"],
};
  
export const Labs = {
    name: "Labs",
    args: {
        title: "Colby Test Lab",
        siteData: {...siteData, breadcrumbs_menu: [
            {title: 'People', url: '#'},
            {title: 'Offices Directory', url: '#'},
            {title: 'Colby Test Lab', url: '#'},
        ]},
        menus,
        primary_category: 'foo',
        isPost: false,
        hero: { type: 'default', props: { 
            heading: 'Colby Test Lab', 
            subheading: 'We are on the cutting edge', 
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            image: heroImage,
            buttons: [{ button: {title: 'donate', url: '#'}}]
        }},
        sidebar: {nav: {heading: 'Colby Test Lab', parentPermalink: '#', items: [{ url: '#', title: 'Subpage 1'}, { url: '#', title: 'Subpage 2'}, { url: '#', title: 'Subpage 3'}]}},
        blocks: [
            {
                blockName: "acf/media-context",
                attrs: {
                    data: {
                        subheading: "Media Context",
                        heading: "Media Context Block",
                        paragraph: "Media Context integration marker paragraph.",
                        image: {
                            url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                            alt: "Students on campus",
                            sizes: {
                              Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                              Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            }
                        },
                    },
                },
            },
            {
                blockName: "acf/media-context",
                attrs: {
                    data: {
                        subheading: "Media Context",
                        heading: "Media Context Block",
                        paragraph: "Media Context integration marker paragraph.",
                        reverse: true,
                        image: {
                            url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                            alt: "Students on campus",
                            sizes: {
                              Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                              Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            }
                        },
                    },
                },
            },
            {
                blockName: "acf/hw-image-section",
                attrs: {
                    data: {
                        subheading: "Half-Width Image Section",
                        heading: "Half-Width Image Section Block",
                        paragraph: "Half-Width Image Section paragraph.",
                        size: 'small',
                        image: {
                            url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                            alt: "Students on campus",
                            sizes: {
                              Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                              Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            }
                        },
                    },
                },
            },
            {
                blockName: "core/heading",
                attrs: {
                    data: {
                        heading: "<h2>Our Mission</h2>",
                    }
                }
            },
            {
                blockName: "acf/paragraph",
                attrs: {
                    data: {
                        paragraph_text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                    }
                }
            },
            {
                blockName: "core/heading",
                attrs: {
                    data: {
                        heading: "<h2>Our Staff</h2>",
                    }
                }
            },
            {
                blockName: "acf/article-grid",
                attrs: {
                    data: {
                        display_posts_method: "manual",
                        columns: 4,
                        items: [
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "Jake Philips",
                              subheading: "Chief Technology Officer",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu",
                                  },
                                },
                              ],
                            },
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "Sally Williams",
                              subheading: "Chief Marketing Officer",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu/academics",
                                  },
                                },
                              ],
                            },
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "Mary Allen",
                              subheading: "Design",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu/news",
                                  },
                                },
                              ],
                            },
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "AJ Eaton",
                              subheading: "Social Media",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu/news",
                                  },
                                },
                              ],
                            },
                          ],
                          border: false,
                    },
                },
            },
            {
                blockName: "acf/accordion",
                attrs: {
                    data: {
                        panels: [{
                            heading: 'Accordion Block',
                            content: 'Some amazing content goes here.'
                        }]
                    }
                }
            },
            {
                blockName: "acf/list-block-grid",
                attrs: {
                    data: {
                        items: [
                            {
                                subheading: "List Block 1",
                                heading: "List Block 1",
                                paragraph: "Lorem ipsum",
                            },
                            {
                                subheading: "List Block 2",
                                heading: "List Block 2",
                                paragraph: "Lorem ipsum",
                            }
                        ],
                        columns: 2,
                    }
                }
            },
        ]
    },
};

export const Centers = {
    name: "Centers",
    args: {
        title: "Center for the Study of Things",
        siteData: {...siteData, breadcrumbs_menu: [
            {title: 'Center for the Study of Things', url: '#'},
        ]},
        menus,
        primary_category: 'foo',
        isPost: false,
        hero: { type: 'default', props: { 
            heading: 'Center for the Study of Things', 
            subheading: 'We are on the cutting edge', 
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            image: heroImage,
            buttons: [{ button: {title: 'donate', url: '#'}}]
        }},
        sidebar: {nav: {heading: 'Center for the Study of Things', parentPermalink: '#', items: [{ url: '#', title: 'Subpage 1'}, { url: '#', title: 'Subpage 2'}, { url: '#', title: 'Subpage 3'}]}},
        blocks: [
            {
                blockName: "acf/overlay-hero",
                attrs: {
                    data: {
                        subheading: "Overlay Hero Block",
                        heading: "Overlay Hero Block",
                        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        video_loop: 'https://www.colby.edu/wp-content/uploads/2025/04/oak_home_hero.mp4',
                        image: {
                            url: 'https://www.colby.edu/wp-content/uploads/2025/04/Untitled-61.jpeg',
                            alt: "Students on campus",
                            sizes: {
                              Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                              Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            }
                        },
                    },
                },
            },
            {
                blockName: "acf/media-context",
                attrs: {
                    data: {
                        subheading: "Media Context",
                        heading: "Media Context Block",
                        paragraph: "Media Context integration marker paragraph.",
                        reverse: true,
                        image: {
                            url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                            alt: "Students on campus",
                            sizes: {
                              Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                              Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            }
                        },
                    },
                },
            },
            {
                blockName: "acf/hw-image-section",
                attrs: {
                    data: {
                        subheading: "Half-Width Image Section",
                        heading: "Half-Width Image Section Block",
                        paragraph: "Half-Width Image Section paragraph.",
                        size: 'small',
                        image: {
                            url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                            alt: "Students on campus",
                            sizes: {
                              Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                              Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            }
                        },
                    },
                },
            },
            {
                blockName: "core/heading",
                attrs: {
                    data: {
                        heading: "<h2>Our Mission</h2>",
                    }
                }
            },
            {
                blockName: "acf/paragraph",
                attrs: {
                    data: {
                        paragraph_text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                    }
                }
            },
            {
                blockName: "acf/block-quote",
                attrs: {
                    data: {
                        quote: "Perferendis et iusto odio doloribus asperiores repellat.",
                    }
                }
            },
            {
                blockName: "acf/image-grid",
                attrs: {
                    data: {
                        image_orientation: 'rectangle',
                        images: [
                            {
                                caption: 'lorem ipsum dolor',
                                image: {
                                    url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                                    alt: "Students on campus",
                                    sizes: {
                                        Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                        Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                    }
                                }
                            },
                            {
                                caption: 'lorem ipsum dolor',
                                image: {
                                    url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                                    alt: "Students on campus",
                                    sizes: {
                                        Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                        Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                    }
                                }
                            },
                            {
                                image: {
                                    url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                                    alt: "Students on campus",
                                    sizes: {
                                        Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                        Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                    }
                                }
                            },
                            {
                                image: {
                                    url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                                    alt: "Students on campus",
                                    sizes: {
                                        Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                        Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                    }
                                }
                            },
                            {
                                caption: 'lorem ipsum dolor',
                                image: {
                                    url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                                    alt: "Students on campus",
                                    sizes: {
                                        Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                        Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                    }
                                }
                            }
                        ],
                    },
                },
            },
            {
                blockName: "core/heading",
                attrs: {
                    data: {
                        heading: "<h2>Our Staff</h2>",
                    }
                }
            },
            {
                blockName: "acf/article-grid",
                attrs: {
                    data: {
                        display_posts_method: "manual",
                        columns: 4,
                        items: [
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "Jake Philips",
                              subheading: "Chief Technology Officer",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu",
                                  },
                                },
                              ],
                            },
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "Sally Williams",
                              subheading: "Chief Marketing Officer",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu/academics",
                                  },
                                },
                              ],
                            },
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "Mary Allen",
                              subheading: "Design",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu/news",
                                  },
                                },
                              ],
                            },
                            {
                              image: {
                                src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                alt: "this is an alt tag",
                              },
                              heading: "AJ Eaton",
                              subheading: "Social Media",
                              paragraph: "",
                              url: "#",
                              buttons: [
                                {
                                  button: {
                                    title: "Read Bio",
                                    url: "https://www.colby.edu/news",
                                  },
                                },
                              ],
                            },
                          ],
                          border: false,
                    },
                },
            },
            {
                blockName: "acf/accordion",
                attrs: {
                    data: {
                        panels: [{
                            heading: 'Accordion Block',
                            content: 'Some amazing content goes here.'
                        }]
                    }
                }
            },
            {
                blockName: "acf/list-block-grid",
                attrs: {
                    data: {
                        items: [
                            {
                                subheading: "List Block 1",
                                heading: "List Block 1",
                                paragraph: "Lorem ipsum",
                            },
                            {
                                subheading: "List Block 2",
                                heading: "List Block 2",
                                paragraph: "Lorem ipsum",
                            }
                        ],
                        columns: 2,
                    }
                }
            },
        ]
    },
};

export const Institutes = {
  name: "Institutes",
  render: (args) => ({
    components: { PageShow },
    setup() {
      return { args };
    },
    template: '<PageShow v-bind="args" />',
  }),
  args: {
      title: "Colby Institute for Higher Ed",
      siteData: {...siteData, breadcrumbs_menu: [
      ]},
      menus,
      primary_category: 'foo',
      isPost: false,
      hero: { type: 'default', props: { 
          heading: 'Colby Institute for Higher Ed', 
          subheading: 'We are on the cutting edge', 
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
          image: heroImage,
          buttons: [{ button: {title: 'donate', url: '#'}}]
      }},
      sidebar: {nav: {heading: 'Center for the Study of Things', parentPermalink: '#', items: [{ url: '#', title: 'Subpage 1'}, { url: '#', title: 'Subpage 2'}, { url: '#', title: 'Subpage 3'}]}},
      blocks: [
          {
              blockName: "acf/overlay-hero",
              attrs: {
                  data: {
                      subheading: "Overlay Hero Block",
                      heading: "Overlay Hero Block",
                      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                      video_loop: 'https://www.colby.edu/wp-content/uploads/2025/04/oak_home_hero.mp4',
                      image: {
                          url: 'https://www.colby.edu/wp-content/uploads/2025/04/Untitled-61.jpeg',
                          alt: "Students on campus",
                          sizes: {
                            Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                          }
                      },
                  },
              },
          },
          {
              blockName: "acf/media-context",
              attrs: {
                  data: {
                      subheading: "Media Context",
                      heading: "Media Context Block",
                      paragraph: "Media Context integration marker paragraph.",
                      reverse: true,
                      image: {
                          url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                          alt: "Students on campus",
                          sizes: {
                            Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                            Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                          }
                      },
                  },
              },
          },
          {
            blockName: "acf/dark-interstitial",
            attrs: {
                data: {
                    subheading: "Dark Interstitial Section",
                    heading: "Dark Interstitial Section",
                    paragraph: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                    size: 'small',
                    image: {
                        url: 'https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg',
                        alt: "Students on campus",
                        sizes: {
                          Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                          Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                        }
                    },
                },
            },
        },
        {
          blockName: "core/group",
          attrs: {
              data: {
                  blocks: [
                    {
                      blockName: "core/heading",
                      attrs: {
                          data: {
                              heading: "<h2>Meet Our Team</h2>",
                          }
                      }
                  },
                      {
                          blockName: "acf/article-grid",
                          attrs: {
                              data: {
                                  display_posts_method: "manual",
                                  columns: 4,
                                  items: [
                                      {
                                        image: {
                                          src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                          alt: "this is an alt tag",
                                        },
                                        heading: "Jake Philips",
                                        subheading: "Chief Technology Officer",
                                        paragraph: "",
                                        url: "#",
                                        buttons: [
                                          {
                                            button: {
                                              title: "Read Bio",
                                              url: "https://www.colby.edu",
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        image: {
                                          src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                          alt: "this is an alt tag",
                                        },
                                        heading: "Sally Williams",
                                        subheading: "Chief Marketing Officer",
                                        paragraph: "",
                                        url: "#",
                                        buttons: [
                                          {
                                            button: {
                                              title: "Read Bio",
                                              url: "https://www.colby.edu/academics",
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        image: {
                                          src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                          alt: "this is an alt tag",
                                        },
                                        heading: "Mary Allen",
                                        subheading: "Design",
                                        paragraph: "",
                                        url: "#",
                                        buttons: [
                                          {
                                            button: {
                                              title: "Read Bio",
                                              url: "https://www.colby.edu/news",
                                            },
                                          },
                                        ],
                                      },
                                      {
                                        image: {
                                          src: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                                          alt: "this is an alt tag",
                                        },
                                        heading: "AJ Eaton",
                                        subheading: "Social Media",
                                        paragraph: "",
                                        url: "#",
                                        buttons: [
                                          {
                                            button: {
                                              title: "Read Bio",
                                              url: "https://www.colby.edu/news",
                                            },
                                          },
                                        ],
                                      },
                                    ],
                                    border: false,
                              },
                          },
                      },
                  ],
              }
          }
      },
          {
            blockName: "acf/full-bleed-image",
            attrs: {
                data: {
                    subheading: "Full Bleed Image",
                    heading: "Full Bleed Image",
                    paragraph: "At Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint.",
                    size: 'small',
                    image: {
                        url: 'https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg',
                        alt: "Students on campus",
                        sizes: {
                          Rectangle: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                          Rectangle_mobile: "https://www.colby.edu/wp-content/uploads/2023/09/20210518_mufaddalali_0031-600x600.jpg",
                        }
                    },
                },
            },
        },
        {
          blockName: "acf/block-quote",
          attrs: {
              data: {
                  quote: "Perferendis et iusto odio doloribus asperiores repellat.",
              }
          }
      },
      ]
  },
};