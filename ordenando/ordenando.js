const swap = (vetor, ind1, ind2) => [vetor[ind1], vetor[ind2]] = [vetor[ind2], vetor[ind1]];

const shuffle = (vetor, trocas = vetor.length) => {
  const len = vetor.length;

  for (let i = len - 1; i > 0 && trocas > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    swap(vetor, i, j);
    trocas--;
  }

  return vetor;
};

const bubble_sort = (vetor) => {
  const len = vetor.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
      }
    }
  }
  return vetor;
};

const selection_sort = (vetor) => {
  const len = vetor.length;
  for (let i = 0; i < len - 1; i++) {
    let minInd = i;
    for (let j = i + 1; j < len; j++) {
      if (vetor[j] < vetor[minInd]) {
        minInd = j;
      }
    }
    if (minInd !== i) {
      swap(vetor, i, minInd);
    }
  }
  return vetor;
};

function particionamento(vetor, inicio, fim, pivot = vetor[fim]) {
  let i = inicio;
  for (let j = inicio; j < fim; j++) {
    if (vetor[j] <= pivot) {
      swap(vetor, i, j);
      i++;
    }
  }
  swap(vetor, i, fim)
  return i;
}

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
  if (inicio < fim) {
    const pivotInd = particionamento(vetor, inicio, fim);
    quick_sort(vetor, inicio, pivotInd - 1);
    quick_sort(vetor, pivotInd + 1, fim);
  }
  return vetor;
};

// const particionamento = (vetor, inicio, fim, pivot = vetor[fim]) => {
//   let esq = inicio;
//   let dir = fim;
//   while (esq <= dir) {
//     while (vetor[esq] < pivot) {
//       esq++;
//     }
//     while (vetor[dir] > pivot) {
//       dir--;
//     }
//     if (esq <= dir) {  
//       console.log("trocando", vetor[esq], vetor[dir], vetor);
//       // console.log(vetor);
//       swap(vetor, esq, dir);

//       esq++;
//       dir--;
//     }
//   }
//   return esq;

// };

// let teste = [8,52,74,98,8,95,22,9,5,8]


// console.log( "original",teste);
// quick_sort(teste)
// console.log( "quick" , teste);
// shuffle(teste);
// console.log("shuffle", teste);
// bubble_sort(teste);
// console.log("bubble", teste);
// shuffle(teste);
// console.log("shuffle", teste);
// selection_sort(teste);
// console.log("selection",teste);