import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "菜单管理"
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
