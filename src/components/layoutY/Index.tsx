import { defineComponent, renderSlot } from "vue";
const style = require("./style/Index.module.scss");
export default defineComponent({
  setup(props, { slots }) {
    return () => {
      return (
        <el-container class={style.layoutYBox}>
          <el-header class={style.headerBox}>
            {renderSlot(slots, "headerBox")}
          </el-header>
          <el-container class={style.mainBox}>
            <el-aside class={style.asideBox} width="200px">
              {renderSlot(slots, "asideBox")}
            </el-aside>
            <el-container>
              <el-main>{renderSlot(slots, "routerBox")}</el-main>
              <el-footer class={style.footerBox}>
                {renderSlot(slots, "footerBox")}
              </el-footer>
            </el-container>
          </el-container>
        </el-container>
      );
    };
  }
});
