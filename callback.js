function jajanBoba(uang, seblak) {
    let sisaUang = uang;
    setTimeout(() => {
        let hargaBoba = 5000;
        sisaUang = uang - hargaBoba;
        if (sisaUang <= 0) {
            console.log('Maaf uang kamu belum cukup untuk membeli boba');
            console.log('Sisa uang kamu sebesar ' + uang);
            console.log('\n')
        }
        else {
            console.log('kamu jajan boba dengan harga Rp. ' + hargaBoba);
            console.log('sisa uang kamu adalah Rp. ' + sisaUang)
            console.log('\n')
        } 
    }, 5000)
    
    setTimeout(() => {
        seblak(sisaUang);
    }, 9000)
}

function jajanSeblak(uang) {
    let hargaSeblak = 8000;
    let sisaUang = uang - hargaSeblak;
    if (sisaUang <= 0) {
        console.log('Maaf uang kamu belum cukup untuk membeli boba dan seblak');
        console.log('Sisa uang kamu adalah Rp. ' + uang)
    }
    else {
        console.log('kamu jajan seblak dengan harga Rp. ' + hargaSeblak);
        console.log('sisa uang kamu adalah Rp. ' + sisaUang)
    }
}

// jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
// jajanBoba(4000, jajanSeblak);