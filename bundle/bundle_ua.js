import * as _Unittype from "../classes/Unittype.js"


const [ Unittype ] = [ _Unittype ]
.map( module => Object.assign( {}, module.default ) )







Unittype.__proto__.info = "Основний клас для створення юнітів."
Unittype.abilities.description = "Масив з об'єктами, що є здібностями юніта."
Unittype.accel.description = "Прискорення як частка від швидкості."
Unittype.aiController.description = "ШІ за замовчуванням, що визначається під час створення."
Unittype.aimDst.description = "Мінімальна дістанція, з якої може цілитись юніт (для уникнення стрільби \"всередину\" юніта)."
Unittype.allowedInPayloads .description = "Чи може юніт переміщатись за допомогою вантажних конвеєрів."
Unittype.allowLegStep.description = "Чи може юніт-павук ходити поверх будівель."
Unittype.alwaysCreateOutline.description = "Чи буде отбводитись ходова база юніта. Зазвичай обводка відключається якщо я якоїсь зброї top = false."
Unittype.alwaysShootWhenMoving .description = "Чи буде юніт постійно стріляти поки рухається незалежно від сповільнення."
Unittype.ammoCapacity.description = "Кількість снарядів, яку може мати юніт (якщо правило активне). 0 щоб визначити відносно швидкострільності зброї."
Unittype.ammoType.description = "Що використовує в якості снарядів юніт (якщо це правило активне)."
Unittype.armor.description = "Отримані збитки будуть менші на цю величину."
Unittype.autoFindTarget.description = "Чи буде юніт в режимі командування самостійно цілитись та стріляти в ворожі цілі."

Unittype.baseLegStraightness.description = "Наскільки пряма база (місце появи) ніг ( 0 - кругла, 1 - пряма. Вертикаль."
Unittype.baseRotateSpeed.description = "Швидкість повороту бази (тазу) меха. градус/с."
Unittype.boostMultiplier.description = "Збільшення швидкості в n разів під час прискорення."
Unittype.bounded.description = "Чи буде юніт відштовхуватися від країв карти."
Unittype.buildBeamOffset.description = "Візуальний відступ будівельного променю відносно переднього краю юніта."
Unittype.buildRange.description = "Дистанція для будування."
Unittype.buildSpeed.description = "Швидкість будування. Не будує якщо < 0."

Unittype.canAttack.description = "Чи будуть в юніта бойові гармати."
Unittype.canBoost.description = "Чи може наземний юніт взлітати під час керування гравцем/процесором."
Unittype.canDrown.description = "Чи може юніт втонути."
Unittype.canHeal.description = "Чи буде юніт лікувати блоки."
Unittype.circleTarget.description = "Чи буде літаючий юніт кружляти навколо цілі."
Unittype.clipSize.description = "Розмір обрубки графіки. < 0 для автоматичного обчислення."
Unittype.commands.description = "Які команди можна подавати юніту."
Unittype.constructor.description = "Створює новий екземпляр юніта даного класу."
Unittype.controller.description = "Функція, що обирає ШІ контроллер, залежно від сутності юніта."
Unittype.coreUnitDock.description = "Чи буде з'являтись юніт ядра над цим юнітом при припиненні контролю."
Unittype.crashDamageMultiplier .description = "Множник для збитку, який завдає цей літаючий юніт при падінні"
Unittype.crawlSlowdown.description = "Множник швидкості, який цей юніт матиме коли буде crawlSlowdownFrac (коли переповзає блоки)."
Unittype.crawlSlowdownFrac.description = "Швидкість, нижче якої спрацює crawlSlowdown."
Unittype.createScorch.description = "Чи буде \"вигоряння\" (чорний слід) на місці падіння юніта."
Unittype.createWreck.description = "Чи буде падаючий \"труп\" юніта у випадку збиття."
Unittype.crushDamage.description = "Збиток, який наниситься блокам під танком/"
 
