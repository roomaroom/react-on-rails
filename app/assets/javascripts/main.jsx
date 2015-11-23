Class Main extend React.Component {
render(){
    return (
      <h1> Hello from the componetn</h1>
    );
  };
}
let documentReady = () => {
  React.render(
  <h1> Hello React </h1>,
  document.getElementById('react')
  );
};
$(documentReady);
