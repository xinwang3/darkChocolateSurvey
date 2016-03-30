console.log('cocao.js loaded');

(function(){ // wrapping everything within an annonymous function
    var h = '<h3 style="color:navy">Fibonacci generator</h3>'
    h +='<button id="fibButton" type="button" class="btn btn-primary">Generate</button> '
    
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(h)
    }else{ // if fib.js is being called without any help
        var dv = document.createElement('div')
        dv.innerHTML = h
        document.body.appendChild(dv)
    }
     
})()
