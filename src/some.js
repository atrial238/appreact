function Calculator (){
	this.read =  () =>  {
		this.value1 = prompt('enter yuor first number here', '');
		this.value2 = prompt('enter yuor second number here', '');
	}
	this.sum = () => {
		return this.value1 + this.value2;
	}
	this.mul = () => {
		return this.value1 * this.value2;
	}
}
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );