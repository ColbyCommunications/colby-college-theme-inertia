import ColbyLogo from "./ColbyLogo.vue";
import AthleticsLogo from "./AthleticsLogo.vue";

export default {
  title: "Core Components/Logos",
  tags: ["autodocs"],
};

export const ColbyLogoDark = {
  name: "Colby Logo (Dark)",
  render: () => ({
    components: { ColbyLogo },
    template: '<ColbyLogo url="/" fillColor="--color-indigo" />',
  }),
};

export const ColbyLogoWhite = {
  name: "Colby Logo (White)",
  render: () => ({
    components: { ColbyLogo },
    template: '<div class="bg-indigo p-10"><ColbyLogo url="/" fillColor="--color-white" /></div>',
  }),
};

export const AthleticsLogoDefault = {
  name: "Athletics Logo",
  render: () => ({
    components: { AthleticsLogo },
    template: '<div class="relative bg-indigo p-10 h-20"><AthleticsLogo /></div>',
  }),
};
