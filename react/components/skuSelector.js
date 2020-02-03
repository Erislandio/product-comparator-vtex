// import React from 'react'
// import { isColor, getImageColor } from './utils/index'
// import styles from './ProductCard.css'

// const SkuSelector = ({ mainVariation, skuSelected, setSkuActive }) => {
//   const skuSelectorSorted = mainVariation.options.sort((a, b) => {
//     if (a.Polegadas && b.Polegadas) {
//       return parseInt(a.Polegadas) - parseInt(b.Polegadas)
//     }

//     return mainVariation.options
//   })

//   return (
//     <div className={`flex ${styles.skuContainer}`}>
//       {skuSelectorSorted.map((option, index) => {
//         return isColor(mainVariation.name) ? (
//           getImageColor(option).length ? (
//             <div
//               key={index}
//               className={`br-100 db w-100 pointer ${styles.sku} ${
//                 option[mainVariation.name] == skuSelected[mainVariation.name]
//                   ? styles.skuActive
//                   : ''
//               }`}
//               onClick={() => setSkuActive(option)}
//               title={option.Color}
//             >
//               <img
//                 src={getImageColor(option)}
//                 className="br-100 db w-100 h-100 "
//               />
//             </div>
//           ) : (
//             <div
//               key={index}
//               className={`br-100 db w-100 pointer ${styles.sku} ${
//                 option[mainVariation.name] == skuSelected[mainVariation.name]
//                   ? styles.skuActive
//                   : ''
//               }`}
//               onClick={() => setSkuActive(option)}
//               title={option.Color}
//             >
//               <span className="br-100 db w-100 h-100" />
//             </div>
//           )
//         ) : (
//           <div
//             className={`ba pa3 mv4 mh2 f7 lh-solid pointer ${
//               option[mainVariation.name] == skuSelected[mainVariation.name]
//                 ? 'bg-blue white'
//                 : ''
//             }`}
//             key={index}
//             title={option.Color}
//             onClick={() => setSkuActive(option)}
//           >
//             {option[mainVariation.name]}
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default SkuSelector
