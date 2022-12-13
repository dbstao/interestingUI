import { defineComponent } from "vue";
import S from "./index.module.scss";
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
    block: {
      default: false,
    },
    link: {
      default: false
    },
    href: {
      type: String,
    },
    target:{
      default: '_self'
    },
    shape: {
      default: 'default'
    }
  },
  setup(p, ctx) {
    console.log("1", p, ctx, "2", ctx.slots.default?.(), "3", p.block);
    const children = ctx.slots.default?.();
    let classList = `${S[p.size]} ${S[p.type]} ${S[p.shape]} ${
      p.block !== false ? S["wmax"] : ""
    }`;
    // let classList = `${props.size} ${props.type} `;

    if (true) {
    }

    return (p: any) => {
      function a() {
         return <a href={p.href} target={p.target}>xxxx</a>;
      }

      if(p.href?.length && p.link?.length){
        return a();
      }else if(p.href?.length){
        return (
          <button className={classList} disabled={p.disabled}>
            {a()}
            xxx
          </button>
        );
      }

      return (
        <button className={classList} disabled={p.disabled}>
          xxx
        </button>
      );
    };
  },
  // render(data: any,aaa:any, bbb:any, ccc:any, ddd:any, e:any) {
  //   // console.log('this',this.$slots.default());

  //   return <button className={this.classList} disabled={this.disabled}><slot name="default" />3123</button>;
  // },
});
