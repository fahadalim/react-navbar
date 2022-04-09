import logo from './logo.svg';
import './App.css';

function App() {
  let datas = ["services"," ","projects"," ","about"]
  return (
    <div className="nav">
      <div className="pic">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABd1BMVEX///8Pe9X80A345Cv72Br71hb8zgn35y////352h38zAj63iL35yP71BP45iz44CQAeNQAdNP4zxsActP8xwD38ZT//PYAbtL/2QD/0wAAddL66aH30B2ZnnwActGmw+n2wBj30IXzjwD65oKYqJr2yhz2uhX55Yf68KHt9PmWvukAddz/3QB3quIAbLz82D27pyb0shH0qg/zogvymgn54ABmouBBj9rX5fMohdixze7646n4x1X1uhXzrRD19fr46VDb6fbA1/BxpuBPlt0Act0AaL/64Eb888r677j9+OL85ZH93HP81Ej3zVDgwi7RtzH47HX36EP59az84mz//Oj562D07bDs347v7unp5MrZxCzTvgDGsBXn0SDr2j3EwWGeqnl4mJReh582d6pGg6xgjaK0ninZz0y7vGlBisiDsd/j00ILbLGusXKhtI9+o6hklbTOv1adoHzBvHNMjcWztYOfp5IAbeXRwWNqjJXbwkt+koyM2OmHAAARmklEQVR4nO2ci0MTRx7Hd6HAQIDsspSQhSbeVVs2IS32bpNs7jQvkEjbs+pV21LQtlarsVSp1rb2j795P/aRLIJEj/naapKdnex89jfze8yCYWhpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaY1C4Ljng+P28FYL9FaOo6tLox7AyATNZufThcUZoUmksbFJ+q8k8gk5MCmdsTj5Wc84vg2/hQLGzueLM4sM29jk2EJajckYFxdWzia+f0F2k9TmjgAP8VsgpojRL/7njOK7fPEDankLmN7Y6irBsxqnBaUJscCZyXMXL/77jOK7ePHyOTJtie1d23jwxeoCZXVBFiZKmmx8wWwQ8btw+Qzj++TCDTgN2bxd3YD6GGLCxM4pwgwhQtTkmsA3k50+u/g+yE5NCXoLC5gNQ3fp0gdElz64JAhiwmIJnMlMTZ07k/gMY218an5K9ghoZl5g5C7KghAvYYKoyao4A+GbvzXqgZy2UKqwdH12flzGh2YtYYeAXb58+RMm+JogxCbI3Qiav5mp+fnZG2cs9oNDvTo/Oz4/L/DhJQ/Cg2ZHyf1DiDBEBLEJCn4Y3/z47LtniR4xvfmpKTF5GTxkdhTd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"></img>
     </div>
      <div className="links">
      {datas.map((e) => {
        return <Navbar data={e} ></Navbar>
      })}
      </div>
      <button>Contact</button>
    </div>
  );
}

function Navbar(props){
  return <div>{props.data}</div>
}


// function Navbar(props){
//   return (
//     <div>
//         <p>
//         {props.data.tag.map((e) => {
//           return {e}
//         })}
//       </p>
//     </div>
//   )
// }

export default App;

// href={props.data.url.map((e)=>{
//   return <p>{e}</p>
// })}


{/* <a href="">{props.data.tag.map((e)=>{
  return <p>{e}</p>
})}</a> */}
