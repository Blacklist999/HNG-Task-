let count = 0;
 const addOne = () =>{
   count ++;
   rendercounterApp();
 };
 const minusOne = () => {
   count --;
   rendercounterApp();
 };
 const reset = () => {
   count = 0;
   rendercounterApp();
 };
 
 const appRoot =  document.getElementById('app');

const rendercounterApp = () => {
const templateTwo = (
  <div>
 <h1> Count: {count} </h1>
 <button onClick={addOne}>+1</button>
 <button onClick={minusOne}>-1</button>
 <button onClick={reset}>reset</button>
  </div>
  );

ReactDOM.render(templateTwo,appRoot); 
};
rendercounterApp();