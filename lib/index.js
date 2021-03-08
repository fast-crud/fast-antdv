import { defineAsyncComponent } from "vue";

const rootDir = "/antdv/es";
const components = {
  col: {
    ACol: "index.js",
  },
  row: {
    ARow: "index.js",
  },
  anchor: {
    //TODO AAnchor.link = AAnchorLink
    AAnchor: "Anchor.js",
    AAnchorLink: "AnchorLink.js",
  },
  "auto-complete": {
    //TODO is-mobile依赖
    AAutoComplete: "index.js",
  },
  avatar: {
    AAvatar: "index.js",
  },

  "back-top": {
    ABackTop: "index.js",
  },
  badge: {
    ABadge: "Badge.js",
    ABadgeRibbon: "Ribbon.js",
  },
  breadcrumb: {
    ABreadcrumb: "Breadcrumb.js",
    ABreadcrumbItem: "BreadcrumbItem.js",
    ABreadcrumbSeparator: "BreadcrumbSeparator.js",
    // ABreadcrumb: {
    //   path: "Breadcrumb.js",
    //   async after(app, component) {
    //     console.log("component", component);
    //     const BreadcrumbItem = await installAsync(
    //       app,
    //       "ABreadcrumbItem",
    //       "/breadcrumb/BreadcrumbItem.js"
    //     );
    //     console.log("BreadcrumbItem", BreadcrumbItem);
    //     component.default.Item = BreadcrumbItem.default;
    //     const BreadcrumbSeparator = await installAsync(
    //       app,
    //       "ABreadcrumbSeparator",
    //       "/breadcrumb/BreadcrumbSeparator.js"
    //     );
    //     component.default.Separator = BreadcrumbSeparator.default;
    //     return component;
    //   },
    // },
  },
  button: {
    AButton: "button.js",
    AButtonGroup: "button-group.js",
  },
  calendar: {
    ACalendar: "index.js",
  },
  card: {
    ACard: "Card.js",
    AMeta: "Meta.js",
    AGrid: "Grid.js",
  },
  cascader: {
    ACascader: "index.js",
  },
  checkbox: {
    ACheckbox: "Checkbox.js",
    ACheckboxGroup: "Group.js",
  },
  input: {
    AInput: "Input.js",
    AInputGroup: "Group.js",
    AInputSearch: "Search.js",
    ATextArea: "TextArea.js",
    AInputPassword: "Password.js",
  },
  affix: {
    AAffix: "index.js",
  },
  alert: {
    AAlert: "index.js",
  },
};

function installGlobal(app) {
  app.config.globalProperties.$message = {};
  import(/* @vite-ignore */ rootDir + "/message/index.js").then((message) => {
    app.config.globalProperties.$message = message;
  });
  app.config.globalProperties.$notification = {};
  import(/* @vite-ignore */ rootDir + "/notification/index.js").then(
    (notification) => {
      app.config.globalProperties.$notification = notification;
    }
  );
  import(/* @vite-ignore */ rootDir + "/modal/index.js").then((Modal) => {
    app.use(Modal);
  });
}

async function installAsync(app, name, componentPath, callback) {
  const asyncPath = rootDir + componentPath;
  const component = await import(/* @vite-ignore */ asyncPath);
  console.log("install async", component);
  app.component(name, component.default);
  return component;
}

function install(app, name, componentPath, callback) {
  const component = defineAsyncComponent(() => {
    const asyncPath = rootDir + componentPath;
    return import(/* @vite-ignore */ asyncPath).then((ret) => {
      console.log("loaded:", name, componentPath);
      if (callback) {
        return callback(app, ret).then(() => {
          return ret;
        });
      }
      return ret;
    });
  });
  app.component(name, component);
}

export default {
  install(app, options) {
    for (let dir in components) {
      const group = components[dir];
      for (const name in group) {
        let componentPath = group[name];
        if (typeof componentPath === "string") {
          install(app, name, "/" + dir + "/" + componentPath);
        } else {
          const path = componentPath.path;
          const callback = componentPath.after;
          install(app, name, "/" + dir + "/" + path, callback);
        }
      }
    }

    if (options && options.withGlobal) {
      installGlobal(app);
    }
  },
};
