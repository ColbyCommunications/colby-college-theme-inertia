<template>
  <div class="stats-updater-container">
    <div
      v-if="form.recentlySuccessful"
      id="status-message"
      class="success"
      style="display: block"
    >
      Updates successfully saved to the database.
    </div>

    <form id="updateForm" @submit.prevent="submitUpdates">
      <!-- 1. Homepage (ID: 1967) -->
      <fieldset>
        <legend>1. Homepage (Page ID: 1967)</legend>
        <p class="block-info">Block: <code>acf/facts-figures</code></p>

        <div
          class="form-row"
          v-for="(fact, index) in form.hp_facts_1967.fields.facts"
          :key="'hp_' + index"
        >
          <div class="form-group">
            <label :for="`hp_facts_${index}_fig`"
              >Fact {{ index + 1 }} Figure</label
            >
            <input
              type="text"
              :id="`hp_facts_${index}_fig`"
              v-model="fact.figure"
            />
          </div>
          <div class="form-group">
            <label :for="`hp_facts_${index}_p`"
              >Fact {{ index + 1 }} Label</label
            >
            <input
              type="text"
              :id="`hp_facts_${index}_p`"
              v-model="fact.paragraph"
            />
          </div>
        </div>
      </fieldset>

      <!-- 2. Academics Page (ID: 7436) -->
      <fieldset>
        <legend>2. Academics (Page ID: 7436)</legend>
        <p class="block-info">Block: <code>acf/dark-interstitial</code></p>

        <div
          class="form-row"
          v-for="(outcome, index) in form.ac_facts_7436.fields.facts"
          :key="'ac_' + index"
        >
          <div class="form-group">
            <label :for="`ac_facts_${index}_fig`"
              >Outcome {{ index + 1 }} Figure</label
            >
            <input
              type="text"
              :id="`ac_facts_${index}_fig`"
              v-model="outcome.figure"
            />
          </div>
          <div class="form-group">
            <label :for="`ac_facts_${index}_p`"
              >Outcome {{ index + 1 }} Description</label
            >
            <textarea
              :id="`ac_facts_${index}_p`"
              v-model="outcome.paragraph"
            ></textarea>
          </div>
        </div>
      </fieldset>

      <!-- 3. Research Page (ID: 17114) -->
      <fieldset>
        <legend>3. Research (Page ID: 17114)</legend>
        <p class="block-info">Block: <code>acf/overlay-hero</code></p>

        <div class="form-group">
          <label for="res_hero_heading">Hero Heading</label>
          <input
            type="text"
            id="res_hero_heading"
            v-model="form.res_hero_17114.fields.heading"
          />
        </div>
      </fieldset>

      <!-- 4. Visit Page (ID: 25461) -->
      <fieldset>
        <legend>4. Visit (Page ID: 25461)</legend>
        <p class="block-info">Block: <code>acf/stat-group</code></p>

        <div
          class="form-row"
          v-for="(item, index) in form.visit_items_25461.fields.items"
          :key="'visit_' + index"
        >
          <div class="form-group">
            <label :for="`visit_items_${index}_h`"
              >Item {{ index + 1 }} Heading</label
            >
            <input
              type="text"
              :id="`visit_items_${index}_h`"
              v-model="item.heading"
            />
          </div>
          <div class="form-group">
            <label :for="`visit_items_${index}_p`"
              >Item {{ index + 1 }} Paragraph</label
            >
            <input
              type="text"
              :id="`visit_items_${index}_p`"
              v-model="item.paragraph"
            />
          </div>
        </div>
      </fieldset>

      <button type="submit" :disabled="form.processing">
        {{ form.processing ? "Saving..." : "Submit Updates" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";

const props = defineProps({
  stats: {
    type: Object,
    default: () => ({}),
  },
});

/**
 * Initializes a block schema by taking the empty default fields,
 * looking up the database record, and merging any saved data safely.
 */
const initBlock = (uniqueId, pageId, blockType, defaultFields) => {
  // 1. Start with a fresh copy of the default empty fields
  let fields = JSON.parse(JSON.stringify(defaultFields));

  // 2. Check if we have saved data in the database
  const dbRecord = props.stats[uniqueId];

  // 3. If saved data exists, overwrite our empty fields
  if (dbRecord && dbRecord.fields) {
    Object.keys(fields).forEach((key) => {
      // Handle Arrays (like 'facts' or 'items')
      if (Array.isArray(fields[key]) && Array.isArray(dbRecord.fields[key])) {
        fields[key].forEach((row, i) => {
          if (dbRecord.fields[key][i]) {
            Object.assign(row, dbRecord.fields[key][i]);
          }
        });
      }
      // Handle Flat Strings (like 'heading')
      else if (dbRecord.fields[key] !== undefined) {
        fields[key] = dbRecord.fields[key];
      }
    });
  }

  // 4. Return the exact structure WordPress/Inertia requires
  return {
    page_id: pageId,
    block_type: blockType,
    fields: fields,
  };
};

const form = useForm({
  hp_facts_1967: initBlock("hp_facts_1967", 1967, "acf/facts-figures", {
    facts: Array.from({ length: 3 }, () => ({ figure: "", paragraph: "" })),
  }),

  ac_facts_7436: initBlock("ac_facts_7436", 7436, "acf/dark-interstitial", {
    facts: Array.from({ length: 2 }, () => ({ figure: "", paragraph: "" })),
  }),

  res_hero_17114: initBlock("res_hero_17114", 17114, "acf/overlay-hero", {
    heading: "",
  }),

  visit_items_25461: initBlock("visit_items_25461", 25461, "acf/stat-group", {
    items: Array.from({ length: 8 }, () => ({ heading: "", paragraph: "" })),
  }),
});

const submitUpdates = () => {
  form.post("/colby-stats/update", {
    preserveScroll: true,
  });
};
</script>

<style scoped>
.stats-updater-container {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  max-width: 850px;
  margin: 30px auto;
  padding: 0 20px;
  color: #333;
  line-height: 1.5;
}
h1 {
  border-bottom: 2px solid #002d62;
  padding-bottom: 10px;
  color: #002d62;
}
fieldset {
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 20px;
  margin-bottom: 25px;
  background: #f9f9f9;
}
legend {
  font-weight: bold;
  padding: 0 10px;
  color: #002d62;
  font-size: 1.1em;
}
.block-info {
  font-size: 0.85em;
  color: #666;
  margin-top: -10px;
  margin-bottom: 15px;
}
.form-group {
  margin-bottom: 15px;
  flex: 1;
}
.form-row {
  display: flex;
  gap: 15px;
}
label {
  display: block;
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 5px;
}
input[type="text"],
textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.95em;
}
textarea {
  resize: vertical;
  height: 50px;
}
button {
  background-color: #002d62;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1em;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
button:hover:not(:disabled) {
  background-color: #001f44;
}
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
#status-message {
  margin-top: 15px;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
}
.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
</style>
