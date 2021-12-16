<template>
  <section>
    <o-field label="Find a JS framework">
      <o-autocomplete
        rounded
        expanded
        v-model="name"
        :data="filteredDataArray"
        placeholder="e.g. jQuery"
        icon="search"
        clearable
        @select="(option) => (selected = option)"
      >
        <template v-slot:empty>No results found</template>
      </o-autocomplete>
    </o-field>
  </section>
</template>

<script>
import { Search } from "../services/users.js";
export default {
  data() {
    return {
      data: ["word"],
      name: "",
      selected: null,
    };
  },
  computed: {
    filteredDataArray() {
      this.data = Search(this.name);
      return this.data.filter((option) => {
        return Search(name).toLowerCase().indexOf(option.toLowerCase()) > -1;
      });
    },
  },
};
</script>
