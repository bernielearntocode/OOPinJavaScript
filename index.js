
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
function Stopwatch() {
    
    let startTime, endTime, running = false, duration = 0;

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; },
        set: function(value) { startTime = value; }
    });

    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; },
        set: function(value) { endTime = value; }
    });

    Object.defineProperty(this, 'running', {
        get: function() { return running; },
        set: function(value) { running = value; }
    });

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; }
    });
}

Stopwatch.prototype.start = function() { 
    if (this.running)
        throw new Error('Stopwatch already started.');

    this.running = true;

    this.startTime = new Date();
};

Stopwatch.prototype.stop = function() { 
    if (!this.running)
        throw new Error('Stopwatch already stopped.');

    this.running = false;

    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime())/1000;

    this.duration += seconds;
};

Stopwatch.prototype.Reset = function() {
    this.duration = 0;
    this.startTime = null;
    this.endTime = null;
    this.running = null;
};
