import type { GameObj } from 'kaplay';
import { LEVEL_WIN } from '../levelUtils/levelLayout';
import { goto } from '$app/navigation';
import {
	k,
	loadSprites,
	loadDecorationSprites,
	loadEffectsSprites,
	loadDungeonSprites,
	spawnPlayer,
	createLevel,
	spawnObject,
} from '../levelUtils/imports';

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
	for (let i = 0; i < 6; i++) {
		spawnObject(k.randi(8, 24), k.randi(2, 10), 'stone', true, i % 2 === 0 ? 'Small-stones' : 'Big-stones', false, false);
	}
	// Caveiras e ossos
	for (let i = 0; i < 6; i++) {
		spawnObject(k.randi(8, 24), k.randi(2, 10), 'caveira', true, i % 2 === 0 ? 'Bones' : 'Skull-and-bone', false, false);
	}

	// NPC e Player
	const npc = spawnObject(15, 4, 'npc', true, 'Npc', true);
	const player: GameObj = spawnPlayer(15, 12);
	
	k.onUpdate(() => {
		// Atualiza a direção do NPC com base na posição do jogador
		updateObjectFlipX(npc, player);
	});

	function updateObjectFlipX(obj: GameObj, player: GameObj) {
		obj.flipX = player.pos.x < obj.pos.x;
	}

	player.onCollide('npc', () => {
		startDialogue();
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
					name: 'Kael',
				},
				Npc: {
					sprite: 'Npc',
					name: 'Aelric',
				},
				Narrador: {
					sprite: '',
					name: 'Narrator',
				},
			};
		
			const dialogs: [string, string][] = [
				['Kael', 'You... who are you? Why did you bring me here?'],
				['Npc', 'I am Aelric, the Guardian of the Dungeon. This place is a test for those who seek power.'],
				['Kael', 'A test? You imprisoned innocent people just for that?'],
				['Npc', 'No one here is innocent, Kael. Everyone carries guilt. You know that.'],
				['Kael', 'I did what I had to do to survive.'],
				['Npc', 'You have proven yourself worthy. Now, you have a choice: leave this place or take my place as the Guardian.'],
				['Kael', 'Take your place? Trapped here forever? Never.'],
				['Npc', 'Then, your journey ends here. Use the power you’ve found wisely.'],
				['Kael', 'I just want my freedom.'],
				['Narrator', 'Aelric raises his hands, and a bright light envelops Kael. The ground shakes, and the walls of the Dungeon begin to dissolve. In an instant, Kael is pulled away, as if the labyrinth itself is expelling him.'],
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
				k.color(150, 150, 150),
			]);
		
			const txt: GameObj = k.add([
				k.text('', {
					size: 32,
					width: k.width() - 230,
					align: 'center',
				}),
				k.color(0, 0, 0),
				k.pos(textbox.pos),
				k.anchor('center'),
			]);
		
			const avatar: GameObj = k.add([
				k.sprite('Kael'),
				k.scale(14),
				k.anchor('center'),
				k.pos(k.center().sub(0, 50)),
			]);
		
			const skipButton: GameObj = k.add([
				k.text('Skip', { size: 24 }),
				k.color(255, 255, 255),
				k.area(),
				k.pos(k.width() - 100, 20),
				k.anchor('topright'),
				k.outline(2),
				'skipButton',
			]);
		
			skipButton.onClick(() => {
				goto('/');
			});
		
			k.onKeyPress('space', () => {
				if (isTalking) return;
		
				if (curDialog >= dialogs.length - 1) {
					txt.text = "End. Redirecting...";
					k.wait(2, () => {
						goto('/'); // Redireciona para a página inicial
					});
					return;
				}
		
				curDialog++;
				updateDialog();
			});
		
			function updateDialog() {
				const [char, dialog] = dialogs[curDialog];
				if (char === 'Narrator') { // Verifica se o personagem é o Narrador
					avatar.hidden = true; // Oculta o avatar
					textbox.hidden = true; // Oculta o textbox
					txt.pos = k.center(); // Centraliza o texto na tela
					txt.color = k.Color.fromHex('#FFFFFF'); // Muda a cor do texto para branco
				} else {
					avatar.hidden = false; // Exibe o avatar
					textbox.hidden = false; // Exibe o textbox
					avatar.use(k.sprite(characters[char as keyof typeof characters].sprite)); // Define o sprite do personagem
					txt.pos = textbox.pos; // Posiciona o texto no textbox
					txt.color = k.Color.fromHex('#000000'); // Muda a cor do texto para preto
				}
				startWriting(dialog); // Inicia a escrita do diálogo
			}
		
			function startWriting(dialog: string) {
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
						writing.cancel(); // Cancela o loop corretamente
					}
				});
			}
		
			updateDialog();
		});

		k.go('dialogue');
	}

});