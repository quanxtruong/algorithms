// import visualization libraries {
const { Tracer, Array2DTracer, LogTracer, Layout, VerticalLayout } = require('algorithm-visualizer');
// }

// define tracer variables {
const towerTracer = new Array2DTracer('Towers Of Hanoi');
const logTracer = new LogTracer('Progress');
// }

let disks = 4; // just change the value of disks, build, and then the visuals will reflect how many disks are stacked!
const towers = (function createTowers(N) {
    const startState = Array(N).fill().map(() => Array(3).fill(0));
    for (let k = 1, i = 0; k <= disks; k++, i++) {
        startState[i][0] = k;
    }
    return startState;
}(disks));

// Logger {
logTracer.println("Tower of Hanoi Puzzle: Each column represents one of the three rods");
logTracer.println("                       Smaller valued \"disks\" cannot stack on bigger valued \"disks\"");
logTracer.println("-------------------------------------------------------------------");
logTracer.println("Solution with " + disks + " disks:");
// }

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
    for (let i = 0; i < disks; i++) {
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
    for (let i = disks - 1; i >= 0; i--) {
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
    Tracer.delay();
    logTracer.println("Starting execution");
    logTracer.println("------------------");
    // }
    solveHanoi(disks, '1', '3', '2');
})();

    
    
    
    
    
    
    
    