const carros = [
  { nomeCarro: 'Lamborghini',
    preco: 1000000
  },
  { nomeCarro: 'Jipe',
    preco: 46000,
  },
  { nomeCarro: 'Brasília',
    preco: 16000,
  },
  { nomeCarro: 'Smart',
    preco: 46000,
  },
  { nomeCarro: 'Fusca',
    preco: 17000,
  },
]

const orderCars = () => {
  const cars = carros.sort((a, b) => a.preco - b.preco)
  const maisBarato = cars[0];
  const maisCaro = cars[cars.length - 1];
  return [
    maisBarato,
    maisCaro
  ]
}

