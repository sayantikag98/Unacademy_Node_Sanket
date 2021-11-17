const binarySearch = (arr, tar) => {
    let low = 0, high = arr.length - 1, flag = false, tarIndex = -1;

    while(low<=high){
        let mid = Math.floor(low + (high - low) / 2); // without math.floor mid can be a decimal value
        if(arr[mid] === tar){
            flag = true;
            tarIndex = mid;
            break;
        }
        else if (arr[mid] > tar){
            high = mid - 1;
        }
        else{
            low = mid + 1;
        }
    }

    if(flag){
        console.log(`Element ${tar} is found at index ${tarIndex} in the given array`);
    }
    else{
        console.log(`Element ${tar} not found in the given array`);
    }
}

export default binarySearch;

