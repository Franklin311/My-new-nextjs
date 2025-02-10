export function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
  }


//   const cn = (...classes: (string | undefined | null | false)[]) => {
//     return classes.filter(Boolean).join(" ");
//   }

// export {
//     cn
// }