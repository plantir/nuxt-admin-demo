import VuetifyLoaderPlugin from "vuetify-loader/lib/plugin";
import "vrwebdesign-nuxt/modules/nuxt-axios";
import "vee-validate";
import "vrwebdesign-nuxt/modules/nuxt-dialog";
import "vrwebdesign-nuxt/modules/nuxt-toast";
import "vrwebdesign-nuxt/modules/nuxt-loader";
import "vrwebdesign-nuxt/modules/nuxt-scroll-to";
import "vrwebdesign-nuxt/modules/nuxt-enums";
import "vrwebdesign-nuxt/modules/nuxt-authorization";
import "./services/types/index";
export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  styleResources: {
    scss: ["~assets/style/_variables.scss"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/style/app.styl",
    "~/assets/style/main.scss",
    "animate.css/animate.css",
    "vrwebdesign-nuxt/assets/style/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vuetify.ts"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/style-resources",
    // "vrwebdesign-nuxt/modules/nuxt-client-init",
    "vrwebdesign-nuxt/modules/nuxt-axios",
    "vrwebdesign-nuxt/modules/nuxt-validate",
    "vrwebdesign-nuxt/modules/nuxt-toast",
    "vrwebdesign-nuxt/modules/nuxt-dialog",
    "vrwebdesign-nuxt/modules/nuxt-global",
    "vrwebdesign-nuxt/modules/nuxt-data-grid",
    "vrwebdesign-nuxt/modules/nuxt-form-generator",
    "vrwebdesign-nuxt/modules/nuxt-loader",
    "vrwebdesign-nuxt/modules/nuxt-date-picker",
    "vrwebdesign-nuxt/modules/nuxt-file-upload",
    "vrwebdesign-nuxt/modules/nuxt-scroll-to",
    "vrwebdesign-nuxt/modules/nuxt-currency",
    "vrwebdesign-nuxt/modules/nuxt-enums",
    "vrwebdesign-nuxt/modules/nuxt-badge",
    "vrwebdesign-nuxt/modules/nuxt-navbar",
    "vrwebdesign-nuxt/modules/nuxt-authorization",
    "vrwebdesign-nuxt/modules/nuxt-chart"
  ],
  /*
   ** Build configuration
   */
  watch: ["services"],
  build: {
    watch: ["services"],
    transpile: ["vuetify/lib"],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
    }
  }
};
