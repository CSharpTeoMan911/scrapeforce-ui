let deviceDetectorIntervalId:NodeJS.Timeout; 
let started:Boolean= false;
let isMobile = false;


function portableSize(w:number, h:number):Boolean{
    return w <= 1200 && h <= 2000;
}

function deviceDetector(){
    const coarse = matchMedia("(pointer: coarse)").matches;
    const noHover = matchMedia("(hover: none)").matches;
    
    if(portableSize(window.innerWidth, window.innerHeight)){
        if(navigator.maxTouchPoints >= 1){
            if(coarse && noHover){
                isMobile = true;
            }
        }
    }

    isMobile = false;
}


export function startDeviceDetector(){
    if(!started){
        started = true;
        deviceDetectorIntervalId = setInterval(deviceDetector, 100);
    }
}

export function stopDeviceDetector(){
    if(started){
        clearInterval(deviceDetectorIntervalId);
    }
}

export function detectDevice():Boolean{
    return isMobile;
}

