// import _ from 'lodash';
// import printMe from './print.js';
// import './style.css';
// import Icon from './icon.jpg';
// import Data from './data.json';
// import h from './h.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
    
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  // console.log(Data);

  btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  element.appendChild(btn);

  btn.onclick = function() {
    import(/* webpackChunkName: "print" */ './print')
    .then(function(module) {
      const printMe = module.default;

      printMe();
    });
  };
    
  return element;

  // return import(/* webpackChunkName: "lodash" */ 'lodash').then(function(_) {
  //   const element = document.createElement('div');
  //   const btn = document.createElement('button');

  //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  //   btn.innerHTML = 'Click me and check the console!';
  //   btn.onclick = printMe;

  //   element.appendChild(btn);

  //   return element;
  // }).catch(function(error) {
  //   console.log('An error occurred while loading the component')
  // });
}

document.body.appendChild(component());
// var element = component();
// document.body.appendChild(element);

// if(process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }

// component().then(function(component) {
//    document.body.appendChild(component);
//  });