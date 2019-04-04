
// Section 2: Stop-watch Exercise
// function SW() {
    
//     let startTime, endTime, running, duration = 0;

//     this.start = function() { 
//         if (running)
//             throw new Error('Stopwatch already started.');

//         running = true;

//         startTime = new Date();
//     };

//     this.stop = function() { 
//         if (!running)
//             throw new Error('Stopwatch already stopped.');

//         running = false;

//         endTime = new Date();

//         const seconds = (endTime.getTime() - startTime.getTime())/1000;

//         duration += seconds;
//     };

//     this.Reset = function() {
//         duration = 0;
//         startTime = null;
//         endTime = null;
//         running = null;
//     };

//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration; }
//     });
// }

// Section 3: Example of "Premature Optimizatiion is the root of all evils"
// function Stopwatch() {
    
//     let startTime, endTime, running = false, duration = 0;

//     Object.defineProperty(this, 'startTime', {
//         get: function() { return startTime; },
//         set: function(value) { startTime = value; }
//     });

//     Object.defineProperty(this, 'endTime', {
//         get: function() { return endTime; },
//         set: function(value) { endTime = value; }
//     });

//     Object.defineProperty(this, 'running', {
//         get: function() { return running; },
//         set: function(value) { running = value; }
//     });

//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration; },
//         set: function(value) { duration = value; }
//     });
// }

// Stopwatch.prototype.start = function() { 
//     if (this.running)
//         throw new Error('Stopwatch already started.');

//     this.running = true;

//     this.startTime = new Date();
// };

// Stopwatch.prototype.stop = function() { 
//     if (!this.running)
//         throw new Error('Stopwatch already stopped.');

//     this.running = false;

//     this.endTime = new Date();

//     const seconds = (this.endTime.getTime() - this.startTime.getTime())/1000;

//     this.duration += seconds;
// };

// Stopwatch.prototype.Reset = function() {
//     this.duration = 0;
//     this.startTime = null;
//     this.endTime = null;
//     this.running = null;
// };


// Section 4 : Prototypical Inheritance
// function extend(Child, Parent)
// {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }

// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle(radius, color) {
//     this.raidus = radius;
//     Shape.call(this, color);
// }

// extend(Circle, Shape);

// Circle.prototype.draw = function () {
//     console.log('draw');
// }

// Circle.prototype.duplicate = function() {
//     Shape.prototype.duplicate.call(this);
//     console.log('duplicate circle');
// }

// function Square(size) {
//     this.size = size;
// }

// extend(Square, Shape);

// const s = new Shape();
// const c = new Circle(1, "red");



// Section 4 - Exercise 1

function HTMLElement () {
    this.click = function () {
        console.log('clicked');
    };
}

HTMLElement.prototype.focus = function () {
    console.log('focused');
}


function HTMLSelectElement (items = []) {
    this.items = items;

    this.addItem = function(item) {
        items.addItem(item);
    }

    this.removeItem = function(item) {
        items.splice(this.items.indexof(item), 1);
    }

    this.render = function() {
        return `
            <select>${this.items.map(item => `
                <option>${item}</option>`).join('')}
            </select>
        `;
    }
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;



function HTMLImageElement(src) {
    this.src = src;

    this.render = function() {
        return `<img src=${src} />`;
    }
}

HTMLImageElement.prototype = new HTMLElement();
HTMLImageElement.prototype.constructor = HTMLImageElement;


const elements = [
    new HTMLSelectElement([1,2,3]),
    new HTMLImageElement('http://')
];

for (let element of elements)
{
    console.log(element.render());
}














