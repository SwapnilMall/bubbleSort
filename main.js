// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
  var noSwaps;
  const swap = (arr, idx1, idx2) => {
   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        // Swap 
        swap(arr, j, j + 1);
        
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
