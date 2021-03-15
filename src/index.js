
exports.min = function min (array) {
    if(array){
        if(array.length > 0){
            let minValue = 0;
            for(let i = 0; i < array.length; i++){
                if(array[i] < minValue){
                    minValue = array[i];
                }
            }
            return minValue;
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}

exports.max = function max (array) {
    if(array){
        if(array.length > 0) {
            let maxValue = 0;
            for(let i = 0; i < array.length; i++){
                if(array[i] > maxValue){
                    maxValue = array[i];
                }
            }
            return maxValue;
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}

exports.avg = function avg (array) {
    if(array){
        if (array.length > 0){
            let sum = 0;
            let n = 0;
            if(array.length > 0){
                for(let i = 0; i < array.length; i++){
                    sum += array[i];
                    n++;
                }
            }
            return sum / n;
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}
