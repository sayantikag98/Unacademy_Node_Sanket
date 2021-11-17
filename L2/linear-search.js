const linearSearch = (arr, tar) => {
    let flag = false, tarIndex = -1;

    for(ind in arr){
        if(tar === arr[ind]){
            tarIndex = ind;
            flag = true;
            break;
        }
    }

    if(flag){
        console.log(`Element ${tar} is found at index ${tarIndex}`);
    }
    else{
        console.log(`Element ${tar} not found`);
    }
}

module.exports = linearSearch;