import './index.css'

function CostumBtn(props){

	function myOtherAlert(props){
		alert("você clicou no botão: " + (props.className));
	}
	
	return <button className={props.className} onClick = {myOtherAlert}> Button {props.className}</button>

}



function Exercicio3() {
	return (
	<>
	<div className="Btn__container--ex3">
	<CostumBtn className="1" />
	<CostumBtn className="2" />
	<CostumBtn className="3" />
	</div>
	</>
)
}

export default Exercicio3
