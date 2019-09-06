function loopPrint (numLoops)
{
    var text = document.getElementById('outputWrapper');
    var output = '';
    for (let i = 0; i < numLoops; i ++)
        {
            console.log(i);
            output += '<span class="outputstream">Output loop #' + (i + 1) + '</span><br/><br/>';
        }
    text.innerHTML = output;
}
function main() 
{
    
    //reads sequence of numbers input
    var x = document.getElementById("in1").value;
    x = Array.prototype.slice.call(x);
    //reads number of loops input
    var numLoops = document.getElementById("loops").value;
    output = x.sort()
    //this will display the sorted sequence
    document.getElementById("output").innerHTML = output;
    //this calls loopPrint which will print a statement numLoops times
    loopPrint(numLoops);
}
