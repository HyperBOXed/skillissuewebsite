let rndInt;
let rndInt4;
let rndInt3 = Math.floor(Math.random() * 3) + 1
let rndInt3_2 = Math.floor(Math.random() * 3) + 1
let rndInt3_3 = Math.floor(Math.random() * 3) + 1
let globalink = "";
let songid = -1;
let rolls = 0;
let gifsfound=[];
gifsfound[0]=0;//rainbow gifs
gifsfound[1]=0;//gold gifs
const gifs = [
   "https://c.tenor.com/-vMOXffAulEAAAAC/demoman-heavy.gif",
   "https://c.tenor.com/UGJPIFeOmGkAAAAS/sniff-cat.gif",
   "https://c.tenor.com/vN9EaApDdqgAAAAS/cat-licking-itself-what.gif",
   "https://c.tenor.com/kHcmsxlKHEAAAAAS/rock-one-eyebrow-raised-rock-staring.gif",
   "https://c.tenor.com/Jdyr2ri6saYAAAAS/tf2-tf2spy.gif",
   "https://c.tenor.com/2bAKt_bnAYMAAAAd/press-f-mg.gif",
   "https://c.tenor.com/zX7kepKhmHYAAAAC/cryptid-county-kel-omori.gif",
   "https://c.tenor.com/ckMRF2IunhwAAAAC/money-shutup.gif",
   "https://c.tenor.com/RxYW48v56xcAAAAC/oh-no-our-table-table.gif",
   "https://media.discordapp.net/attachments/843635521644920862/957830182281048084/45653BD0-B3CA-4684-BF06-5AB1F44E21E1.gif",
   "https://c.tenor.com/FIkSGbGycmAAAAAS/manly-roblox.gif",
   "https://c.tenor.com/pNm5E65WIy0AAAAS/monkey-monkey-keyboard.gif",
   "https://c.tenor.com/yEoTcIolvX8AAAAd/nah-he-dont-bite-you-good-black-ops1.gif",
   "https://c.tenor.com/HcYfpVjOSvMAAAAd/%D0%BD%D0%BE%D0%B2%D0%BE%D0%B4%D0%B2%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F-%D0%BA%D0%B8%D1%80%D0%BF%D0%B8%D1%87.gif",
   "https://c.tenor.com/Y2GreNqcBbIAAAAS/phonk-spinning.gif",
   "https://c.tenor.com/bK1qpWGyQKkAAAAd/kitty.gif",
   "https://c.tenor.com/JsrjRALTMWkAAAAd/tf2.gif",
   "https://c.tenor.com/N9yNDTEPQ5AAAAAS/giga-chad.gif",
   "https://c.tenor.com/laSBfhRhTEYAAAAS/guy-arguing.gif",
   "https://c.tenor.com/WRqKPClDr5EAAAAS/cat-thumbs-up-middle-finger.gif",
   "https://media.discordapp.net/attachments/786792234200596521/946526940301504532/shtop_it.gif",
   "https://c.tenor.com/uDXN9Sje-A0AAAAS/skeleton-spinning.gif",
   "https://media.discordapp.net/attachments/589292970541318185/933762249280061460/4D9FDB8F-FCE2-43AD-A3B3-0A003E870BB1.gif",
   "https://c.tenor.com/0fN8vks2-bwAAAAC/this-is-my-kingdom-cum-cum.gif",
   "https://media.discordapp.net/attachments/748311625475293375/847724077674135582/image0-4.gif",
   "https://c.tenor.com/vtzIFx9gECcAAAAS/spin-snow-golem.gif",
   "https://media.discordapp.net/attachments/903375974857588809/932342756297277480/3x_3.gif",
   "https://c.tenor.com/ERtgiOLcRzIAAAAC/youre-youre-correction.gif",
   "https://c.tenor.com/s5FIe_do3HIAAAAS/%D0%BA%D0%BE%D1%82-%D1%87%D0%B0%D0%B2%D0%BA%D0%B0%D0%B5%D1%82.gif",
   "https://c.tenor.com/9Cxp0u8jEjMAAAAS/meme-franzj.gif",
   "https://c.tenor.com/QVKq-Hqux68AAAAS/tds-tower-defense-simulator.gif",
   "https://c.tenor.com/Op3LwU9H-A0AAAAS/thundey-sublime.gif",
   "https://c.tenor.com/jIx11IXumMUAAAAC/neo-neonomi.gif",
   "https://c.tenor.com/RxTWW9ZwL5MAAAAC/john-roblox-laugh.gif",
   "https://c.tenor.com/HVlPWCQEYhEAAAAS/tf2-tf2spy.gif",
   "https://c.tenor.com/s814ua5DkSEAAAAS/cult-of-the-lamb-lamb.gif",
   "https://media.discordapp.net/attachments/721155811468116038/905826055187746896/image0-4.gif",
   "https://c.tenor.com/XX2n35R7YCoAAAAC/aneurysm-hhhhomeboyyyy.gif",
   "https://c.tenor.com/xU3lJiBoe54AAAAC/tomato-sad.gif",
   "https://c.tenor.com/fsuem4kUNF0AAAAd/omori-sunny-omori.gif",
   "https://c.tenor.com/qO02XBxrPcsAAAAS/star-wars-rey.gif",
   "https://c.tenor.com/-vMOXffAulEAAAAC/demoman-heavy.gif",
   "https://c.tenor.com/LL_EW9fHwlUAAAAd/frog-kick-flip.gif",
   "https://c.tenor.com/rKegVC59IAwAAAAd/spamton-spamton-neo.gif",
   "https://c.tenor.com/6lUAt2ncqu0AAAAd/spamton-deltarune.gif",
   "https://c.tenor.com/SrV7OaYPo7sAAAAC/mgs-snake.gif",
   "https://c.tenor.com/wxH1bIQG3B4AAAAS/turi-turi-ip-ip.gif",
   "https://c.tenor.com/CowGNQSUsOYAAAAC/confused-math.gif",
   "https://c.tenor.com/QItU_DupMVoAAAAd/hi-deniz-deniz.gif",
   "https://c.tenor.com/nt1FxZrs3LoAAAAC/demoman-dance-demoman.gif",
   "https://c.tenor.com/cnpZYdQA_pYAAAAC/explaining.gif",
   "https://c.tenor.com/Ow6kKhsT7dgAAAAC/pppoof.gif",
   "https://media.discordapp.net/attachments/967491952121610260/974771326273335306/1CBA5885-F894-4D7F-8BAB-68987B44149F.gif",
   "https://c.tenor.com/Lfe0ZD2fP-AAAAAd/omori-omori-sunny.gif",
   "https://c.tenor.com/6UgrLG8G4L4AAAAd/fizza-smile.gif",
   "https://c.tenor.com/mb5eiIwjJxAAAAAC/trombone-pusheen.gif",
   "https://c.tenor.com/QYF5rhzTwWMAAAAd/cock-balls.gif",
   "https://c.tenor.com/PoRYaMzvaO8AAAAC/cat-playing-piano-funny.gif",
   "https://c.tenor.com/KdvakdzjNTsAAAAd/omori-mari.gif",
   "https://c.tenor.com/VGWokGdwt-EAAAAS/the-voices-voices-in-my-head.gif",
   "https://c.tenor.com/wSpshHFQpV0AAAAS/floppa-big-floppa.gif",
   "https://media.discordapp.net/attachments/713466028428099645/927514642283118602/20211004_125525.gif",
   "https://media.discordapp.net/attachments/750654721949433867/820405002756685884/Band-1-1.gif",
   "https://c.tenor.com/yoZkXTZAkMsAAAAC/nereznya-reznya.gif",
   "https://c.tenor.com/RP_qoKH85xgAAAAS/the-rock-sus-the-rock-meme.gif",
   "https://c.tenor.com/G-ImeupyxmIAAAAd/eating-the-chip-chips.gif",
   "https://c.tenor.com/UNsLn7iQxfEAAAAS/among-us-anong-us-drip.gif",
   "https://c.tenor.com/JYbSC6-L474AAAAC/among-us-drip.gif",
   "https://c.tenor.com/HNbrngaH3zoAAAAS/amongla-swag.gif",
   "https://c.tenor.com/KFZQqKXcujIAAAAS/minecraft-dead-chat.gif",
   "https://c.tenor.com/FFYqOVVbrJAAAAAS/markiplier-punch.gif"
    ];

    var arrayShuffle = function(array) {
        for ( var i = 0, length = array.length, swap = 0, temp = ''; i < length; i++ ) {
           swap        = Math.floor(Math.random() * (i + 1));
           temp        = array[swap];
           array[swap] = array[i];
           array[i]    = temp;
        }
        return array;
     };
     
     var percentageChance = function(values, chances) {
        for ( var i = 0, pool = []; i < chances.length; i++ ) {
           for ( var i2 = 0; i2 < chances[i]; i2++) {
              pool.push(i);
           }
        }
        return values[arrayShuffle(pool)['0']];
     };

    console.log(gifs.length)
