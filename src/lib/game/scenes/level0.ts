import type { GameObj, TimerController } from 'kaplay';
import {
	k,
	TILE_SIZE,
	loadSprites,
	spawnPlayer,
	createLevel,
	spawnObject,
} from '../levelUtils/imports';
import { LEVEL0 } from '../levelUtils/levelLayout';
import { updateObjectFlipX } from '../objetos/object';
import './level1';
import { loadWorldSprites } from '../worldSprites';

await loadSprites(k);
await loadWorldSprites(k);

k.scene('level0', () => {

	k.setBackground(62, 137, 72);

	createLevel(LEVEL0, "forest");
	const npc: GameObj = spawnObject(17, 4, 'npc', true, 'Npc', true);
	k.debug.log(npc.tags)
	// Árvores lado direito
	spawnObject(28, 12, 'tree', true, 'Small-tree', false);
	spawnObject(26, -1, 'tree', true, 'Small-tree', false);
	spawnObject(25, 5, 'tree', true, 'Small-tree-cut', false);
	spawnObject(28, 2, 'tree', true, 'Small-tree-cut', false);
	spawnObject(22, -1, 'tree', true, 'Tree', false);
	spawnObject(26, 2, 'tree', true, 'Tree', false);
	spawnObject(24, 12, 'tree', true, 'Tree', false);
	// Árvores do lado esquerdo
	spawnObject(3, 2, 'tree', true, 'Small-tree', false);
	spawnObject(4, 8, 'tree', true, 'Small-tree', false);
	spawnObject(6, 0, 'tree', true, 'Small-tree-cut', false);
	spawnObject(8, 6, 'tree', true, 'Small-tree-cut', false);
	spawnObject(2, 4, 'tree', true, 'Tree', false);
	spawnObject(1, -1, 'tree', true, 'Tree', false);
	spawnObject(7, 9, 'tree', true, 'Tree', false);
	spawnObject(1, 10, 'tree', true, 'Tree', false);
	const player: GameObj = spawnPlayer(15, 12);

	player.onCollide('porta', () => {
		k.go('level1');
	});

	player.onCollide('npc', () => {
		startDialogue();
	});

	k.onUpdate(() => {
		updateObjectFlipX(npc, player);
	});

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
					name: 'Npc'
				},
				Narrador: {
					sprite: '',
					name: 'Narrador'
				}
			};

			const dialogs: [string, string][] = [
				['Kael', 'Who are you?'],
				['Npc', 'A traveler... But unlike you, I know the dangers of this forest.'],
				['Kael', "I don't need warnings. I can take care of myself."],
				['Npc', "We'll see... The path has already chosen you."],
				['Kael', 'What do you mean by that?'],
				['Npc', 'Your fate is sealed.'],
				[
					'Narrador',
					'The hooded figure raises his hand. An arcane circle appears, and dark chains bind Kael.'
				],
				['Kael', 'What?! Damn you!'],
				['Npc', 'If you survive... perhaps we shall meet again.'],
				[
					'Narrador',
					'The chains glow, and Kael is pulled into a dark vortex. The forest fades, leaving only darkness... Until he awakens in the *Dungeon of Eternity*.'
				]
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
				k.text('Skip', { size: 24 }),
				k.color(255, 255, 255),
				k.area(),
				k.pos(k.width() - 100, 20),
				k.anchor('topright'),
				k.outline(2),
				'skipButton'
			]);

			skipButton.onClick(() => k.go('level1'));

			k.onKeyPress('space', () => {
				if (isTalking) return;

				if (curDialog >= dialogs.length - 1) {
					k.go('level1');
				} else {
					curDialog++;
					updateDialog();
				}
			});

			function updateDialog() {
				const [char, dialog] = dialogs[curDialog];
				if (char === 'Narrador') {
					// Esconde o avatar e a textbox para o narrador
					avatar.hidden = true;
					textbox.hidden = true;
					txt.pos = k.center();
					txt.color = k.Color.fromHex('#FFFFFF');
				} else {
					// Mostra o avatar e a textbox para personagens normais
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

				const writing: TimerController = k.loop(0.04, () => {
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
