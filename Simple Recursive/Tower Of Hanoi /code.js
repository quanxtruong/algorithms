// import visualization libraries {
const { Tracer, Array2DTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');
// }

// define tracer variables {
const towerTracer = new Array2DTracer('Towers Of Hanoi');
const logTracer = new LogTracer('Progress');
// }

let discs = 3; // just change the value of discs and the visuals will reflect how many discs are stacked!
const towers = (function createTowers(N) {
    const startState = Array(N).fill().map(() => Array(3).fill(0));
    for (let k = 1, i = 0; k <= discs; k++, i++) {
        startState[i][0] = k;
    }
    return startState;
}(discs));


function solveHanoi(n, from_rod, to_rod, aux_rod) {
    // Base Case
    if (n === 0) {
        return;
    }
    
    solveHanoi(n - 1, from_rod, aux_rod, to_rod);

    // Logger {
    logTracer.println(`Move disk ${n} from rod ${from_rod} to rod ${to_rod}<br/>`);
    // }

    const fromIndex = parseInt(from_rod, 10) - 1;
    const toIndex = parseInt(to_rod, 10) - 1;
    
    // Find topmost disk: from_rod -> to_rod
    let disk = 0;
    for (let i = 0; i < discs; i++) {
        if (towers[i][fromIndex] !== 0) {
            disk = towers[i][fromIndex];
            towers[i][fromIndex] = 0;
            // visualize the moves {
            towerTracer.select(i,fromIndex);
            Tracer.delay()
            towerTracer.patch(i, fromIndex, 0);
            towerTracer.depatch(i, fromIndex)
            towerTracer.deselect(i,fromIndex);
            // }
            break;
        }
    }
    for (let i = discs - 1; i >= 0; i--) {
        if (towers[i][toIndex] === 0) {
            towers[i][toIndex] = disk;
            // visualize the moves {
            towerTracer.select(i,toIndex);
            Tracer.delay();
            towerTracer.patch(i, toIndex, disk);
            Tracer.delay();
            towerTracer.depatch(i, toIndex);
            Tracer.delay()
            towerTracer.deselect(i,toIndex);
            // }
            break;
        }
    }

    solveHanoi(n - 1, aux_rod, to_rod, from_rod);
}

(function main() {
    // visualize {
    Layout.setRoot(new VerticalLayout([towerTracer, logTracer]));
    towerTracer.set(towers);
    logTracer.println()
    Tracer.delay();
    // }
    solveHanoi(discs, '1', '3', '2');
})();






    
    
    