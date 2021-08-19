const app = {
  fullname: [],
  age: [],
}
const onFormSubmit = (e) => {
  e.preventDefault();

 const name = e.target.element.option.value;

 if (fullname) {
   app.fullname.push(fullname);
   e.target.element.option.value = '';
   console.log(user.Fullname);
  }
rendersubmit();
};

const appRoot =  document.getElementById('app');

const renderSubmit = () => {
  const template = (
  <div>
  <p>Name</p>
  <form onSubmit={onFormSubmit}>
  <input type="text" name="option" />
  </form> 
  <p>Age</p>
  <form onSubmit={onFormSubmit}>
  <input type="number" id="name"/>
  </form>
  <p>Location</p>
  <form onSubmit={onFormSubmit}>
  <input type="text" id="name"/>
  </form>
  <p>Email</p>
  <form onSubmit={onFormSubmit}>
  <input type="mail" id="name"/>
  </form>
  <p>Phone Number</p>
  <form onSubmit={onFormSubmit}>
  <input type="text" id="name"/>
  </form>
  </div>
  )

ReactDOM.render(template,appRoot);
  };
  renderSubmit();