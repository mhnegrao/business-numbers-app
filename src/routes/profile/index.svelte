<script lang="ts">
	import {
		Container,
		Row,
		Col,
		TextField,
		Alert,
		Icon,
		Button,
		MaterialApp
	} from 'svelte-materialify';
	import { mdiCheck, mdiThumbUp, mdiAlert } from '@mdi/js';
	import {
		pontoEquilibrioQuantidade,
		pontoEquilibrioValorMonetario,
		indiceMargemcontribuicao,
		margemContribuicaoPorcentagem,
		lucroPrejuizoPorFaturamento,
		lucroPrejuizoPorQuantidade
	} from '../../services/operacoes';

	let nomeProduto = 'Um produto qualquer';

	let precoVenda = '0';
	let custoVariavel = '0';
	let custoFixo = '0';
	let qtdeVendida = '1';
	let lucroPrejuizoQtde = 0;
	let lucroPrejuizoFaturamento = 0;

	let valorFaturado = 0;

	let peq = 0;
	let pev = 0;

	const handleClickCalcular = () => {

		

		const mc = margemContribuicaoPorcentagem(Number(precoVenda), Number(custoVariavel));
		const imc = indiceMargemcontribuicao(Number(precoVenda), Number(custoVariavel));

		peq = pontoEquilibrioQuantidade(Number(custoFixo), mc);
		peq = peq < 1 ? 1 : peq;
		pev = pontoEquilibrioValorMonetario(Number(custoFixo), imc);
		lucroPrejuizoQtde = lucroPrejuizoPorQuantidade(Number(qtdeVendida), mc, Number(custoFixo));
		valorFaturado = Number(precoVenda) * Number(qtdeVendida);
		lucroPrejuizoFaturamento = lucroPrejuizoPorFaturamento(
			Number(valorFaturado),
			imc,
			Number(custoFixo)
		);
	};
</script>

<!-- markup (zero or more items) goes here -->

<MaterialApp>
	<Container>
		<Alert class="secondary-text" text outlined>
			<h4 class="text-h4">Compor Preço</h4>
		</Alert>

		<Row>
			<Col>
				<p>
					<TextField bind:value={nomeProduto} dense>Nome do Produto/Serviço</TextField>
				</p>
				<p>
					<TextField bind:value={precoVenda} dense>Valor Unitário de Venda</TextField>
				</p>
				<p>
					<TextField bind:value={custoVariavel} dense>Total dos Custos Variáveis</TextField>
				</p>
				<p>
					<TextField bind:value={custoFixo} dense>Total dos Custos Fixos</TextField>
				</p>

				<p>
					<TextField bind:value={qtdeVendida} dense>Informe um quantidade a ser vendida</TextField>
				</p>
				<p>
					<TextField bind:value={valorFaturado} dense>Informe um valor estimado de vendas</TextField
					>
				</p>
				<Button on:click={handleClickCalcular}>Calcular</Button>
			</Col>
		</Row>
		<h4 class="text-h4">Pontos de Equilíbrio</h4>
		<Row>
			<Col>
				<Alert class="success-text" border="left" text>
					<div slot="icon">
						<Icon path={mdiCheck} />
					</div>
					Ponto de Equilíbrio em quantidade
					<strong>{peq.toPrecision(1)}</strong>
				</Alert>
			</Col>
			<Col>
				<Alert class="primary-text" border="left" text>
					<div slot="icon">
						<Icon path={mdiCheck} />
					</div>
					Ponto de Equilíbrio em Valor R$
					<strong>{pev.toFixed(2)}</strong>
				</Alert>
			</Col>
		</Row>
		<h4 class="text-h4">Lucro ou Prejuizo</h4>
		<Row>
			<Col>
				<Alert class="success-text" border="left" text>
					<div slot="icon">
						<Icon path={mdiCheck} />
					</div>
					Lucro ou Prejuizo por qtde vendendo {qtdeVendida} produtos: R$ {lucroPrejuizoQtde.toFixed(
						2
					)}
				</Alert>
			</Col>
			<Col>
				<Alert class="primary-text" border="left" text>
					<div slot="icon">
						<Icon path={mdiCheck} />
					</div>
					Lucro ou Prejuizo faturando R$ {Number(valorFaturado).toFixed(2)}: R$ {lucroPrejuizoFaturamento.toFixed(
						2
					)}`
				</Alert>
			</Col>
		</Row>
	</Container>
</MaterialApp>

<style>
	/* your styles go here */
</style>