let rndIntRainbow;
let rndInt2;
//console.log(rndInt2)
let cr_par = document.querySelectorAll(".cringe");
let cr = document.querySelectorAll(".cringe img");
let crdiv = document.querySelectorAll(".cringe .yo");

function rerollChances() {
    rndIntRainbow = percentageChance([true, false],[1,200]);
    rndInt = Math.floor(Math.random() * 100) + 1 //snegovik pasha
    rndInt4 = Math.floor(Math.random() * 33) + 1 //aubergine markiplier jumpscare
    rndInt2 = Math.floor(Math.random() * gifs.length) + 1;
}
var audio = new Audio();
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
function playshit(arg,arg1) {
    cr[arg1].insertAdjacentHTML("beforebegin",'<div class="oh"><img id="hpimg" src="./imagez/g231-hero.png" draggable="false"></div>');
    console.log("eys "+arg);
    document.body.click();
    setTimeout(() => {
        switch(arg) {
            case 0:
                audio.src="./muzica/downunder.mp3";
                audio.play();
                break;
        }
    }, 100);
}
document.body.querySelector("#h1rolls").innerHTML="Total rolls: 9999";
//randomize();
function randomize() {
    rolls++;
    audio.pause();
    audio.src="";
    for (var i=0; i<cr.length; i++) {
        if (crdiv[i]!=undefined) {
            crdiv[i].classList.remove("rainbowdiv");
            cr[i].classList.remove("rainbow");
        }
        if (cr_par[i].querySelector(".oh")!=undefined) {
            cr_par[i].removeChild(cr_par[i].querySelector(".oh"));
        }
        //let link = gifs[rndInt2];
        var link = percentageChance([gifs[rndInt2], 'https://cdn.discordapp.com/attachments/919602287498887190/1012272924281024612/ezgif.com-gif-maker_1.gif',"https://c.tenor.com/-WFVGDXbsicAAAAC/ultrakill-minos-prime.gif",], [597.5, 1, 1.5]);
        if (link=="https://c.tenor.com/nt1FxZrs3LoAAAAC/demoman-dance-demoman.gif") {
            songid=0;
            playshit(songid,i);    
        }
        rerollChances();
        cringefunc(i,link);
        if (link==undefined) {
            rerollChances();
            link = percentageChance([gifs[rndInt2], 'https://cdn.discordapp.com/attachments/919602287498887190/1012272924281024612/ezgif.com-gif-maker_1.gif',"https://c.tenor.com/-WFVGDXbsicAAAAC/ultrakill-minos-prime.gif",], [597.5, 1, 1.5]);
            cringefunc(i,link);
        }
    }
    document.body.querySelector("#h1rolls").innerHTML="Rolls made: "+(rolls)+".<br>Rainbow GIFs found: "+gifsfound[0]+"<br>Total rolls: 9999";
}
function randomizeXL() {
    for (var a=0; a<10; a++) {
        rolls++;
    audio.pause();
    audio.src="";
    for (var i=0; i<cr.length; i++) {
        crdiv[i].classList.remove("rainbowdiv");
        cr[i].classList.remove("rainbow");
        //let link = gifs[rndInt2];
        var link = percentageChance([gifs[rndInt2], 'https://cdn.discordapp.com/attachments/919602287498887190/1012272924281024612/ezgif.com-gif-maker_1.gif',"https://c.tenor.com/-WFVGDXbsicAAAAC/ultrakill-minos-prime.gif"], [97.5, 1, 1.5]);
        if (link=="https://c.tenor.com/nt1FxZrs3LoAAAAC/demoman-dance-demoman.gif") {
            songid=0;
            playshit(songid,i);    
        }
        rerollChances();
        cringefunc(i,link);
        if (link==undefined) {
            rerollChances();
            link = percentageChance([gifs[rndInt2], 'https://cdn.discordapp.com/attachments/919602287498887190/1012272924281024612/ezgif.com-gif-maker_1.gif',"https://c.tenor.com/-WFVGDXbsicAAAAC/ultrakill-minos-prime.gif"], [97.5, 1, 1.5]);
            cringefunc(i,link);
        }
    }
    document.body.querySelector("#h1rolls").innerHTML="Rolls made: "+(rolls)+".<br>Rainbow GIFs found: "+gifsfound[0]+"<br>Total rolls: 9999";
    }
}
function cringefunc(arg,url) {
    if (url=="https://c.tenor.com/FFYqOVVbrJAAAAAS/markiplier-punch.gif") {
        url = percentageChance(["https://c.tenor.com/Wy9pLwPx8TQAAAAC/aubergine-markiplier.gif",url],[20,80]);
    }
    globalink=url;
    cr[arg].setAttribute("src",url);
    if (rndIntRainbow) {
        gifsfound[0]++;
        cr[arg].classList.add("rainbow");
        crdiv[arg].classList.add("rainbowdiv");
    }
    /*if (rndInt==1) {
        cr[arg].setAttribute("src","https://media.discordapp.net/attachments/919602287498887190/1010990209292308521/t63456w457w4t64yt.gif");
    }
    if (rndIntRainbow==1) {
        cr[arg].classList.add("rainbow");
    }
    if (rndInt4==1) {
        cr[arg].setAttribute("src","https://c.tenor.com/Wy9pLwPx8TQAAAAC/aubergine-markiplier.gif");
    }*/
    /*for ( var i = 0; i < 20; i++ ) {
        console.log(percentageChance(['hi', 'test', 'bye'], [80, 15, 5]));
     }*/
}
let date = new Date();
let d_hours = date.getHours();
if (d_hours>=5&&d_hours<20) {
    document.body.style="color: rgb(0,0,0);";
    document.body.querySelectorAll("#rollbtn").forEach(btn => {
        btn.classList.remove("rollbtndark");
        btn.classList.add("rollbtnlight");
    });
    document.body.style.backgroundImage='url("./imagez/DITHEREDACTUALLIGHTTHEMEtextedphon.png")';
}else{
    document.body.style="color: rgb(215,215,215);";
    document.body.querySelectorAll("#rollbtn").forEach(btn => {
        btn.classList.remove("rollbtnlight");
        btn.classList.add("rollbtndark");
    });
    document.body.style.backgroundImage='url("./imagez/DITHEREDACTUALDARKTHEMEphontexted.png")';
}
