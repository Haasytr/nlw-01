import Knex from 'knex';

export async function seed(knex: Knex) {
	await knex('items').insert([
		{ Title: 'Lâmpadas', image: 'lampadas.svg' },
		{ Title: 'Pilhas e Baterias', image: 'baterias.svg' },
		{ Title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
		{ Title: 'Resíduos Eletrõnicos', image: 'eletronicos.svg' },
		{ Title: 'Redíos Orgânicos', image: 'organicos.svg' },
		{ Title: 'Ôleo de Cozinha', image: 'oleo.svg' }
	]);
}
