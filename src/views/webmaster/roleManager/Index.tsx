import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "jokcy"
    });
    return () => {
      return (
        <div>
          <p>{state.name}</p>
        </div>
      );
    };
  }
});
