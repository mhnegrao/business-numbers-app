export const margemContribuicaoPorcentagem = (precoVenda: number, custoVarialvel: number): number =>
	precoVenda - custoVarialvel;
export const indiceMargemcontribuicao = (precoVenda: number, custoVarialvel: number): number => {
	const mc = margemContribuicaoPorcentagem(precoVenda, custoVarialvel);
	const result = mc / precoVenda;
	return result;
};
export const pontoEquilibrioQuantidade = (custoFixo: number, margemContribuicao: number): number =>
	custoFixo / margemContribuicao;
export const pontoEquilibrioValorMonetario = (
	custoFixo: number,
	indiceMargemContribuicao: number
): number => custoFixo / indiceMargemContribuicao;
export const lucroPrejuizoPorQuantidade = (
	quantidadeVendida: number,
	margemContribuicao: number,
	custoFixo: number
): number => quantidadeVendida * margemContribuicao - custoFixo;
export const lucroPrejuizoPorFaturamento = (
	faturamento: number,
	indiceMargemContribuicao: number,
	custoFixo: number
): number => faturamento * indiceMargemContribuicao - custoFixo;

/*testando operações*/

// //passo 1 qual o precço de venda unitário
// const precoVenda = 2;

// //passo 2 quais os custos variáveis unitários
// const custoProduto = 0.5;
// const comissao = 0.3;
// const custoVariavel = custoProduto + comissao;

// //passo 3 qual a margem de contribuição unitária e o indice da margem e contribuição
// const mc = margemContribuicaoPorcentagem(precoVenda, custoVariavel);
// const imc = indiceMargemcontribuicao(precoVenda, custoVariavel);

// //passo 4 qual despesa fixa semanal
// const custoFixo = 18;

// //passo 5 cálculo do ponto de equilibrio em Quantidade
// const peq = pontoEquilibrioQuantidade(custoFixo, mc);

// //passo 6 cálculo ponto de equilibrio em valores
// const pev = pontoEquilibrioValorMonetario(custoFixo, imc);

// //passo 7 qual o resultado vendendo x itens por semana
// const quantidadeVendida = 15;
// const lucroPrejuizoQuantidade = lucroPrejuizoPorQuantidade(
//   quantidadeVendida,
//   mc,
//   custoFixo
// );

// //passo 7.1 qual o resultado faturando x R$
// const faturamento = 30;

// const lucroPrejuizoFaturamento = lucroPrejuizoPorFaturamento(
//   faturamento,
//   imc,
//   custoFixo
// );

// //resultado do cáculo:

// console.log(`Preço de venda unitário: R$ ${precoVenda.toFixed(2)}`);
// console.log(`Impostos + comissões: R$ ${custoVariavel.toFixed(2)}`);
// console.log(`margem de contribuição R$ ${mc} IMC ${(imc*100).toFixed(2)}%`);
// console.log(`Custo da mercadoria a ser vendida: R$ ${custoProduto.toFixed(2)}`);
// console.log(`Custo fixo total: R$ ${custoFixo.toFixed(2)}`);
// console.log(`Pe(q):  ${peq}`);
// console.log(`Pe($): R$ ${pev.toFixed(2)}`);
// console.log(
//   `Lucro ou Prejuizo por qtde vendendo ${quantidadeVendida} produtos: R$ ${lucroPrejuizoQuantidade}`
// );
// console.log(
//   `Lucro ou Prejuizo por por valor faturando R$ ${faturamento}: R$ ${lucroPrejuizoFaturamento.toFixed(2)}`
// );
