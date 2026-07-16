#effects{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    pointer-events:none;
    z-index:1;
}

.item{
    position:absolute;
    top:-50px;
    animation:fall linear forwards;
}

@keyframes fall{
    0%{
        transform:translateY(-50px) rotate(0deg);
        opacity:1;
    }

    100%{
        transform:translateY(110vh) rotate(360deg);
        opacity:0.8;
    }
}
