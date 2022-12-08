import { defineComponent } from "vue";
import StyleButton from "./index.module.scss";
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
  // setup(props,ctx) {
  //   console.log('1',props, '2', ctx.slots.default());
    
  //   let classList = `${StyleButton[props.size]} ${StyleButton[props.type]} ${StyleButton[props.type]} `;

  //   return {
  //     classList,
  //   };
  // },
  render(data: any,aaa:any, bbb:any, ccc:any, ddd:any, e:any) {
    console.log('this',this.$slots.default());
    
    return <button className={this.classList} disabled={this.disabled}><slot name="default" /></button>;
  },
});

