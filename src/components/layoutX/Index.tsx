import { defineComponent, renderSlot } from "vue";
const style = require("./style/Index.module.scss");
export default defineComponent({
  setup(props, { slots }) {
    return () => {
      const { footerBox } = slots;
      return (
        <el-container class={style.layoutXBox}>
          <el-header class={style.headerBox}>
            {renderSlot(slots, "headerBox")}
          </el-header>
          <el-main class={style.mainBox}>
            {renderSlot(slots, "routerBox")}
          </el-main>
          <el-footer class={style.footerBox}>
            {footerBox !== undefined ? (
              renderSlot(slots, "footerBox")
            ) : (
              <span>默认footer</span>
            )}
          </el-footer>
        </el-container>
      );
    };
  }
});
