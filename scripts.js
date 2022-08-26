window.dispatchEvent( 
    new CustomEvent('course/form-fill', {
        detail: 'client information auto fill'
    }) 
)


setTimeout(() => {
    window.dispatchEvent( 
        new CustomEvent('course/form-submit', {
            detail: 'client data'
        }) 
    )
}, 4000)