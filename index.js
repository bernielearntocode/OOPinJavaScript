
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


function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        conosle.log('draw');
    }
}

const c1 = new Circle(1);
const c2 = new Circle(2);