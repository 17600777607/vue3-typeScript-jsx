import { defineComponent } from "vue";
import LayoutX from "@/components/layoutX/Index";
export default defineComponent({
  components: { LayoutX },
  setup() {
    const slots = {
      headerBox: () => <span>头部</span>,
      routerBox: () => <router-view />
    };
    return () => {
      return <LayoutX v-slots={slots} />;
    };
  }
});
