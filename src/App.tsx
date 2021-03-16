import { defineComponent } from "vue";
import LayoutX from "@/components/layoutX/Index";
import HeaderBox from "@/components/layoutX/components/HeaderBox";
import FooterBox from "@/components/layoutX/components/FooterBox";
export default defineComponent({
  setup() {
    const slots = {
      headerBox: () => <HeaderBox />,
      routerBox: () => <router-view />,
      footerBox: () => <FooterBox />
    };
    return () => {
      return <LayoutX v-slots={slots} />;
    };
  }
});
