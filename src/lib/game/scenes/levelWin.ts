import type { GameObj } from 'kaplay';
import {
	k,
	loadSprites,
	loadDecorationSprites,
	loadEffectsSprites,
	loadDungeonSprites,
	spawnPlayer,
	createLevel,
	spawnObject
} from '../levelUtils/imports';
import { LEVEL_WIN } from '../levelUtils/levelLayout';
import { goto } from '$app/navigation';

await loadSprites(k);
await loadDecorationSprites(k);
await loadEffectsSprites(k);
await loadDungeonSprites(k);

k.scene('levelWin', () => {
	k.setBackground(37, 19, 26);

	createLevel(LEVEL_WIN);

	// Decoração
	// Tochas
	spawnObject(19, 0, 'torch', true, 'Torch', true);
	spawnObject(10, 0, 'torch', true, 'Torch', true);
	// Bandeiras
	spawnObject(7, 0, 'flag', true, 'Flag', true);
	spawnObject(22, 0, 'flag', true, 'Flag', true);
	// Candelabros
	spawnObject(5, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(24, 2, 'candlestick', true, 'Big-candlestick', true);
	spawnObject(6, 11, 'candlestick', true, 'Small-candlestick', true);
	spawnObject(23, 11, 'candlestick', true, 'Small-candlestick', true);
	// Teias
	spawnObject(4, k.randi(3, 10), 'teia', true, 'Left-spider-web', false, false);
	spawnObject(25, k.randi(3, 10), 'teia', true, 'Right-spider-web', false, false);
	// Pedras
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'stone', true, 'Small-stones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'stone', true, 'Big-stones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'stone', true, 'Small-stones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'stone', true, 'Big-stones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'stone', true, 'Small-stones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'stone', true, 'Big-stones', false, false);
	// Caveiras e ossos
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'caveira', true, 'Bones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'caveira', true, 'Bones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'caveira', true, 'Skull-and-bone', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'caveira', true, 'Bones', false, false);
	spawnObject(k.randi(8, 24), k.randi(2, 10), 'caveira', true, 'Skull-and-bone', false, false);

	// NPC e Player
	const npc = spawnObject(15, 4, 'npc', true, 'Npc', true);
	const player: GameObj = spawnPlayer(15, 12);

	player.onCollide('npc', () => {
		startDialogue();
	});

	k.onUpdate(() => {
		// Atualiza a direção do NPC com base na posição do jogador
		updateObjectFlipX(npc, player);
	});

	function updateObjectFlipX(obj: GameObj, player: GameObj) {
		if (player.pos.x < obj.pos.x) {
			// Se o jogador está à esquerda do objeto, vira o objeto para a esquerda
			obj.flipX = true;
		} else {
			// Se o jogador está à direita do objeto, vira o objeto para a direita
			obj.flipX = false;
		}
	}

	function startDialogue() {
		k.scene('dialogue', () => {
			k.setBackground(0, 0, 0);

			type CharacterData = {
				sprite: string;
				name: string;
			};

			type Characters = {
				Kael: CharacterData;
				Npc: CharacterData;
				Narrador: CharacterData;
			};

			const characters: Characters = {
				Kael: {
					sprite: 'Kael',
					name: 'Kael'
				},
				Npc: {
					sprite: 'Npc',
					name: 'Aelric'
				},
				Narrador: {
					sprite: '',
					name: 'Narrador'
				}
			};

			const dialogs: [string, string][] = [
				['Kael', 'You... who are you? Why did you bring me here?'],
				['Npc', 'I am Aelric, the Guardian of the Labyrinth. This place is a test for those who seek power.'],
				['Kael', 'A test? You imprisoned innocent people just for that?'],
				['Npc', 'No one here is innocent, Kael. Everyone carries guilt. You know that.'],
				['Kael', 'I did what I had to do to survive. That doesn’t justify what you’ve done.'],
				['Npc', 'You have proven yourself worthy. Now, you have a choice: leave this place or take my place as the Guardian.'],
				['Kael', 'Take your place? Trapped here forever? Never.'],
				['Npc', 'Then, your journey ends here. Use the power you’ve found wisely.'],
				['Kael', 'I just want my freedom.'],
				['Npc', 'As you wish.'],
				['Narrator', 'Aelric raises his hands, and a bright light envelops Kael. The ground shakes, and the walls of the Dungeon begin to dissolve. In an instant, Kael is pulled away, as if the labyrinth itself is expelling him.'],
				['Kael', 'What’s happening?!'],
				['Npc', 'You are free, Kael Ardyn. But remember: the Labyrinth never forgets those who enter.'],
				['Kael', 'I hope I never see you again.'],
				['Npc', 'Until then, Kael Ardyn.'],
				['Narrator', 'Kael is carried away by the light, and as it fades, he finds himself back in the world of the living. The Dungeon of Eternity remains, waiting for its next victim... or hero.']
			];

			let curDialog: number = 0;
			let isTalking: boolean = false;
			let currentText: string = '';
			let currentIndex: number = 0;

			const textbox: GameObj = k.add([
				k.rect(k.width() - 140, 140, { radius: 4 }),
				k.anchor('center'),
				k.pos(k.center().x, k.height() - 100),
				k.outline(4),
				k.color(150, 150, 150)
			]);

			const txt: GameObj = k.add([
				k.text('', {
					size: 32,
					width: k.width() - 230,
					align: 'center'
				}),
				k.color(0, 0, 0),
				k.pos(textbox.pos),
				k.anchor('center')
			]);

			const avatar: GameObj = k.add([
				k.sprite('Kael'),
				k.scale(14),
				k.anchor('center'),
				k.pos(k.center().sub(0, 50))
			]);

			const skipButton: GameObj = k.add([
				k.text('Pular', { size: 24 }),
				k.color(255, 255, 255),
				k.area(),
				k.pos(k.width() - 100, 20),
				k.anchor('topright'),
				k.outline(2),
				'skipButton'
			]);

			skipButton.onClick(() => {
				// Destruir todos os objetos da cena
				k.get("").forEach(obj => obj.destroy());

				// Navegar de volta para a página Svelte
				goto('/');
			});

			k.onKeyPress('space', () => {
				if (isTalking) return;

				if (curDialog >= dialogs.length - 1) {
					// Destruir todos os objetos da cena
					k.get("").forEach(obj => obj.destroy());

					// Navegar de volta para a página Svelte
					goto('/');
				} else {
					curDialog++;
					updateDialog();
				}
			});

			function updateDialog() {
				const [char, dialog] = dialogs[curDialog];
				if (char === 'Narrador') {
					avatar.hidden = true;
					textbox.hidden = true;
					txt.pos = k.center();
					txt.color = k.Color.fromHex('#FFFFFF');
				} else {
					avatar.hidden = false;
					textbox.hidden = false;
					avatar.use(k.sprite(characters[char as keyof typeof characters].sprite));
					txt.pos = textbox.pos;
					txt.color = k.Color.fromHex('#000000');
				}
				startWriting(dialog, char);
			}

			function startWriting(dialog: string, char: string) {
				isTalking = true;
				currentText = dialog;
				currentIndex = 0;
				txt.text = '';

				const writing = k.loop(0.04, () => {
					if (currentIndex < currentText.length) {
						txt.text += currentText[currentIndex];
						currentIndex++;
					} else {
						isTalking = false;
						writing.cancel();
					}
				});
			}

			updateDialog();
		});

		k.go('dialogue');
	}

});