import { defineComponent, reactive } from "vue";
import MsgDrawer from "@/components/layoutX/components/MsgDrawer";
const style = require("../style/Index.module.scss");
export default defineComponent({
  setup() {
    const logoImg = require("../../../assets/layoutX/r-logo.png");
    const state = reactive({
      msgValue: 12,
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      visible: false
    });
    const handlerOpen = () => {
      state.visible = true;
    };
    const handlerClose = () => {
      state.visible = false;
    };
    return () => {
      handlerOpen;
      handlerClose;
      const { msgValue, url, visible } = state;
      return (
        <>
          <div class={style.logo}>
            <img src={logoImg} />
          </div>
          <div class={style.leftBox}>菜单</div>
          <div class={style.rightBox}>
            <el-space style="height: 60px" size={20}>
              <el-badge value={msgValue} class={style.msgStyle}>
                <i onClick={handlerOpen} class="el-icon-message-solid" />
              </el-badge>
              <el-avatar size="large" src={url}></el-avatar>
              <MsgDrawer visible={visible} close={handlerClose} />
            </el-space>
          </div>
        </>
      );
    };
  }
});
