console.log('cocao.js loaded');

(function(){ // wrapping everything within an annonymous function
    var h = '<h3 style="color:brown">Dark Chocolate Survey</h3>'
    h += '<h4 style="color:brown">What % of cocao do you like the most:</h4>'
    h +='<button id="fibButton" type="button" class="btn btn-primary">Generate</button> '
    
    if(typeof(sbmApps)=='function'){ // if sbmApps library was loaded
        sbmApps.render(h)
    }else{ // if fib.js is being called without any help
        var dv = document.createElement('div')
        dv.innerHTML = h
        document.body.appendChild(dv)
    }
     
})()
