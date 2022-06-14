//created a object that holds key values of a computer
const computer = {
    id: 1,
    manufacturer: "Apple",
    make: "Macbook",
    model: "Pro",
    specs: {
        memory: 32,
        hardDrive: "500 GB",
        processor: 2.4
    }
}
//created a function to interpolate the the data from the computer object
const computerHTMLMaker = (computerObject) => {
    const computerHTML = `
    <section>id="computer--${computer.id}
	<div>manufacturer: ${computer.manufacturer}</div>
	<div>make: ${computer.make}</div>
	<div>model: ${computer.model}</div>
	<div>memory: ${computer.specs.memory}</div>
	<div>hardDrive: ${computer.specs.hardDrive}</div>
	<div>processor: ${computer.specs.processor}</div>\n</section>`
    return computerHTML
}

console.log(computerHTMLMaker())