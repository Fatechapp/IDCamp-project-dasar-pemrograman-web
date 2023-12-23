document.addEventListener('DOMContentLoaded', function () {

    const profileLink = document.getElementById('profile')
    const profileContent = document.querySelector('.profile')

    const ascensionLink = document.getElementById('ascension')
    const ascensionContent = document.querySelector('.ascension')

    const traceLink = document.getElementById('trace')
    const traceContent = document.querySelector('.trace')

    const eidolonLink = document.getElementById('eidolon')
    const eidolonContent = document.querySelector('.eidolon')

    const buildLink = document.getElementById('build')
    const buildContent = document.querySelector('.build')

    profileLink.addEventListener('click', function (e) {
        e.preventDefault()
        profileContent.scrollIntoView({behavior:"smooth"})
    })
    ascensionLink.addEventListener('click', function (e) {
        e.preventDefault()
        ascensionContent.scrollIntoView({behavior:"smooth"})
    })
    traceLink.addEventListener('click', function (e) {
        e.preventDefault()
        traceContent.scrollIntoView({behavior:"smooth"})
    })
    eidolonLink.addEventListener('click', function (e) {
        e.preventDefault()
        eidolonContent.scrollIntoView({behavior:"smooth"})
    })
    buildLink.addEventListener('click', function (e) {
        e.preventDefault()
        buildContent.scrollIntoView({behavior:"smooth"})
    })

    //SCROLL TO TOP
    const top = document.getElementById('top')
    top.addEventListener('click', function (e) {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: "smooth"})
    })

    //ASCENSION OPTION
    const level1Link = document.getElementById('level1')
    const level20Link = document.getElementById('level20')
    const level30Link = document.getElementById('level30')
    const level40Link = document.getElementById('level40')
    const level50Link = document.getElementById('level50')
    const level60Link = document.getElementById('level60')
    const level70Link = document.getElementById('level70')
    const level80Link = document.getElementById('level80')

    const level1Table = document.getElementById('ascension01')
    const level20Table = document.getElementById('ascension20')
    const level30Table = document.getElementById('ascension30')
    const level40Table = document.getElementById('ascension40')
    const level50Table = document.getElementById('ascension50')
    const level60Table = document.getElementById('ascension60')
    const level70Table = document.getElementById('ascension70')
    const level80Table = document.getElementById('ascension80')

    level1Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.removeAttribute("hidden")
        level20Table.setAttribute("hidden", "")
        level30Table.setAttribute("hidden", "")
        level40Table.setAttribute("hidden", "")
        level50Table.setAttribute("hidden", "")
        level60Table.setAttribute("hidden", "")
        level70Table.setAttribute("hidden", "")
        level80Table.setAttribute("hidden", "")
    })
    level20Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.setAttribute("hidden", "")
        level20Table.removeAttribute("hidden")
        level30Table.setAttribute("hidden", "")
        level40Table.setAttribute("hidden", "")
        level50Table.setAttribute("hidden", "")
        level60Table.setAttribute("hidden", "")
        level70Table.setAttribute("hidden", "")
        level80Table.setAttribute("hidden", "")
    })
    level30Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.setAttribute("hidden", "")
        level20Table.setAttribute("hidden", "")
        level30Table.removeAttribute("hidden")
        level40Table.setAttribute("hidden", "")
        level50Table.setAttribute("hidden", "")
        level60Table.setAttribute("hidden", "")
        level70Table.setAttribute("hidden", "")
        level80Table.setAttribute("hidden", "")
    })
    level40Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.setAttribute("hidden", "")
        level20Table.setAttribute("hidden", "")
        level30Table.setAttribute("hidden", "")
        level40Table.removeAttribute("hidden")
        level50Table.setAttribute("hidden", "")
        level60Table.setAttribute("hidden", "")
        level70Table.setAttribute("hidden", "")
        level80Table.setAttribute("hidden", "")
    })
    level50Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.setAttribute("hidden", "")
        level20Table.setAttribute("hidden", "")
        level30Table.setAttribute("hidden", "")
        level40Table.setAttribute("hidden", "")
        level50Table.removeAttribute("hidden")
        level60Table.setAttribute("hidden", "")
        level70Table.setAttribute("hidden", "")
        level80Table.setAttribute("hidden", "")
    })
    level60Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.setAttribute("hidden", "")
        level20Table.setAttribute("hidden", "")
        level30Table.setAttribute("hidden", "")
        level40Table.setAttribute("hidden", "")
        level50Table.setAttribute("hidden", "")
        level60Table.removeAttribute("hidden")
        level70Table.setAttribute("hidden", "")
        level80Table.setAttribute("hidden", "")
    })
    level70Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.setAttribute("hidden", "")
        level20Table.setAttribute("hidden", "")
        level30Table.setAttribute("hidden", "")
        level40Table.setAttribute("hidden", "")
        level50Table.setAttribute("hidden", "")
        level60Table.setAttribute("hidden", "")
        level70Table.removeAttribute("hidden")
        level80Table.setAttribute("hidden", "")
    })
    level80Link.addEventListener('click', function (e) {
        e.preventDefault()

        level1Table.setAttribute("hidden", "")
        level20Table.setAttribute("hidden", "")
        level30Table.setAttribute("hidden", "")
        level40Table.setAttribute("hidden", "")
        level50Table.setAttribute("hidden", "")
        level60Table.setAttribute("hidden", "")
        level70Table.setAttribute("hidden", "")
        level80Table.removeAttribute("hidden")
    })

    const talentLink = document.getElementById('talent')
    const talentContent = document.querySelector('.perfect-pickoff-content')

    const basicAttackLink = document.getElementById('basic-attack')
    const basicAttackContent = document.querySelector('.farewell-hit-content')

    const ultimateLink = document.getElementById('ultimate')
    const ultimateContent = document.querySelector('.stardust-ace-content')

    const skillLink = document.getElementById('skill')
    const skillContent = document.querySelector('.rip-home-run-content')

    const techniqueLink = document.getElementById('technique')
    const techniqueContent = document.querySelector('.immortal-third-strike-content')

    talentLink.addEventListener('click', function (e) {
        e.preventDefault();

        talentContent.removeAttribute("hidden")
        basicAttackContent.setAttribute("hidden", "")
        ultimateContent.setAttribute("hidden", "")
        skillContent.setAttribute("hidden", "")
        techniqueContent.setAttribute("hidden", "")
    });

    // TRACE
    basicAttackLink.addEventListener('click', function (e) {
        e.preventDefault();

        talentContent.setAttribute("hidden", "")
        basicAttackContent.removeAttribute("hidden")
        ultimateContent.setAttribute("hidden", "")
        skillContent.setAttribute("hidden", "")
        techniqueContent.setAttribute("hidden", "")
    });

    ultimateLink.addEventListener('click', function (e) {
        e.preventDefault();

        talentContent.setAttribute("hidden", "")
        basicAttackContent.setAttribute("hidden", "")
        ultimateContent.removeAttribute("hidden")
        skillContent.setAttribute("hidden", "")
        techniqueContent.setAttribute("hidden", "")
    });

    skillLink.addEventListener('click', function (e) {
        e.preventDefault();

        talentContent.setAttribute("hidden", "")
        basicAttackContent.setAttribute("hidden", "")
        ultimateContent.setAttribute("hidden", "")
        skillContent.removeAttribute("hidden")
        techniqueContent.setAttribute("hidden", "")
    });

    techniqueLink.addEventListener('click', function (e) {
        e.preventDefault();

        talentContent.setAttribute("hidden", "")
        basicAttackContent.setAttribute("hidden", "")
        ultimateContent.setAttribute("hidden", "")
        skillContent.setAttribute("hidden", "")
        techniqueContent.removeAttribute("hidden")
    });

    // EIDOLON
    const aFallingStarLink = document.getElementById('aFallingStar');
    const aFallingStarContent = document.querySelector('.a-falling-star');

    const anUnwillingWillLink = document.getElementById('anUnwillingWill');
    const anUnwillingWillContent = document.querySelector('.an-unwilling-host');

    const aLeadingWhisperLink = document.getElementById('aLeadingWhisper');
    const aLeadingWhisperContent = document.querySelector('.a-leading-whisper');

    const aTrailblazingWillLink = document.getElementById('aTrailblazingWill');
    const aTrailblazingWillContent = document.querySelector('.a-trailblazing-will');

    const aSurvivingHopeLink = document.getElementById('aSurvivingHope');
    const aSurvivingHopeContent = document.querySelector('.a-surviving-hope');

    const aDestructingGlanceLink = document.getElementById('aDestructingGlance');
    const aDestructingGlanceContent = document.querySelector('.a-destructing-glance');

    aFallingStarLink.addEventListener('click', function (e) {
        e.preventDefault()

        aFallingStarContent.removeAttribute("hidden")
        anUnwillingWillContent.setAttribute("hidden", "")
        aLeadingWhisperContent.setAttribute("hidden", "")
        aTrailblazingWillContent.setAttribute("hidden", "")
        aSurvivingHopeContent.setAttribute("hidden", "")
        aDestructingGlanceContent.setAttribute("hidden", "")
    })
    anUnwillingWillLink.addEventListener('click', function (e) {
        e.preventDefault()

        aFallingStarContent.setAttribute("hidden", "")
        anUnwillingWillContent.removeAttribute("hidden")
        aLeadingWhisperContent.setAttribute("hidden", "")
        aTrailblazingWillContent.setAttribute("hidden", "")
        aSurvivingHopeContent.setAttribute("hidden", "")
        aDestructingGlanceContent.setAttribute("hidden", "")
    })
    aLeadingWhisperLink.addEventListener('click', function (e) {
        e.preventDefault();

        aFallingStarContent.setAttribute("hidden", "");
        anUnwillingWillContent.setAttribute("hidden", "");
        aLeadingWhisperContent.removeAttribute("hidden");
        aTrailblazingWillContent.setAttribute("hidden", "");
        aSurvivingHopeContent.setAttribute("hidden", "");
        aDestructingGlanceContent.setAttribute("hidden", "");
    });

    aTrailblazingWillLink.addEventListener('click', function (e) {
        e.preventDefault();

        aFallingStarContent.setAttribute("hidden", "");
        anUnwillingWillContent.setAttribute("hidden", "");
        aLeadingWhisperContent.setAttribute("hidden", "");
        aTrailblazingWillContent.removeAttribute("hidden");
        aSurvivingHopeContent.setAttribute("hidden", "");
        aDestructingGlanceContent.setAttribute("hidden", "");
    });

    aSurvivingHopeLink.addEventListener('click', function (e) {
        e.preventDefault();

        aFallingStarContent.setAttribute("hidden", "");
        anUnwillingWillContent.setAttribute("hidden", "");
        aLeadingWhisperContent.setAttribute("hidden", "");
        aTrailblazingWillContent.setAttribute("hidden", "");
        aSurvivingHopeContent.removeAttribute("hidden");
        aDestructingGlanceContent.setAttribute("hidden", "");
    });

    aDestructingGlanceLink.addEventListener('click', function (e) {
        e.preventDefault();

        aFallingStarContent.setAttribute("hidden", "");
        anUnwillingWillContent.setAttribute("hidden", "");
        aLeadingWhisperContent.setAttribute("hidden", "");
        aTrailblazingWillContent.setAttribute("hidden", "");
        aSurvivingHopeContent.setAttribute("hidden", "");
        aDestructingGlanceContent.removeAttribute("hidden");
    });
})
