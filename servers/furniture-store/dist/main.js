$(`.btn`).on('click', function(){
    const name = $('input').val()
    if(!name){
        return
    }
    $.ajax({
        method:'get',
        url:`/priceCheck/${name}`,
        success:function(res){ 
            if(res.price != "null")
                $('body').append(`<p>${name} costs : ${res.price} $</p>`)
            else
                $('body').append(`<p>${name} is not in store</p>`)
        }
        
    });
})
    
$(`.btn2`).on('click', function(){
    const name = $('input').val()
    if(!name){
        return
    }
    $.ajax({
        method:'get',
        url:`/buy/${name}`,
        success:function(res){ 
            $('body').append(`<p>deal has been : ${res.deal}</p>`)
        }
        
    });
})