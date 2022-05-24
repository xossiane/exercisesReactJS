

function BtnOnClick(props) {
  function myAlert(props){
    alert("Você clicou aqui!" )
  }

    return (
      <button onClick={props.event}>{props.children}</button>

  )
}

export default BtnOnClick;