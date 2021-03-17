import { defineComponent, watch } from "vue";
import { useRoute } from "vue-router";
import LayoutY from "@/components/layoutY/Index";
import HeaderBox from "@/components/layoutY/components/HeaderBox";
import AsideBox from "@/components/layoutY/components/AsideBox";
import FooterBox from "@/components/layoutY/components/FooterBox";
export default defineComponent({
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      (newVal, oldVal) => {
        console.log("路由监听-新的", newVal);
        console.log("路由监听-旧的", oldVal);
      }
    );
    const slots = {
      headerBox: () => <HeaderBox />,
      asideBox: () => <AsideBox />,
      routerBox: () => <router-view />,
      footerBox: () => <FooterBox />
    };
    return () => {
      return <LayoutY v-slots={slots} />;
    };
  }
});
