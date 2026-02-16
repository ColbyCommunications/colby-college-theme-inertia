import Wysiwyg from "./Wysiwyg.vue";

export default {
  title: "Core Components/Wysiwyg",
  component: Wysiwyg,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    content:
      '<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, <a href="/">consectetur</a> adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla.</p><h3>Spring 2023</h3><p>Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue. In lacinia nisl a nisl condimentum laoreet.</p>',
  },
};
