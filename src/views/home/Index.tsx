import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "首页"
    });
    return () => {
      return <p>{state.name}</p>;
    };
  }
});
