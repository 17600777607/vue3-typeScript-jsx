import { defineComponent, reactive } from "vue";
import { useRoute } from "vue-router";
import { routesY } from "@/router/routers";
export default defineComponent({
  setup() {
    const state = reactive({
      defaultActive: "/menuManager",
      menuList: JSON.parse(JSON.stringify(routesY))
    });
    const route = useRoute();
    state.defaultActive = route.path;

    const handleSelect = (key: string) => {
      state.defaultActive = key;
    };
    return () => {
      const { defaultActive, menuList } = state;
      return (
        <el-menu
          router={true}
          default-active={defaultActive}
          onSelect={handleSelect}
        >
          {menuList[0].children.map((item: Record<string, any>) => {
            return (
              <el-menu-item
                index={item.path}
                v-slots={{
                  title: () => <span>{item.meta.title}</span>
                }}
              >
                <i class={item.meta.icon}></i>
              </el-menu-item>
            );
          })}
        </el-menu>
      );
    };
  }
});
