import { defineComponent } from "vue";
import StyleButton from "./index.module.scss";
// import './index.scss';
export default defineComponent({
  props: {
    type: {
      default: "default",
    },
    size: {
      default: "middle",
    },
    disabled: {
      default: false,
    },
  },
  setup(props) {
    let a = 222;
    let classList = `${StyleButton[props.size]} ${StyleButton[props.type]} ${StyleButton[props.type]} `;

    return {
      a,
      classList,
    };
  },
  render(data: any) {
    debugger;
    return <button className={data.classList} disabled={data.disabled}><slot>222</slot></button>;
  },
});
