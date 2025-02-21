import k, { TILE_SIZE } from "$lib/game/kaplay";

export const createEnemy = (tag: string, cantMove: boolean, mobType: string) => {
    let mobSprite: string = "";
    if (mobType === "demon") {
        mobSprite = "demon-sec" + k.randi(1, 4);
    }
    if (mobType === "ogre") {
        mobSprite = "ogre-sec" + k.randi(1, 4);
    }
    if (mobType === "ze") {
        mobSprite = "ze-sec" + k.randi(1, 4);
    }

    const enemy = k.make([
        k.sprite(mobSprite), // Removemos a animação padrão "run" daqui
        k.opacity(1),
        k.area(),
        k.pos(),
        k.scale(4),
        k.body({ isStatic: cantMove }),
        k.anchor("center"),
        k.state("idle", ["idle", "move", "attack"]),
        k.health(4),
        {
            isTakingDmg: false,
        },
        tag,
        "enemy"
    ]);

    return enemy;
};

export const spawnEnemy = (x: number, y: number, tag: string, cantMove: boolean = false, mobType: string) => {
    const enemy = k.add(createEnemy(tag, cantMove, mobType));
    enemy.pos = k.vec2(x * TILE_SIZE, y * TILE_SIZE);

    // Configuração dos estados do inimigo
    setupEnemyStates(enemy);

    return enemy;
};

// Configura os estados do inimigo
const setupEnemyStates = (enemy: any) => {
    const DETECTION_RANGE = 400; // Alcance de detecção do jogador
    let moveUpdateHandler: any = null;

    // Estado "idle": fica parado e muda para "move" se detectar o player
    enemy.onStateEnter("idle", async () => {
        enemy.play("idle"); // Define animação de idle
        while (enemy.state === "idle") {
            const player = k.get("player")[0];
            if (player && player.exists()) {
                const distance = enemy.pos.dist(player.pos);
                if (distance <= DETECTION_RANGE) {
                    enemy.enterState("move");
                    break;
                }
            }
            await k.wait(0.1);
        }
    });

    // Estado "move": persegue o jogador
    enemy.onStateEnter("move", () => {
 enemy.play("run"); // Define animação de corrida

 if (moveUpdateHandler) {
     moveUpdateHandler.cancel();
 }

 moveUpdateHandler = enemy.onUpdate(() => {
     const player = k.get("player")[0];
     if (!player || !player.exists()) return;

     const dir = player.pos.sub(enemy.pos).unit();
     enemy.move(dir.scale(250));

     // Inverte sprite com base na direção do movimento
     enemy.flipX = dir.x < 0;

     // Se o player sair do range, volta para "idle"
     if (enemy.pos.dist(player.pos) > DETECTION_RANGE) {
         enemy.enterState("idle");
     }
 });
    });

    enemy.onHurt(() => {
        if (enemy.isTakingDmg) return;
        enemy.isTakingDmg = true;
        enemy.color = k.rgb(120, 20, 0); // Define a cor para vermelho
        const player = k.get("player")[0];
        if (player && player.exists()) {
            const dir = enemy.pos.sub(player.pos).unit();
            const targetPos = enemy.pos.add(dir.scale(50));
            k.tween(enemy.pos, targetPos, 0.3, (p) => {
                enemy.pos = p;

            }); // Animação de knockbac

            
        }
        k.wait(0.5, () => {
            enemy.color = undefined;
            enemy.isTakingDmg = false;
        });
    });

    // Estado "attack": dano ao player e volta para "move"
    enemy.onStateEnter("attack", async () => {
        const player = k.get("player")[0];
        if (player && player.exists()) {
            player.hurt(1);
            k.shake(10);
        }

        await k.wait(1);
        enemy.enterState("move");
    });

    // Verifica se o inimigo morreu
    enemy.onUpdate(() => {
        if (enemy.hp() <= 0) {
            k.destroy(enemy);
            k.add([
                k.color(190, 0, 0),
                k.sprite("Explosion", { anim: "explode" }),
                k.pos(enemy.pos),
                k.scale(3),
                k.anchor("center"),
                k.lifespan(0.4),
                k.opacity(1),
            ]);
            
        }
    });

    // Limpa o handler quando o estado "move" termina
    enemy.onStateEnd("move", () => {
        if (moveUpdateHandler) {
            moveUpdateHandler.cancel();
            moveUpdateHandler = null;
        }
    });

}
