import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      require: true
    },
    close: {
      type: Function,
      require: true
    }
  },
  setup(props) {
    console.log(props);
    const state = reactive({
      msgList: [
        {
          time: "2020-01-01 17:11:11",
          title: "测试",
          content:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          status: 0
        },
        {
          time: "2020-01-01 17:11:11",
          title: "测试",
          content:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          status: 0
        },
        {
          time: "2020-01-01 17:11:11",
          title: "测试",
          content:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          status: 0
        },
        {
          time: "2020-01-01 17:11:11",
          title: "测试",
          content:
            "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
          status: 1
        }
      ]
    });
    const slots = {
      title: () => <span>消息中心</span>
    };
    const msgNotIcon = () => {
      return <i class="el-icon-s-comment" />;
    };
    const msgHasIcon = () => {
      return <i class="el-icon-view" />;
    };
    return () => {
      const { msgList } = state;
      return (
        <el-drawer
          v-slots={slots}
          v-model={props.visible}
          direction="rtl"
          before-close={props.close}
          destroy-on-close
          append-to-body={true}
        >
          {msgList.map(item => {
            return (
              <div style="margin: 10px 0">
                <div style="border-bottom: 1px solid #efefef;font-size: 14px">
                  <div style="display: flex">
                    <div style="flex: 1;color: #6374c2">
                      {item.status === 0 ? msgNotIcon() : msgHasIcon()}
                      {item.title}
                      <div style="color: rgba(0, 0, 0, 0.54);float:right">
                        {item.time}
                        <i class="el-icon-close" style="cursor: pointer" />
                      </div>
                      <div style="padding: 10px 0;color: rgba(0, 0, 0, 0.87);font-size: 13px;">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </el-drawer>
      );
    };
  }
});
