////////////////////////////////////////////////////////////////////////////////// Instructions
////////////////////////////////////////////////////////////////////////////////
function Instructions(props) {

  const titleInstructions = (
    <h2 className="consignes__title">Consignes</h2> 
  );

  const listInstructions = (
    <ul className="consignes__list">
      {props.instructions.map(instruction => (
        <li key={instruction.id}>{instruction.content}</li>
      ))}
    </ul>
  );

  return (
    <div className="consignes__content">
      {titleInstructions}
      {listInstructions}
    </div>
  );
}

const instructions = [
  {
    id: 1,
    content: 'Pour obtenir la valeur X, on multiplie la valeur 1 par la valeur 2, puis on divise le resultat par la valeur 3.'
  }
]

function Down() {
  return <span>&darr;</span>
}

function Up() {
  return <span>&uarr;</span>
}

class ToggleInstructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div
          className={
            this.state.isToggleOn
              ? "consignes"
              : "consignes is-down"
          }
        >
          <Instructions instructions={instructions} />
          <button  
            type="button" 
            class="btn btn-consignes" 
            onClick={this.handleClick}>
          {this.state.isToggleOn ? (
              <Down />
          ) : (
              <Up />
          )}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <ToggleInstructions />, 
  document.getElementById('instructions')
);

////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////