let visibility = false;

const toggleVisiblility = () => {
  visibility = !visibility;
  render();
}

 

const render = () => {
 const templateThree = (
    <div>
    <h1> Visibility Toggle</h1>
    <button onClick={toggleVisiblility}>
    {visibility? 'Hide Details': 'Show Details'}
    </button>
    {visibility && (
      <div>
        <p> Hey.These are some details you can now see!</p>
      </div>
    )}
    </div>
  );

  ReactDOM.render(templateThree,document.getElementById('app'));
};

 render();