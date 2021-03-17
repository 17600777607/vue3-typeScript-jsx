import { defineComponent, reactive } from "vue";
import MsgDrawer from "@/components/layoutY/components/MsgDrawer";
const style = require("../style/Index.module.scss");
export default defineComponent({
  setup() {
    const logoImg = require("../../../assets/layoutX/r-logo.png");
    const state = reactive({
      msgValue: 3,
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      visible: false,
      userInfo: {
        name: "张三",
        roles: ["超级管理员", "管理员"]
      }
    });
    const handlerOpen = () => {
      state.visible = true;
    };
    const handlerClose = () => {
      state.visible = false;
    };
    const slots = {
      reference: () => {
        return (
          <el-avatar style="cursor: pointer;" size="large" src={state.url} />
        );
      },
      default: () => {
        return (
          <>
            <div class={style.popoverMainBox}>
              <p>
                <el-space size={10}>
                  <i class="el-icon-user" />
                  {state.userInfo.name}
                </el-space>
              </p>
              <p class={style.systemSettings}>
                <el-space size={10}>
                  <i class="el-icon-setting" />
                  后台管理
                </el-space>
              </p>
              <p>
                <el-space size={10}>
                  <i class="el-icon-lock" />
                  {state.userInfo.roles}
                </el-space>
              </p>
            </div>
            <div class={style.popoverFoot}>
              <el-button type="text">退出登录</el-button>
            </div>
          </>
        );
      }
    };
    return () => {
      handlerOpen;
      handlerClose;
      const { msgValue, visible } = state;
      return (
        <>
          <div class={style.logo}>
            <img src={logoImg} />
          </div>
          <div class={style.leftBox}>菜单</div>
          <div class={style.rightBox}>
            <el-space style="height: 60px" size={20}>
              <el-badge size="large" value={msgValue} class={style.msgStyle}>
                <i onClick={handlerOpen} class="el-icon-message-solid" />
              </el-badge>
              <el-popover
                popper-class={style.popoverBox}
                placement="top-start"
                width={200}
                trigger="click"
                v-slots={slots}
              />
              <MsgDrawer visible={visible} close={handlerClose} />
            </el-space>
          </div>
        </>
      );
    };
  }
});
