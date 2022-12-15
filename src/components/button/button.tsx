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
      default: false,
    },
    href: {
      type: String,
    },
    target: {
      default: "_self",
    },
    shape: {
      default: "default",
    },
    border: {
      type: String,
      default: "solid",
    },
  },
  setup(p, ctx) {
    // console.log("1", p, ctx, "2", ctx.slots.default?.(), "3", p.block);
    // const children = ctx.slots.default?.();
    // let classList = `${S[p.size]} ${S[p.type]} ${S[p.shape]} ${
    //   p.block !== false ? S["wmax"] : ""
    // }`;
    // let classList = `${props.size} ${props.type} `;

    // if (true) {
    // }

    return (p: any) => {
      // function a() {
      //    return (<a href={p.href} target={p.target}>xxxx</a>)
      // }

      // if(p.href?.length && p.link?.length){
      //   return a()
      // }else if(p.href?.length){
      //   return (
      //     <button className={classList} disabled={p.disabled}>
      //       {a()}
      //       xxx
      //     </button>
      //   );
      // }

      // return (
        // <button className={classList} disabled={p.disabled}>
        //   xxx
        // </button>
      // );

      return  <button>xxx</button>
         
    };
  },
  // render(data: any,aaa:any, bbb:any, ccc:any, ddd:any, e:any) {
  //   // console.log('this',this.$slots.default());

  //   return <button className={this.classList} disabled={this.disabled}><slot name="default" />3123</button>;
  // },
});

// export default defineComponent({
//   setup() {
//     return () => (
//       <Child
//         v-slots={{
//           prefix: () => <i>prefix</i>, // 具名插槽
//           suffix: (props: Record<"name", string>) => <span>{props.name}</span>, // props可作插槽作用域的作用
//         }}
//       >
//         默认插槽内容
//       </Child>
//     );
//   },
// });

// import { defineComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.jsx";
// export default defineComponent({
//   name: "App",
//   components: { HelloWorld },
//   setup() {
//     const slots = {
//       default: () => <div>这个会渲染到H1中</div>,
//       bar: () => <span>这个会渲染到h2中</span>,
//     };
//     return () => (
//       <>
//         <HelloWorld v-slots={slots} />
//       </>
//     );
//   },
// });

// App.jsx

//  // h1当中渲染子组件默认的
//  // h2当中则渲染父组件传入的bar组件内容
//  import { defineComponent } from "vue";
//  import HelloWorld from "./components/HelloWorld.jsx";

//  export default defineComponent({
//    name: "App",
//    components: { HelloWorld },
//    setup() {
//      const slots = {
//        bar: () => <span>这个会渲染到h2中</span>,
//      };
//      return () => (
//        <>
//          <HelloWorld v-slots={slots} />
//        </>
//      );
//    },
//  });
