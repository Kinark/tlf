import React from 'react';
import lifelessPNG from './images/LifelessRainLogo@2x.png';
import './styles.scss';

const Name = 'LifelessRainLogo';

export const LifelessLogo = (props) => {
   const style = { height: props.height, }
   const color = props.color ? props.color : '#3a3a3a';
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 377.08691 267.85999" style={style}>
      <image src={lifelessPNG} xlinkHref="" />
      <title>{Name}</title><path d="M47.24347,115.77h-10.45a168.664,168.664,0,0,1,133.35-94.09l-5.72,10.51A159.697,159.697,0,0,0,47.24347,115.77ZM293.0293,69.36078l-33.17725,33.17779,1.76758,1.76758L294.90332,71.022a160.477,160.477,0,0,1,20.81494,22.57569l-17.8457,17.84619,1.76758,1.76758,17.59411-17.59455A159.65832,159.65832,0,0,1,329.84351,115.77h10.45a168.664,168.664,0,0,0-133.35-94.09l5.72,10.51A158.89272,158.89272,0,0,1,293.0293,69.36078ZM347.76343,179.38c.22,3.49.34009,7.01.34009,10.56a158.82561,158.82561,0,0,1-20.29,77.92c10.62988-7.42,19.30005-21.02,24.37-38.07a167.69756,167.69756,0,0,0,4.89-37.55c.02-1,.03-2,.03-3.01q0-4.965-.29-9.85ZM206.92346,33.8l-1.37-2.52-5.56-10.22L188.54346,0l-11.45,21.06-5.56,10.22-1.37,2.52,18.38,57.8ZM73.54,192.877l-38.97943,38.979A159.69625,159.69625,0,0,1,28.98346,189.94c0-3.55.12-7.07.34-10.56h-9.05q-.285,4.89-.29,9.85c0,1.01.01,2.01.03,3.01a167.69409,167.69409,0,0,0,4.89,37.55c5.07,17.05,13.74,30.65,24.37,38.07A158.5921,158.5921,0,0,1,35.338,234.61377l39.96967-39.96924Zm67.26465-143.6875L97.63281,92.36133l1.76758,1.76758L142.57227,50.957Zm29.10058,40.66114-17.77685,17.77685L153.896,109.395l17.77685-17.77686Zm61.49854-42.6333L209.18408,69.43652l1.76758,1.76758,22.21973-22.21924ZM190.64893,207.35254l25.3955-25.39551-1.76757-1.76758L188.88135,205.585Zm-65.13477-11.94531,1.76758,1.76757,15.2373-15.23632-1.76758-1.76758Zm190.80469-3.20215L304.25732,204.2666l1.76758,1.76758,12.06153-12.06152Zm-8.7168,55.59765,1.76758,1.76758,18.41113-18.41015-1.76758-1.76758ZM40.96387,159.56567h-8.3418l-.52441,6.84571h-15.375V128.02856l5.83593-1.12255v-6.584H0v6.584l5.79883,1.12255v39.09375L0,168.24438v6.54688H40.96387ZM71.24414,126.906v-6.584H48.68555v6.584l5.83593,1.12255v39.09375l-5.83593,1.12207v6.54688H71.24414v-6.54688l-5.83594-1.12207V128.02856Zm30.542,41.33837-5.83593-1.12207V152.158h19.0791v-8.417H95.9502V128.739h17.76953l.48632,6.50977h8.37989V120.322H79.22754v6.584l5.79883,1.12255v39.09375l-5.79883,1.12207v6.54688h22.55859Zm71.69239-8.34277h-8.30469l-.48633,6.50977h-17.583v-15.5625h18.44336V142.4314H147.10449V128.739h17.4336l.48632,6.50977h8.37989V120.322H130.38281v6.584l5.79785,1.12255v39.09375l-5.79785,1.12207v6.54688h43.09571Zm50.63086-.33594h-8.3418l-.52344,6.84571H199.86719V128.02856l5.83594-1.12255v-6.584H183.14551v6.584l5.79883,1.12255v39.09375l-5.79883,1.12207v6.54688h40.96387Zm50.85546.33594h-8.30468l-.48633,6.50977h-17.583v-15.5625h18.44336V142.4314H248.59082V128.739h17.43359l.48633,6.50977h8.37989V120.322H231.86816v6.584l5.79883,1.12255v39.09375l-5.79883,1.12207v6.54688h43.09668Zm46.292,11.63477a12.93378,12.93378,0,0,0,5.53613-11.03614,13.7314,13.7314,0,0,0-4.65723-10.811q-4.65673-4.11548-13.67285-6.62207a35.414,35.414,0,0,1-8.84766-3.75928,5.33861,5.33861,0,0,1-2.5625-4.54541,5.89182,5.89182,0,0,1,2.4502-4.88232q2.44921-1.88819,6.93945-1.88916a24.16866,24.16866,0,0,1,5.79883.67334,14.49667,14.49667,0,0,1,4.15234,1.57129l1.42188,7.48193h8.19238v-11.148a26.43758,26.43758,0,0,0-8.67871-5.08789,32.81344,32.81344,0,0,0-11.44824-1.9082q-8.49169.11278-14.10352,4.32129a12.9671,12.9671,0,0,0-5.61132,10.83007,12.61551,12.61551,0,0,0,4.97558,10.54981q4.97462,3.85327,14.665,6.65918,5.57373,1.68311,7.79981,3.59082a6.32642,6.32642,0,0,1,2.22558,5.05078,5.90924,5.90924,0,0,1-2.33789,4.90039q-2.33789,1.834-6.82715,1.833a21.163,21.163,0,0,1-6.30371-.87891,13.22774,13.22774,0,0,1-4.4707-2.22558l-1.16016-7.74414h-8.4541v11.373a24.09167,24.09167,0,0,0,8.69727,5.68653,31.65421,31.65421,0,0,0,11.6914,2.05664Q315.71973,175.57642,321.25684,171.53638Zm51.17285-21.84717q-4.65673-4.11548-13.67285-6.62207a35.414,35.414,0,0,1-8.84766-3.75928,5.33861,5.33861,0,0,1-2.5625-4.54541,5.89182,5.89182,0,0,1,2.4502-4.88232q2.44921-1.88819,6.93945-1.88916a24.16866,24.16866,0,0,1,5.79883.67334,14.49667,14.49667,0,0,1,4.15234,1.57129l1.42188,7.48193h8.19238v-11.148a26.43779,26.43779,0,0,0-8.67871-5.08789,32.81353,32.81353,0,0,0-11.44825-1.9082q-8.4917.11278-14.10351,4.32129A12.96711,12.96711,0,0,0,336.46,134.72485a12.61549,12.61549,0,0,0,4.97559,10.54981q4.9746,3.85327,14.665,6.65918,5.57373,1.68311,7.7998,3.59082a6.3264,6.3264,0,0,1,2.22559,5.05078,5.90924,5.90924,0,0,1-2.33789,4.90039q-2.3379,1.834-6.82715,1.833a21.16293,21.16293,0,0,1-6.30371-.87891,13.2278,13.2278,0,0,1-4.47071-2.22558l-1.16015-7.74414h-8.4541v11.373a24.09163,24.09163,0,0,0,8.69726,5.68653,31.65427,31.65427,0,0,0,11.69141,2.05664q9.05272,0,14.58984-4.04a12.93378,12.93378,0,0,0,5.53613-11.03614A13.7314,13.7314,0,0,0,372.42969,149.68921ZM135.51074,261.0885l1.34668.1875v6.584H131.208q-5.34961,0-7.51953-2.88086a12.04231,12.04231,0,0,1-2.16993-7.44434v-3.10547a8.76932,8.76932,0,0,0-2.11328-6.22851,8.1054,8.1054,0,0,0-5.96679-2.375h-8.94141V260.191l5.83594,1.12207V267.86H87.77539v-6.54688l5.79785-1.12207V221.09729l-5.79785-1.123v-6.584h24.46582q9.27686,0,14.55274,4.24609,5.2749,4.24659,5.27441,11.72852a11.80879,11.80879,0,0,1-2.207,7.14551,15.43806,15.43806,0,0,1-6.47168,4.90039,11.75852,11.75852,0,0,1,6.93945,4.73242,14.96755,14.96755,0,0,1,2.11328,8.21191v2.76856a4.72684,4.72684,0,0,0,.71094,2.78711A3.168,3.168,0,0,0,135.51074,261.0885Zm-14.32812-31.2373a7.7678,7.7678,0,0,0-2.26367-5.8545q-2.26318-2.18994-6.67774-2.18945h-7.74414v15.60059h7.55664q4.56446,0,6.84668-1.94532A6.968,6.968,0,0,0,121.18262,229.8512Zm70.64453,30.90039,3.89062.56152V267.86H177.16309v-6.54688l3.77832-.67285-2.39453-7.48242H160.88965l-2.39453,7.48242,3.77832.67285V267.86H143.71777v-6.54688l3.89063-.56152,16.57324-47.36133h11.18555Zm-15.86133-15.6377-6.13574-19.1914h-.22363l-6.13575,19.1914Zm27.1377-25.13965,5.83593,1.123V260.191l-5.83593,1.12207V267.86h22.55859v-6.54688l-5.83594-1.12207V221.09729l5.83594-1.123v-6.584H203.10352Zm63.64941-6.584v6.584l5.83594,1.123v28.918l-.22461.03711-21.99707-36.66211H233.64453v6.584l5.79883,1.123V260.191l-5.79883,1.12207V267.86h22.5586v-6.54688l-5.83594-1.12207V231.235l.22461-.03711L272.58887,267.86h10.88672v-46.7627l5.83593-1.123v-6.584H266.75293Z" fill={color}/>
   </svg>
);
}