Unittype.deathExplosionEffect .description = "Ефект, який відображається коли юніт вибухає."
Unittype.deathSound.description = "Назва звукового файлу, який буде звучати у випадку вибуху юніта."
Unittype.defaultCommand.description = "Команда для юніта за замовчуванням."
Unittype.dpsEstimate.description = "ДУЖЕ ГРУБА оцінка DPS. Ініціалізовано за допомогою init()."
Unittype.drag.description = "Опір руху у вигляді частки."
Unittype.drawBody.description = "Чи буде візуально відображатися юніт."
Unittype.drawBuildBeam.description = "Чи буде відображуватися будівельний промінь між юнітом та будівлею."
Unittype.drawCell.description = "Чи відображати над юнітом індикатор команди."
Unittype.drawItems.description = "Чи відображати підняті юнітом ресурси."
Unittype.drawMinimap.description = "Чи відображатиметься юніт на мінімапі."
Unittype.drawShields.description = "Чи відображати щити юніта."
Unittype.drownTimeMultiplier.description = "Множник для часу перед затопленням юніта: чим більше число, тим довше тоне."
Unittype.engineColor.description = "Колір всіх двигунів юніта."
Unittype.engineColorInner.description = "Колір внутрішнього кола двигуна."
Unittype.engineLayer.description = "Шар для відображення двигуна. < 0 за замовчуванням."
Unittype.engineOffset.description = "Змішення двигуна назад від центру юніта."
Unittype.engines.description = "Масив з двигунами(реактивними турбінами)."
Unittype.engineSize.description = "Основий радіус двигуна."
Unittype.envEnabled.description ="\"Прапори\" середовища, в яких юніт функціонує. Якщо середовище є одним з вказаних, юніт доступний."
Unittype.envDisabled.description = "\"Прапори\" середовища, в яких юніт не фукціонує. Якщо середовище є одним з вказаних, юніт вибухає або недоступний."
Unittype.envRequired.description = "Всі, необхідні для функціонування юніта, \"прапори\" середовища. 0 = будь-яке середовище."
Unittype.fallSpeed.description = "Швидкість падіння наземного юніту після вимкнення режиму польоту."
Unittype.fallEffect.description = "Назва ефекту, який буде відображатись біля юніта під час падіння."
Unittype.fallEngineEffect.description = "Назва ефекту, який буде відображатись біля двигуна юніта під час падіння."
Unittype.faceTarget.description = "Чи повертатиметься корпус юніта в сторону ворога під час прицілювання/стрільби."
Unittype.flipBackLegs.description = "(WIP) Розвертає задні ноги павука.(Не сильно впливає)."
Unittype.flipLegSide.description = "(WIP) Міняє місцями ліві та праві ноги(Не сильно впливає)."
Unittype.flying.description = "Чи є юніт авіацією."
Unittype.fogRadius.description = "Радіус огляду в тумані в блоках. < 0 за замовчуванням."
Unittype.forceMultiTarget.description = "Чи може юніт цілитись гарматами в різні цілі (гармата з параметром mirror теж)."
Unittype.groundLayer.description = "Шар, на якому відображається юніт. Чим більше число, тим \"вище\" юніт."
Unittype.healColor.description = "Яким кольором буде блимати юніт під час \"лікування\"."
Unittype.healFlash.description = "Чи буде югіт блтмати під час \"лікування\"."
Unittype.health.description = "Здоров'я юніту."
Unittype.hidden.description = "Чи буде приховано юніт від бази даних."
Unittype.hittable.description = "Чи можуть юніта пробити кулі та вибухи."
Unittype.hitSize.description = "Розмір сторони квадратного хітбоксу."
Unittype.homingDelay.description = "Кількість ігрових тіків перед тим як юніт-ракета почне шукати ціль."
Unittype.hovering.description = "Чи може наземний юніт літати над рідинами."
Unittype.hoverable .description = "Чи будуть відображатись дані про юніта при наведенні: здоров'я, щит тощо."
Unittype.internal.description = "Чи призначений юніт для внітрішнього користування та не має згенерованого спрайту."
Unittype.isEnemy.description = "Чи буде вважатись юніт за бойову одиницю і потрапляти в лічильник ворогів в хвилі."
Unittype.itemCapacity.description = "Кількість ресурсу, яку може переносити юніт. < 0 задля того щоб вирахувати відносно розміру хітбокса."
Unittype.itemOffsetY.description = "Візуальний відступ підібраних ресурсів назад."
Unittype.immunities.description = "Масив з назвами ефектів, що будуть ігноруватися юнітом."
Unittype.killable.description = "Чи є юніт смертним."
Unittype.legBaseOffset.description = "Відстань від основи ніг до центру юніта."
Unittype.legContinuousMove.description = "Чи буде юніт переминатись з ноги на ногу (для більш природнього вигляду)."
Unittype.legCount.description = "Кількість ніг юніта-павука."
Unittype.legExtension.description = "Для ніг \"без суглобів\". Видовження другої фаланги ноги."
Unittype.legForwardScl.description = "Масштаб того, як далеко наперед переноситься нога(відносно швидкості). Якщо ноги відстають від юніта, слід корегувати цей параметр."
Unittype.legGroupSize.description = "Розмір групи ніг, які будуть рухатись синхронно."
Unittype.legLength.description = "Повна довжина обох фаланг ноги юніта-павука."
Unittype.legLengthScl.description = "Масштабування для того, як далеко від тіла ноги \"намагаються\" бути. Якщо значення 0.5, то ноги будуть \"стиснені\"."
Unittype.legMaxLength.description = "Максимальна довжина окремої ноги як частки від її нормальної довжини."
Unittype.legMinLength.description = "Мінімальна довжина окремої ноги як частки від її нормальної довжини."
Unittype.legMoveSpace.description = "Масштабування для простору між рухами ноги."
Unittype.legPairOffset.description = "Чим більше значення параметру, тим менш синхронно рухаються групи ніг."
Unittype.legPhysicsLayer.description = "Чи буде юніт-павук взаємодіяти на окремому рівні висоти: інакше він взаємодіє на рівні groundLayer (60)."
Unittype.legSpeed.description = "Швидкість руху ноги юніта-павука до нового місцезнаходження."
Unittype.legSplashDamage.description = "Збиток, який завдає нога кожним своїм кроком."
Unittype.legSplashRange.description = "Радіус, в якому нога завдає збиток кожним своїм кроком."
Unittype.legStraightLength.description = "Якщо legStraightness > 0, це масштаб того, як далеко від по горизонталі тіла крокують ноги."
Unittype.legStraightness.description = "Наскільки пряма база (місце появи) ніг ( 0 - кругла, 1 - пряма. Горизонталь."
Unittype.lifetime.description = "Тривалість життя юніта-ракети."
Unittype.lightColor.description = "Колір світла, який випромінює юніт при відсутності світла."
Unittype.lightOpacity.description = "Прозорість випромінюваного світла."
Unittype.lightRadius.description = "Радіус випромінюваного світла. Для значення за замовчуванням < 0."
Unittype.lockLegBase.description = "Чи будуть ноги\"зафіксовані\" під корпусом юніта-павука."
Unittype.logicControllable.description = "Чи можна керувати юнітом за допомогою процесора."
Unittype.loopSound.description = "Який звук буде постійно лунати біля юніта."
Unittype.loopSoundVolume.description = "Гучність звуку, що лунає від юніта."
Unittype.lowAltitude.description = "Чи буде юніт відображатись на висоті, нижче ніж снаряди чи ефекти. Лише візуальний параметр."
Unittype.maxRange.description = "Максимальний діапазон гармат."
Unittype.mechFrontSway.description = "Параметр для визначення коливань ноги меха. Вперед-назад."
Unittype.mechLandShake.description = "Значення коливань камери, коли юніт приземляється після \"прискорення\"."
Unittype.mechLegColor.description = "Колір, на який змінюється нога під час руху. Для імітації глибини."
Unittype.mechSideSway.description = "Параметр для визначення коливань ноги меха. Вліво-вправо."
Unittype.mechStepParticles.description = "Чи будуть створюватись частки під час крокування."
Unittype.mechStride.description = "Параметр для визначення коливань ноги меха. Довжина кроку."
Unittype.mineFloor.description = "Чи може юніт добувати руду на рівні підлоги."
Unittype.mineHardnessScaling.description = "Чи буде час добування залежати від \"твердості\" руди."
Unittype.mineRange.description = "Радіус для добування ресурсів."
Unittype.mineSound.description = "Звук, який звучить під час добування руди."
Unittype.mineSoundVolume.description = "Гучність звуку, який звучить від час добування руди."
Unittype.mineItems.description = "Предмети, які буде шукати ШІ для добування."
Unittype.mineSpeed.description = "Швидкість видобутку руд."
Unittype.mineTier.description = "Руду якої твердості може копати юніт. < 0 щоб не було змоги."
Unittype.mineWalls.description = "Чи може юніт добувати руди зі стін."
Unittype.missileAccelTime.description = "Кількість ігрових тіків, впродовж яких цей юніт-ракета досягне максимальної швидкості руху."
Unittype.naval.description = "Чи є юнітом-кораблем."
Unittype.omniMovement.description = "Чи може юніт змінювати напрямок руху без повороту корпусу."
Unittype.outlineColor.description = "Колір обводки, що генерується навколо спрайтів."
Unittype.outlineRadius.description = "Ширина обводки спрайтів юніта."
Unittype.outlines.description = "Чи треба генерувати обводку деталей юніта."
Unittype.pathCost.description = "Функція, що буде використана для обчислення вартості руху за допомогою ControlPathfinder. Не впливає на \"нормальне\" поле потоків для пошуку шляху."
Unittype.parts.description = "Додаткові (в основному анімовані) візуальні деталі юніта."
Unittype.payloadCapacity .description = "Як багато блоків/юнітів юніт може підібрати (в блоках<sup>2</sup>)."
Unittype.physics.description = "Чи буде юніт штовхатись з іншими юнітами."
Unittype.pickupUnits.description = "Чи може цей юніт переносити предмети/юнітів."
Unittype.playerControllable .description = "Чи може гравець власноруч контролювати юніта."
Unittype.range.description = "Мінімальний діапазон, з якого починає вести стрільбу зброя. Можна змінювати за значення > 0."
Unittype.researchCostMultiplier.description = "Множник вартості дослідження в дереві технологій."
Unittype.rippleScale.description = "Розмір бризг/хмар пилу від кожного кроку."
Unittype.riseSpeed.description = "Ріст швидкості під час взлету у вигляді частки."
Unittype.rotateMoveFirst.description = "Чи буде юніт спершу розвертатись на місці, а потім починати рух." 
Unittype.rotateSpeed.description = "Швидкість повороту корпусу в градусах/с."
Unittype.rotateToBuilding.description = "Чи повертається юніт передом до будівлі, яку будує."
Unittype.sample.description = "Екземпляр одиниці, яку створює цей юніт. Не змінювати!"
Unittype.segmentMag.description = "Магнітуда синусу для відступу між сегментами"
Unittype.segmentMaxRot.description = "Максимальна різниця кута між сусідніми сегментами."
Unittype.segmentPhase.description = "Множник синусу відступу між сегментами, під впливом індексу сигменту."
Unittype.segmentRotSpeed.description = "Як швидко сегмент повертається вслід за попереднім."
Unittype.segments.description = "Кількість окремих сегментів."
Unittype.segmentScl.description = "Масштаб для синусу відступу між сегментами."
Unittype.shadowElevation.description = "Висота тіні наземного юніта. Візуальна характеристика."
Unittype.shadowElevationScl.description = "Масштабування висоти тіні юніта."
Unittype.singleTarget.description = "Чи будуть всі гармати юніта цілитись в одну ціль."
Unittype.speed.description = "Швидкість юніта в блоках/с."
Unittype.stepShake.description = "Тряска від кожного кроку павука/меха."
Unittype.strafePenalty.description = "Штраф для швидкості юніта у вигляді частки, якщо він змінив напрямок руху на протилежний." 
Unittype.squareShape.description = "Чи буде юніт мати квадратну тінь."
Unittype.targetable.description = "Чи будуть вороги цілитись в юніта."
Unittype.targetAir.description = "Чи може юніт стріляти по авіації."
Unittype.targetFlags.description = "Список типів будівель, які є пріорітетними для цього юніта."
Unittype.targetGround.description = "Чи може юніт стріляти по наземним цілям."
Unittype.targetPriority.description = "(WIP) Юніти нижчого пріоритету будуть ігноруватись за наявності юнітів з більшим пріорітетом, не зважаючи на відстань."
Unittype.trailColor.description = "Колір сліду від двигуна/хвиль."
Unittype.trailLength.description = "Довжина сліду двигуна (авіація) або бризг (флот)."
Unittype.trailScl.description = "Масштаб всіх слідів (працює і з морськими юнітами)."
Unittype.treadEffect.description = "Опціональний ефект, який буде відтворюватись під час руху танку."
Unittype.treadFrames.description = "Кількість кадрів руху на слід траку."
Unittype.treadPullOffset.description = "Як сильно обрізається верхній край траку відносно узору."
Unittype.treadRects.description = "Список траків як квадратів в КООРДИНАТАХ ЗОБРАЖЕННЯ, відносно центру. Симетрично відзеркалюються."
Unittype.type.description = "<table><thead><tr><th>Значення</th><th>Опис</th><tr></thead><tbody><tr><td>legs</td><td>Юніт-павук.</td></tr><tr><td>mech</td><td>Юніт-мех.</td></tr><tr><td>missile</td><td>Юніт-ракета.</td></tr><tr><td>crawl</td><td>Юніт-личинка.</td></tr></tbody></table>"
Unittype.useEngineElevation.description = "Чи будуть двигуни відображатися різного розміру, залежно від висоти." 
Unittype.useUnitCap.description = "Чи буде обмежено кількість юнітів цього типу."
Unittype.vulnerableWithPayloads.description = "if true, this unit can be hit/targeted when it has payloads (assuming hittable/targetable is false)."
Unittype.waveTrailX.description = "Горизонтальний відступ водяного сліду водного юніта."
Unittype.waveTrailY.description = "Вертикальний відступ водяного сліду водного юніта."
Unittype.weapons.description = "Масив з об'єктами з параметрами для гармат (Таблиця Weapons)."



export default {
    Unittype
}