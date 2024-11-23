new TypeIt("#t1")
    .options({likelife: true})
    .type("Hello,").break()
    .pause(1500)
    .type("Nice to meet you,").break()
    .pause(1500)
    .type("I hope you enjoy your stay!")
    .go();

new TypeIt("#t2")
.options({likelife: true})
.go();
